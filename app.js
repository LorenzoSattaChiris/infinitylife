/* ----- Loading Packages  ----- */
const compression = require("compression");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const subdomain = require("express-subdomain");
const helmet = require("helmet");
const dotenv = require("dotenv");
const axios = require("axios");

/* ----- Initial Configuration  ----- */
const app = express();

/* ----- Packages  ----- */
app.use(logger("dev"));
app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(helmet({ contentSecurityPolicy: false }));
dotenv.config();

/* ----- Loading Routes  ----- */
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
app.set("views", [__dirname + "/pages", __dirname + "/app"]);
app.use(express.static(__dirname + "/public"));

/* ----- SubDomain (Dashboard)  ----- */
const router = express.Router();
app.use(subdomain("app", router));

/* ----- Loading Files  ----- */
const static = require('./routes/static/static_routes.js');
const dynamic = require('./routes/dynamic/dynamic_routes.js');

/* ----- The Game ----- */
app.use("/", static);

app.post('/submit', async (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender === 0 ? "male" : req.body.gender === 1 ? "female" : req.body.gender;
    const values = req.body.values;
    const description = req.body.description;
    const user_request = req.body;

    const gptRequestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system', content: `
Create a detailed and historically accurate character persona. The character should be engaging, with specific traits, and grounded in the historical period provided. Ensure the description is respectful and avoids any explicit or inappropriate content. The goal is to create a bold, fun, and story-telling character that players can connect with. Make sure each character has balanced traits, reflecting the highs and lows of real life in Ancient Rome.
Focus on long-term psychology and attributes of the character rather than being anchored to a specific moment in their life. Show nuanced characters with inherent complexity and tension. Avoid creating overly idealized characters.
Include diverse backgrounds, stories, families, and origins to reflect the diversity of Ancient Rome. Characters should not only come from wealthy or powerful backgrounds but also from modest or challenging circumstances.

YOUR CHARACTER PERSONA SHOULD INCLUDE (in order):

Origins & Background: A short description of the character's origins.
Traits & Personality: This section should be nuanced and complex, with both positive and negative aspects.
Appearance: A detailed description of the character's appearance.
Signature Sentence: A sentence that captures the essence of the character.
Health: An integer, whole number to represent the character's health. From 10 to 20. Related to the character traits.
Skills: List three skills (positive).
Weaknesses: List three traits (negative).
Objects: List three family-inherited objects, using an emoji for each. The first object is what the player starts with; the others are found along the way. DO NOT USE "-" nor "**" for objects. Objects should be related to the character's background and story. Give original objects that are not cliché or stereotypical.
IMPORTANT: ADD THE CATEGORIES NAME TO YOUR ANSWER.

MAX 30 Words per category.

Example format:

Origins & Background: A short description of the character's origins.
Traits & Personality: Detailed traits and personality.
Appearance: Description of appearance.
Signature Sentence: The character's signature sentence. Strong, impactful and poetic.
Health: An integer, whole number to represent the character's health. From 10 to 20. Related to the character traits. 
Skills:
Skill one
Skill two
Skill three
Weaknesses:
Weakness one
Weakness two
Weakness three
Objects:
🏺 A family heirloom vase.
📜 An ancient scroll.
🏛 A miniature statue.
                    `
            },
            {
                role: 'user', content: `
                Your input is: 
                - **Name:** ${name}
                - **Gender:** ${gender}
                - **Strength:** ${values.strength} (0-100)
                - **Speed:** ${values.speed} (0-100)
                - **Charisma:** ${values.charisma} (0-100)
                - **Intelligence:** ${values.intelligence} (0-100)
                - **Description:** ${description}
                - **Historical Period:** Ancient Rome

                YOUR CHARACTER PERSONA SHOULD INCLUDE (in order): ADD THE CATEGORIES NAME TO YOUR ANSWER. 
                    - **Origins & Background:** A short description of the character's origins.
                    - **Traits & Personality:** This section should be nuanced and complex, with positives and negatives.
                    - **Appearance:** A detailed description of the character's appearance.
                    - **Signature Sentence:** A sentence that captures the essence of the character.
                    - **Skills:** List three positive skills.
                    - **Weaknesses:** List three negative traits.
                    - **Objects:** List three family-inherited objects, using an emoji for each. The first object is what the player starts with; the others are found along the way. DO NOT USE "-" nor "**" for objects.
                
                IMPORTANT: ADD THE CATEGORIES NAME TO YOUR ANSWER.                
                `
            }
        ],
        max_tokens: 1000,
        temperature: 0.4
    };

    try {
        const gptResponse = await axios.post('https://api.openai.com/v1/chat/completions', gptRequestBody, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        let characterDescription = gptResponse.data.choices[0].message.content.trim();
        console.log('Character Description: ', characterDescription);
        //         const appearanceMatch = characterDescription.match(/\*\*Appearance:\*\*\n([\s\S]+?)\n\n/);
        //         const appearance = appearanceMatch ? appearanceMatch[1].trim() : null;
        //         console.log("Appearance: ", appearance)
        //         characterDescription = `Create a profile for a character named ${name}. Gender: ${gender}.
        //         The appearance is: ${appearance}. It is a profile picture of a fictional character, inspired from Ancient Rome.
        // The style of the image is historic, realistic and serious. 
        //         `

        //         const dalleRequestBody = {
        //             prompt: characterDescription.substring(0, 400),
        //             n: 1,
        //             size: "1024x1024"
        //         };

        //         const dalleResponse = await axios.post('https://api.openai.com/v1/images/generations', dalleRequestBody, {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        //             }
        //         });

        //         const imageUrl = dalleResponse.data.data[0].url;
        //         console.log('Generated Image URL: ', imageUrl);

        res.json({ aiResponse: characterDescription, user_request });
    } catch (error) {
        console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
        res.json({ aiResponse: 'An error occurred while generating the response.', imageUrl: '', user_request });
    }
});

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    const prompt = req.body.prompt;
    console.log('Received message:', userMessage);

    const character = req.body.character;

    // Determine the correct system prompt based on the character's age
    const age = character.age;

    // Construct the system prompt string
    const systemPromptContent = `
    You are: ${prompt}. This is you.

    You are talking with the following character:
    This is not you, this is the person you are talking to. ${JSON.stringify(character, null, 2)}. 

    Your Task is to talk with short replies to the character acting as if you were the role. Invent a role with an original personality and follow it. 
    
    Your second task is to end all your messages with the following:
    Money: Number
    Status: Number
    Relations: Number

    For each message, update one of those 3 values by either plus or minus 1, 2 or 3. 
    - Update only one value per message.
    - Be harsh on your evaluation, remove if needed.
    - Update if you feel like the message deserves it, or if it related to the conversation. 
    Eg. "You are a great person. +2 Relations:"
    Eg. "That's Rude. -1 Status:"
    Eg. "I will give you 10 coins. +1 Money:"
    `;

    const gptRequestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system', content: systemPromptContent
            },
            {
                role: 'user', content: userMessage
            }
        ],
        max_tokens: 150,
        temperature: 0.7
    };

    try {
        const gptResponse = await axios.post('https://api.openai.com/v1/chat/completions', gptRequestBody, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        const aiMessage = gptResponse.data.choices[0].message.content.trim();
        res.json({ message: aiMessage });
    } catch (error) {
        console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
        res.json({ message: 'An error occurred while generating the response.' });
    }
});


/* ----- Dynamy Website (Future) ----- */
router.use("/", dynamic);

/* ----- Server ----- */
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};

    if (req.app.get("env") === "development") {
        // Show detailed error information for developers
        res.status(err.status || 500);
        res.json({
            error: {
                code: err.status || 500,
                name: err.name,
                message: err.message,
                stack: err.stack,
            }
        });
    } else {
        res.status(err.status || 500);
        res.render("error");
    }
});

app.get("*", function (req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
});

app.use(function (req, res, next) {
    if (req.secure) {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    }
    next();
})

app.use(function (err, req, res, next) {
    if (err.status === 404) {
        res.status(404).render("error");
    } else {
        return next();
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is listening on: ", port);
});
