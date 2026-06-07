const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleware/errorhandler");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000

//Connect with mongoose
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected successfully");
}).catch((error)=>{
    console.log(error);
});
//!Middlewares
app.use(express.json()) //pass the incoming json data from the user
//!Routes
app.use('/', userRoute);
//!error handler
app.use(errorHandler);
//!Start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})


