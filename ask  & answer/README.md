# Ask and Answer
```js
1. Onclick trên html khác gì với onclick trên JS
=>
2. Submit form có những cách nào ? (Onsubmit và onclick)
=> Onsubmit và onclick
3. Xử lý bất đồng bộ trong call API như thế nào ?
=> cách xử lý bất đồng bộ trong call API là sử dụng promise trong promise sẽ có 3 hàm hander là .then(), .catch() và .finally() 
- .then() sẽ chạy khi Promise thành công. Đôi khi bạn cũng có thể sử dụng để xử lý trạng thái thất bại của Promise.
- .catch() sẽ chạy chỉ khi Promise thất bại.
- .finally() sẽ chạy khi Promise chạy xong, không quan trọng là thành công hay thất bại.
- sử dụng Async/await
- Cách cuối cùng để xử lý bất đồng bộ là sử dụng async/await. Async/await được giới thiệu ở ES8, chúng được cấu tạo từ 2 phần. Phần đầu tiên là function async. Hàm này sẽ được tự động thực thi bất đồng bộ. Giá trị nó trả về là một Promise. Vì trả về Promise nên bạn sẽ phải sử dụng các handler của Promise để xử lý giá trị này.

- Phần thứ hai của async/await là operator await. Operator này sẽ được dùng cùng với một Promise. Nó sẽ khiến cho function async tạm dừng cho đến khi Promise đó chạy xong. Ngay sau đó nó sẽ lấy gía trị của Promise mà cho function async tiếp tục chạy.

- Các function async đều bất đồng bộ, khi bị pause bởi await thì phần code còn lại vẫn chạy bình thường vì function đấy không block main thread. Khi Promise chạy xong thì hàm async sẽ chạy tiếp và trả về giá trị của Promise.

- Một điều quan trọng hơn là await phải được viết trong hàm async nếu không thì sẽ gặp lỗi syntax error.
- example : 
        async function makeAPICall() {
        // Show notification about API call
            console.log('Bắt đầu gọi API.');

        // Create a Promise to make the API call
        const dataPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log('Nhận data từ API.');
            resolve('Gọi API thành công.');
            }, 2000);
        });

        return dataReceived = await dataPromise
        }

        function processAPIData() {
        console.log('Xử lý data');
        };

        function readTheData() {
        console.log('Đọc data.');
        };

        // Hàm này sẽ chạy ngay sau async makeAPICall
        // và chạy trước tất cả các hàm khác.
        function someOtherFunction() {
        console.log('Some other function not related to API.')
        }

        makeAPICall
        // add handle cho status thành công
        .then(result => {
            console.log(result);
            processAPIData();
            readTheData();
        })
        // add handle cho status thất bại
        .catch(error => {
            console.log(`Có lỗi xảy ra: ${error}.`)
        })
        // bạn có thể thêm finally() ở đây
        // .finally(() => {})

        someOtherFunction();

4. Submit form bằng onsubmit thì data gửi về server được tạo ra bằng cách nào ?
=>
5. Cho bài toán : a = [1,2,3,4] ; b =a ; a[0] = 5 ; hỏi b[0] = mấy ? Giải thích ?
=> b gán cho a và a[0] = 5 thì b[0] = 5
6. GET khác POST chỗ nào ? Có thể dùng POST bằng GET được không ?
=> GET khác POST ở chỗ là GET là dùng để lấy dữ liệu (data) còn POST là push thêm dữ liệu
7. Truthy và falsy ?
=>
8. Kết quả của (true && false || true || false && true) là gì ?
=> true, vì sẽ ưu tiên lấy true nên cặp 1 là true && false lấy true, 2 là true, 3 là false && true sẽ lấy true nên => true || true || true. Kết quả bằng = true
```





















