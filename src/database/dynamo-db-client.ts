const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

async function get(id: number) {
  const params = generateParamsForGet(id);

  return await docClient
    .get(params)
    .promise()
    .then((result: Record<string, any>) => {
      if (result == null) return null;
      return result["Item"];
    });
}

async function queryByName(name: string) {
  const params = generateParamsForQueryByName(name);

  return await docClient
    .query(params)
    .promise()
    .then((result: Record<string, any>) => {
      if (result == null) return null;
      return result["Item"];
    });
}

function generateParamsForGet(id: number) {
  return {
    TableName: "Pokemon",
    Key: {
      id: id,
    },
  };
}

function generateParamsForQueryByName(name: string) {
  return {
    TableName: "Pokemon",
    IndexName: "name-index",
    KeyConditionExpression: "#pokemonName = :name",
    ExpressionAttributeNames: {
      "#pokemonName": "name",
    },
    ExpressionAttributeValues: {
      ":name": name,
    },
  };
}

export { get, queryByName };
