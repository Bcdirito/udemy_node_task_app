// CRUD Operations

const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) return console.log(error)

    const db = client.db(databaseName)

    // db.collection("users").insertOne({
    //     name: "Brian",
    //     age: 28
    // }, (error, result) => {
    //     if (error) return console.log("Unable to insert user")

    //     console.log(result.ops)
    // })

    // db.collection("users").insertMany([{
    //     name: "Matt",
    //     age: 27
    // }, {
    //     name: "Alex",
    //     age: 27
    // }], (error, result) => {
    //     if (error) return console.log("Unable to insert documents!")

    //     console.log(result.ops)
    // })

    db.collection("tasks").insertMany([{
        description: "Clean Apartment",
        completed: false
    }, {
        description: "Do Laundry",
        completed: true
    }, {
        description: "Get Groceries",
        completed: false
    }], (error, result) => {
        if (error) return console.log("Unable to insert documents!")

        console.log(result.ops)
    })
})
