//todo       The Routes looks somthing like this :  

//*          app.get('/api/v1/tasks')        -- get all the tasks 
//*          app.get('/api/v1/tasks/:id')    -- get single task

// localhost:3000/api/v1/auth/register


require("dotenv").config();

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const connectDB = require("./db/connect")

const notFound = require('./middleware/not-found');
const productRoutes = require("./routes/productRoutes")
const authRoutes = require("./routes/authRoutes")
const authenticateUser = require('./middleware/authentication');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const router = require('./routes/authRoutes');


//* static middleware  
app.set('view engine','ejs');
app.set('views', path.join(process.cwd(), 'dist'));
app.use('/images', express.static(path.join(process.cwd(), 'dist', 'images')));

app.use(express.static(path.join(process.cwd(), 'dist', 'public')));

// console.log(path.join(__dirname, 'dist'));

// app.get('/home',(req,res)=>{
//     res.status().sendFile(path.resolve(__dirname,('./index.html')));
// })

//* json middleware
app.use(express.json())
app.use(cors());
// app.use()

//! handling errors after wrapping the contorllers so that our previos errors can work

app.use(errorHandlerMiddleware)


//* routes middleware 
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/productRoutes', authenticateUser, productRoutes)
// app.use('/api/v1/productRoutes', productRoutes)
app.use('/',router);

const port = process.env.MONGO_URI || 3000;


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server Listening On Port ${port}...`))
    }
    catch(error){
        console.log(error)
    }

}

start()
