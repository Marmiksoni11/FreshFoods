



//todo       The Routes looks somthing like this :  

//*          app.get('/api/v1/tasks')        -- get all the tasks 
//*          app.get('/api/v1/tasks/:id')    -- get single task




require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path');

const connectDB = require("./db/connect")

const notFound = require('./middleware/not-found');
const productRoutes = require("./routes/productRoutes")

const errorHandlerMiddleware = require('./middleware/error-handler')

//* static middleware  
app.use(express.static(path.join(__dirname, 'dist')));

// console.log(path.join(__dirname, 'dist'));

// app.get('/home',(req,res)=>{
//     res.status().sendFile(path.resolve(__dirname,('./index.html')));
// })

//* json middleware
app.use(express.json())


//* routes middleware 
app.use('/api/v1/productRoutes', productRoutes)




app.use(notFound)

//! handling errors after wrapping the contorllers so that our previos errors can work

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000


const start = async () => {
    try{
        const conn = await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server Listening On Port ${port}... , HOST : ${conn.connection.host}`))
    }
    catch(error){
        console.log(error)
    }

}

start()
