const express = require("express")
const { DynamoDBClient, ScanCommand, QueryCommand } = require('@aws-sdk/client-dynamodb')
const { unmarshall } = require('@aws-sdk/util-dynamodb')

const PORT = process.env.PORT || 3001

const app = express()

const dynamodbClient = new DynamoDBClient({ region: 'us-east-2' })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

app.get("/all_cd", async (req, res, next) => {
    try {
      const results = await dynamodbClient.send(new ScanCommand({
        TableName: 'commute_data'
      }))
      const items = results["Items"].map(i => unmarshall(i))
      res.json(items)
    }
    catch (error) {
      next(error)
    }
})

app.get("/locations", async (req, res, next) => {
    try {
        const results = await dynamodbClient.send(new ScanCommand({
          TableName: 'location'
        }))
        const items = results["Items"].map(i => unmarshall(i))
        res.json(items)
      }
      catch (error) {
        next(error)
      }
})

app.get("/commute_data", async (req, res, next) => {

    const toFromPKey = `${req.query.from}->${req.query.to}`

    const command = req.query.from === "All" && req.query.to === "All" ?
        new ScanCommand({ TableName: 'commute_data' }) :
        new QueryCommand({
            KeyConditionExpression: 'to_from = :s',
            ExpressionAttributeValues: {
                ':s': {'S': toFromPKey },
            },
            TableName: 'commute_data'
        })

    try {
        const results = await dynamodbClient.send(command)
        res.json(results["Items"].map(i => unmarshall(i)))
      }
      catch (error) {
        next(error)
      }
})