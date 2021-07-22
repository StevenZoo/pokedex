const aws = require("aws-sdk");
const s3 = new aws.S3();

async function getObject(S3Object: string): Promise<Record<string, number>> {
  const params = { Bucket: "trivialproblems", Key: S3Object };

  try {
    const data = await s3.getObject(params).promise();
    return JSON.parse(data.Body.toString("utf-8"));
  } catch (e) {
    throw new Error(`Could not retrieve file from S3: ${e.message}`);
  }
}

async function getNamesIndex() {
  const namesIndexFile = "pokemon/data/index.json";
  return getObject(namesIndexFile);
}

export { getNamesIndex };
