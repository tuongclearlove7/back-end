# Introduction Express-Node Js

- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Tutorial for settings express Node Js

        Settings express node Js 
        Usage

        npm init 
        npm install express
        create file server.js
        Content in file server.js is
```js
        
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
        
        

        Settings nodemon node Js 
        Usage

        npm install nodemon --save-dev
        edit file package.json at script add "start": "nodemon --inspect server.js"

        Settings morgan node Js 
        Usage

        npm install morgan --save-dev

        Settings express-handlebars node Js 
        Usage

        npm install express-handlebars

        Settings node-sass node Js 
        Usage

        npm install node-sass --save-dev


```




































