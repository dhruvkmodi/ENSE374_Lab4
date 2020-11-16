const mongoose = require("mongoose");

// connect mongoose to a database called testdb
mongoose.connect("mongodb://localhost:27017/testdb", 
                {useNewUrlParser: true, 
                 useUnifiedTopology: true});

// because mongoose functions are asynchronous, there is
// no guarantee they will finish in order. To force this,
// we will call them in an async function using the "await"
// keyword after each database read / write

async function databaseCalls () {
    const UserSchema = new mongoose.Schema ({
        username: String,
        password: String
    })
    const TaskSchema = new mongoose.Schema ({
        id: String,
        name: String,
        owner: UserSchema,
        creator: String,  
        done: String,
        cleared: String
    })
}
