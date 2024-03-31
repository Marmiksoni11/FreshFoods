



//todo       The Routes looks somthing like this :  

//*          app.get('/api/v1/tasks')        -- get all the tasks 
//*          app.get('/api/v1/tasks/:id')    -- get single task

// localhost:3000/api/v1/auth/register


require('dotenv').config()
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const path = require('path');
const connectDB = require("./db/connect")
const AdminPanel = require('./controllers/adminpanel')
const notFound = require('./middleware/not-found');
const productRoutes = require("./routes/productRoutes")
const authRoutes = require("./routes/authRoutes")
const {authenticateUser,authenticateAdmin} = require('./middleware/authentication');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//AdminUser Imported!
// const{ AdminUser} = require('./controllers/AdminController');

//* static middleware  


app.use(express.static(path.join(__dirname, 'dist')));

// console.log(path.join(__dirname, 'dist'));

// app.get('/home',(req,res)=>{
//     res.status().sendFile(path.resolve(__dirname,('./index.html')));
// })

//* json middleware
app.use(express.json())

// app.use()

//! handling errors after wrapping the contorllers so that our previos errors can work

app.use(errorHandlerMiddleware)
const sassMiddleware = require('node-sass-middleware');


const srcPath = path.join(__dirname, 'dist', 'aprycot', 'html', 'dashboard', 'dist', 'assets', 'css', 'maps');
const destPath = path.join(__dirname, 'dist', 'aprycot', 'html', 'dashboard', 'dist', 'assets', 'css');


app.use(sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true, // Enable debugging output (optional)
    outputStyle: 'compressed' // Output style: compressed or expanded (optional)
}));
const fs = require('fs');
const sass = require('node-sass');

const scssDir = path.join(__dirname, 'dist', 'aprycot', 'html', 'dashboard', 'dist', 'assets', 'css', 'maps');
const cssDir = path.join(__dirname, 'dist', 'aprycot', 'html', 'dashboard', 'dist', 'assets', 'css');

// Function to compile SCSS files
function compileSCSS() {
    fs.readdir(scssDir, (err, files) => {
        if (err) {
            console.error('Error reading SCSS directory:', err);
            return;
        }
        
        // Compile each SCSS file
        files.forEach(file => {
            if (file.endsWith('.scss')) {
                const filePath = path.join(scssDir, file);
                const outputName = file.replace('.scss', '.css');
                const outputPath = path.join(cssDir, outputName);

                sass.render({
                    file: filePath,
                    outputStyle: 'compressed'
                }, (err, result) => {
                    if (err) {
                        console.error('Error compiling SCSS:', err);
                    } else {
                        fs.writeFileSync(outputPath, result.css);
                        console.log(`SCSS file '${file}' compiled successfully to '${outputName}'.`);
                    }
                });
            }
        });
    });
}

// Compile SCSS files
compileSCSS();

//* routes middleware 
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/productRoutes', authenticateUser, productRoutes)
app.use("/",authRoutes);
// app.use('/api/v1/productRoutes', productRoutes)

// here we have  called AdminUser!
//   AdminUser();





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
