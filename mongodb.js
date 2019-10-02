// CRUD Operations
const {MongoClient, ObjectID} = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"


MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) return console.log(error)

    const db = client.db(databaseName)

    // db.collection("users").updateOne({
    //     __id: new ObjectID("5d935d4812154821ac79f50f")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection("tasks").updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => console.log(result))
    .catch((error) => console.log(error))
})
