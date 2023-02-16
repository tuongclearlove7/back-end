# Introduction Express-Node Js

- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Tutorial for settings express Node Js

        Settings express node Js 
        Usage
        - Step 1 : npm init 
        - Step 2 : npm install express
        - Step 3 : create file server.js
        - Content in file server.js is
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
        
        
```













































