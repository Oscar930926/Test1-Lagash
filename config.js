var config = {}

config.host = process.env.HOST || "https://test1-lagash.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "KyuTLko4VO7b2rFtwZTqDCrJ3sC1foou4xEAwWqDTrRI1coR3dYbpfUxbLi789gdGxeWvR8Cm7AQBgSwqVuFNg==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;