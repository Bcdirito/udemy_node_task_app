// CRUD Operations
const {MongoClient, ObjectID} = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"


MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) return console.log(error)

    const db = client.db(databaseName)

    // db.collection("users").findOne({_id: new ObjectID("5d935d4812154821ac79f50f")}, (error, user) => {
    //     if (error) return console.log(error)

    //     console.log(user)
    // })

    // db.collection("users").find({age: 27}).toArray((error, users) => {
    //     if (error) return console.log(error)
    //     console.log(users)
    // })

    // db.collection("users").find({age: 27}).count((error, count) => {
    //     if (error) return console.log(error)
    //     console.log(count)
    // })

    db.collection("tasks").findOne({_id: new ObjectID("5d9222761f92a432e8fa8cf8")}, (error, task) => {
        if (error) return console.log(error)
        console.log(task)
    })

    db.collection("tasks").find({completed: false}).toArray((error, tasks) => {
        if (error) return console.log(error)
        console.log(tasks)
    })
})
