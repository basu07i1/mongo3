const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Rahul",
        to: "Rohit",
        msg: "How are you?",
        created_at: new Date()
    },
    {
        from: "Rohan",
        to: "Sohan",
        msg: "Are you coming to the party?",
        created_at: new Date()
    },
    {
        from: "Kajal",
        to: "Neha",
        msg: "Let's catch up soon!",
        created_at: new Date()
    },
    {
        from: "Amit",
        to: "Ravi",
        msg: "Did you finish the project?",
        created_at: new Date()  
    },
    {
        from: "Priya",
        to: "Anjali",
        msg: "Happy Birthday!",
        created_at: new Date()  
    },
    {
        from: "Siddharth",
        to: "Aarav",
        msg: "Good luck for your exams!",       
        created_at: new Date()
    },
]
Chat.insertMany(allChats);