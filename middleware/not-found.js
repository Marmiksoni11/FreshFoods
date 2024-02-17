const notFound = (req,res)=>{
    res.status(404).send(`
    <h1> Error 404 ! </h1>
    <h2>Resource Not Found</h2>
    `)
}

module.exports = notFound