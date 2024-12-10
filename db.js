const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://milansharmaid:TsX9tgG0sji2vh49@cluster0.c0hag.mongodb.net/GoFoodMern?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB =async() => {
    await mongoose.connect(mongouri, { useNewUrlParser: true}, async(err,result)=>{
        if (err) console.log('---', err)
        else{
        console.log("connected successfully")
        const fetched_data = await mongoose.connection.db.collection("food_items")
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log()
        })
    }
    });
}

module.exports = mongoDB;