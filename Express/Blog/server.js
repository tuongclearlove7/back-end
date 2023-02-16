const express = require('express')
const app = express()
const port = 8080


//route : tuyến đường
app.get('/home', (req, res) => {

    res.send('Hello World!')
})

app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
});

























