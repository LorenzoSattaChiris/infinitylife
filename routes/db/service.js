// service.js
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand, GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
const { v4: uuidv4 } = require('uuid');

const TABLE_NAME = 'infinitylife';

const dynamoDBClient = new DynamoDBClient({ region: process.env.region });
const dynamoDB = DynamoDBDocumentClient.from(dynamoDBClient);

const createCharacter = async (character) => {
    const id = `PL-${uuidv4()}`;
    const age = 0;
    const money = 0;
    const status = 0;
    const relations = 0;
    const { username, gender, description, strength, speed, charisma, intelligence, aiReply, traits, appearance, signatureSentence, health } = character;

    const params = {
        TableName: TABLE_NAME,
        Item: {
            id,
            username,
            gender,
            description,
            age,
            strength,
            speed,
            charisma,
            intelligence,
            aiReply,
            traits,
            appearance,
            signatureSentence,
            health,
            money,
            status,
            relations
        }
    };

    try {
        console.log("Attempting to create character with params:", params);
        await dynamoDB.send(new PutCommand(params));
        return { id, ...character };
    } catch (error) {
        console.error("Error putting character into DynamoDB", error);
        throw new Error('Error saving character to database');
    }
};

const getCharacter = async (id) => {
    const params = {
        TableName: TABLE_NAME, 
        Key: { id }
    };

    try {
        const data = await dynamoDB.send(new GetCommand(params));
        console.log(data.Item);
        return data.Item;
    } catch (error) {
        console.error("Error fetching character from DynamoDB", error);
        throw new Error(error);
    }
};

module.exports = {
    createCharacter,
    getCharacter,
};
