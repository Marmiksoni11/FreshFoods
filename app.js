



//todo       The Routes looks somthing like this :  

//*          app.get('/api/v1/tasks')        -- get all the tasks 
//*          app.get('/api/v1/tasks/:id')    -- get single task

// localhost:3000/api/v1/auth/register


require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');

const connectDB = require("./db/connect")

const notFound = require('./middleware/not-found');
const productRoutes = require("./routes/productRoutes")
const authRoutes = require("./routes/authRoutes")
const adminRoutes = require("./routes/adminRoutes")
const userRoutes = require("./routes/userRoutes")
const authenticateUser = require('./middleware/authentication');
const useProfileRoutes = require("./routes/profileRoutes");

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//* static middleware  
app.use(express.static(path.join(__dirname, 'dist')));


// app.get('/home',(req,res)=>{
//     res.status().sendFile(path.resolve(__dirname,('./index.html')));
// })

//* json middleware
app.use(express.json())


// var corsOptions = {
//     origin: "http://localhost:3030"
//   };
  
// //* Enable CORS
// app.use(cors(corsOptions));

  app.use(cors());
//! handling errors after wrapping the contorllers so that our previos errors can work

app.use(errorHandlerMiddleware)


//* routes middleware 
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/productRoutes', authenticateUser, productRoutes)
app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/user', authenticateUser, userRoutes)
app.use('/api/v1/profile',useProfileRoutes);



const port = process.env.PORT || 3000


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server Listening On Port ${port}...`))
    }
    catch(error){
        console.log(error)
    }

}

start()
