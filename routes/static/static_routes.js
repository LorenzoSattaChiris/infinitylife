const express = require("express");
const { createCharacter, getCharacter } = require("../db/service");
const router = express.Router();

router
  .get('/start', function (req, res) {
    res.render("start");
  })
  .get('/game', async (req, res) => {
    const characterId = req.cookies.characterId;
    if (!characterId) {
      return res.redirect('/');
    }
    try {
      const character = await getCharacter(characterId);
      console.log('Fetched character:', character); 
      res.render('game', { characterId, character });
    } catch (error) {
      console.error('Error fetching character data:', error);
      res.status(500).send('Internal Server Error');
    }
  })
  .get('/signup', function (req, res) {
    res.render("signup");
  })
  .get('/', async (req, res) => {
    const characterId = req.cookies.characterId;
    if (!characterId) {
      return res.render('home');
    }
    res.redirect('/game');
  })
  .post('/save', async (req, res) => {
    const { username, gender, description, strength, speed, charisma, intelligence, aiReply, traits, appearance, signatureSentence, health } = req.body;

    console.log('Received character data:', req.body); // Log the received data

    const newItem = {
      username: username || '',
      gender: gender || '',
      description: description || '',
      strength: strength || "50",
      speed: speed || "50",
      charisma: charisma || "50",
      intelligence: intelligence || "50",
      aiReply: aiReply || '',
      traits: traits || '',
      appearance: appearance || '',
      signatureSentence: signatureSentence || '',
      health: health || "15"
    };

    try {
      const item = await createCharacter(newItem);
      res.cookie('characterId', item.id, { maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true });
      res.redirect('/game');
    } catch (error) {
      console.error("Error creating character in DynamoDB", error.message);
      res.status(500).json({ error: error.message });
    }
  })
  .get('/logout', (req, res) => {
    res.clearCookie('characterId');
    res.redirect('/');
  })
  .post('/logout', (req, res) => {
    res.clearCookie('characterId');
    res.sendStatus(200);
  });

module.exports = router;