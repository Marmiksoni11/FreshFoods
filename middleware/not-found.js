const notFound = (req, res) => {
    console.log('checking ----- ');
    
    res.status(404).send('Route does not exist')
}

module.exports = notFound
