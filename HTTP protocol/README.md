# HTTPS and HTTP documentation

## Introduce HTTP

💬 What is HTTP? (HTTP là gì?)
- HTTP is the TCP/IP based application layer communication protocol which standardizes how the client and server communicate with each other. It defines how the content is requested and transmitted across the internet. 
- Vietsub (HTTP là giao thức giao tiếp lớp ứng dụng dựa trên TCP/IP chuẩn hóa cách máy khách và máy chủ giao tiếp với nhau. Nó xác định cách nội dung được yêu cầu và truyền qua internet.)

💬What is in an HTTP request? (yêu cầu HTTP là gì?)

- An HTTP request is the way Internet communications platforms such as web browsers ask for the information they need to load a website.
- Each HTTP request made across the Internet carries with it a series of encoded data that carries different types of information. A typical HTTP request contains:

1 HTTP version type
2 a URL
3 an HTTP method
4 HTTP request headers
5 Optional HTTP body.

- Let’s explore in greater depth how these requests work, and how the contents of a request can be used to share information.
- Vietsub (Yêu cầu HTTP là cách các nền tảng truyền thông Internet như trình duyệt web yêu cầu thông tin họ cần để tải trang web.
Mỗi yêu cầu HTTP được thực hiện trên Internet mang theo một loạt dữ liệu được mã hóa mang các loại thông tin khác nhau. Một yêu cầu HTTP điển hình chứa:

1 loại phiên bản HTTP
2 một địa chỉ
3 một phương thức HTTP
4 tiêu đề yêu cầu HTTP
5 Nội dung HTTP tùy chọn.

- Hãy khám phá sâu hơn cách thức hoạt động của những yêu cầu này và cách thức sử dụng nội dung của yêu cầu để chia sẻ thông tin.)

💬What is an HTTP method? (phương thức HTTP là gì?)

- An HTTP method, sometimes referred to as an HTTP verb, indicates the action that the HTTP request expects from the queried server. For example, two of the most common HTTP methods are ‘GET’ and ‘POST’; a ‘GET’ request expects information back in return (usually in the form of a website), while a ‘POST’ request typically indicates that the client is submitting information to the web server (such as form information, e.g. a submitted username and password).
- Vietsub (Phương thức HTTP, đôi khi được gọi là động từ HTTP, cho biết hành động mà yêu cầu HTTP mong đợi từ máy chủ được truy vấn. Ví dụ: hai trong số các phương thức HTTP phổ biến nhất là 'GET' và 'POST'; yêu cầu 'NHẬN' yêu cầu trả lại thông tin (thường ở dạng trang web), trong khi yêu cầu 'POST' thường chỉ ra rằng khách hàng đang gửi thông tin đến máy chủ web (chẳng hạn như thông tin biểu mẫu, ví dụ: tên người dùng và mật khẩu đã gửi.)

💬What’s an HTTP status code? (Mã trạng thái HTTP là gì?)
- HTTP status codes are 3-digit codes most often used to indicate whether an HTTP request has been successfully completed. Status codes are broken into the following 5 blocks:

1 1xx Informational
2 2xx Success
3 3xx Redirection
4 4xx Client Error
5 5xx Server Error

- The “xx” refers to different numbers between 00 and 99.

- Status codes starting with the number ‘2’ indicate a success. For example, after a client requests a webpage, the most commonly seen responses have a status code of ‘200 OK’, indicating that the request was properly completed.

- If the response starts with a ‘4’ or a ‘5’ that means there was an error and the webpage will not be displayed. A status code that begins with a ‘4’ indicates a client-side error (it is very common to encounter a ‘404 NOT FOUND’ status code when making a typo in a URL). A status code beginning in ‘5’ means something went wrong on the server side. Status codes can also begin with a ‘1’ or a ‘3’, which indicate an informational response and a redirect, respectively.
- Vietsub (Mã trạng thái HTTP là mã gồm 3 chữ số thường được sử dụng nhất để cho biết liệu một yêu cầu HTTP đã được hoàn tất thành công hay chưa. Mã trạng thái được chia thành 5 khối sau:

1 1xx Thông tin
2 2xx thành công
3 Chuyển hướng 3xx
4 Lỗi máy khách 4xx
5 Lỗi máy chủ 5xx
- “xx” đề cập đến các số khác nhau giữa 00 và 99.

- Mã trạng thái bắt đầu bằng số '2' biểu thị thành công. Ví dụ: sau khi khách hàng yêu cầu một trang web, các phản hồi thường thấy nhất có mã trạng thái là '200 OK', cho biết rằng yêu cầu đã được hoàn thành đúng cách.

- Nếu phản hồi bắt đầu bằng '4' hoặc '5', điều đó có nghĩa là đã xảy ra lỗi và trang web sẽ không được hiển thị. Mã trạng thái bắt đầu bằng số '4' biểu thị lỗi phía máy khách (rất phổ biến khi gặp phải mã trạng thái '404 KHÔNG TÌM THẤY' khi thực hiện lỗi đánh máy trong URL). Mã trạng thái bắt đầu bằng '5' có nghĩa là đã xảy ra sự cố ở phía máy chủ. Mã trạng thái cũng có thể bắt đầu bằng '1' hoặc '3', tương ứng cho biết phản hồi thông tin và chuyển hướng.)

## Detail Infomation

- Watching Youtube (xem tài liệu và video kiến thức về HTTP trên youtube và website)

    - link : https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/
    - link : https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
    - link : https://kamranahmed.info/blog/2016/08/13/http-in-depth
    - link : https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/
    - link : https://www.youtube.com/watch?v=a-sBfyiXysI
    - link : https://www.youtube.com/watch?v=iYM2zFP3Zn0