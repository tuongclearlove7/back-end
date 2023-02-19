# Introduction query parameters

- Query parameters are a defined set of parameters attached to the end of a url. They are extensions of the URL that are used to help define specific content or actions based on the data being passed. To append query params to the end of a URL, a ‘?’ Is added followed immediately by a query parameter.

### Structure 

-    https//www.domain.com/page?key1=value1&key2=value2 

### Example code

``` js

url example : http://localhost:8080/search?user=profile%20tuongclearlove7&ref=blog&author=clearlove7

app.get('/search', (req, res) => {

    console.log(req.query);

    res.render('search');
});



```

## Detail

-       link : https://www.semrush.com/blog/url-parameters/?kw=&cmp=AA_SRCH_DSA_Blog_EN&label=dsa_pagefeed&Network=g&Device=c&utm_content=622582344896&kwid=dsa-1754979168885&cmpid=18361936995&agpid=141795398135&BU=Core&extid=60114129470&adpos=&gclid=Cj0KCQiAi8KfBhCuARIsADp-A57KUZMSRpNty8ytF34HAMlrpIFSM-xWXYDL3SB0B2SuBd-ovmzV78MaAnFxEALw_wcB
-       link : https://www.youtube.com/watch?v=6LdwSrTCmo4&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=14
























