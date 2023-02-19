# Introduction basic routing 

- Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
Each route can have one or more handler functions, which are executed when the route is matched.

## Route structure


```js    

    app.METHOD(PATH, HANDLER)


```

### Example syntax

```js    

    Respond with Hello World! on the homepage:

    app.get('/', (req, res) => {

         res.send('Hello World!');
    });

    Respond to POST request on the root route (/), the application’s home page:

    app.post('/', (req, res) => {

        res.send('Got a POST request');
    });


    Respond to a PUT request to the /user route:

    app.put('/user', (req, res) => {

        res.send('Got a PUT request at /user');
    });

    Respond to a DELETE request to the /user route:

    app.delete('/user', (req, res) => {

         res.send('Got a DELETE request at /user');
    });

```

### Detail 

-   link : https://www.youtube.com/watch?v=Wz6WghmEmFk&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=12

-   link : https://expressjs.com/en/starter/basic-routing.html



















