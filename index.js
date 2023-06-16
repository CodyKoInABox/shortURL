const app = require('express')()

app.get('/', (req, res) =>{
    res.send('Hello, World!')
})

app.get('/create/:originalURL', (req, res) =>{
    let originalURL = req.params.originalURL

    try{
        res.redirect('https://www.google.com/')
    }catch(e){}

    res.send({
        'originalURL': originalURL,
        'shortURL': 'https://www.google.com/'
    })
})

app.listen('8010')