# API documentation

## Introduce API

💬 What is API? (API là gì?) :

- An API is a mechanism that allows two software components to communicate with each other using a set of definitions and protocols. For example, a weather agency's software system contains daily weather data. The weather app on your phone will “talk” to this system via the API and display daily weather updates on your phone. 
- Vietsub (API là cơ chế cho phép 2 thành phần phần mềm giao tiếp với nhau bằng một tập hợp các định nghĩa và giao thức. Ví dụ: hệ thống phần mềm của cơ quan thời tiết chứa dữ liệu về thời tiết hàng ngày. Ứng dụng thời tiết trên điện thoại của bạn sẽ “trò chuyện” với hệ thống này qua API và hiển thị thông tin cập nhật về thời tiết hàng ngày trên điện thoại của bạn.)

💬 What does API mean? (API nghĩa là gì?) :

- API stands for (Application Program Interface). In the context of APIs, the word “Application” refers to any software with distinct functionality. An interface can be seen as a service contract between two applications. This contract defines how two applications communicate with each other through requests and responses. The API documentation of these applications contains information about how developers structure those requests and responses.
- Vietsub (API là cụm viết tắt của Giao diện chương trình ứng dụng. Trong ngữ cảnh API, từ “Ứng dụng” đề cập đến mọi phần mềm có chức năng riêng biệt. Giao diện có thể được xem là một hợp đồng dịch vụ giữa 2 ứng dụng. Hợp đồng này xác định cách thức hai ứng dụng giao tiếp với nhau thông qua các yêu cầu và phản hồi. Tài liệu API của các ứng dụng này chứa thông tin về cách nhà phát triển xây dựng cấu trúc cho những yêu cầu và phản hồi đó.)

💬 What is API REST? (API REST là gì?) : 

- REST is an acronym for (REpresentative State Transition). REST defines a set of functions like GET, PUT, DELETE, etc. that the client can use to access the server's data. Client and server exchange data over HTTP protocol.
- The main feature of the REST API is statelessness. Stateless means that the server does not save client data between requests. The requests that the client sends to the server are similar to the URL you enter in your browser to access the website. The response from the server is pure data and not rendered into graphics as is often the case on a web page.
- Vietsub (REST là từ viết tắt của Chuyển trạng thái đại diện. REST xác định một tập hợp các hàm như GET, PUT, DELETE, v.v. mà máy khách có thể dùng để truy cập vào dữ liệu của máy chủ. Máy khách và máy chủ trao đổi dữ liệu qua giao thức HTTP.
- Tính năng chính của API REST là tính không trạng thái. Tính không trạng trái nghĩa là máy chủ không lưu dữ liệu của máy khách giữa các yêu cầu. Các yêu cầu mà máy khách gửi cho máy chủ tương tự như URL mà bạn nhập vào trình duyệt để truy cập vào trang web. Phản hồi từ máy chủ là dữ liệu thuần chứ không được kết xuất thành đồ họa như thường thấy trên trang web.)

💬 What is API WEB? (API WEB là gì?) : 

- Web API or Web Service API is an application processing interface between a web server and a web browser. Every web service is an API but not all APIs are web services. A REST API is a special type of Web API that uses the standard architectural style explained above.
- The existence of different terms around APIs - like Java API or Service API - is because historically APIs were created before the global network. Modern web APIs are REST APIs and the terms can be used interchangeably.
- Vietsub (API Web hoặc API Dịch vụ web là một giao diện xử lý ứng dụng giữa máy chủ web và trình duyệt web. Mọi dịch vụ web đều là API nhưng không phải tất cả API đều là dịch vụ web. API REST là một loại API Web đặc biệt sử dụng phong cách kiến trúc tiêu chuẩn được giải thích ở trên.
- Việc tồn tại các thuật ngữ khác nhau xoay quanh API - như API Java hoặc API dịch vụ - là do về mặt lịch sử, API được tạo ra trước mạng lưới toàn cầu. Các API web hiện đại là API REST và các thuật ngữ này có thể được dùng thay thế cho nhau.)

## Fake API (MOCK API)

💬what is fake API? (fake API là gì?)

- With APIs, to mock is to copy or imitate. (Fake), Mock APIs provide predefined API responses for client applications. For example, think of an application that has a database. We may want to create a mock API for that database that returns example data representations. Therefore, we can take a handful of common data objects from the database and place them into a mock API.
- Developers and client applications can interact with mock APIs the same way they interact with real APIs. However, “mocks” do not provide authentic interactions. This is a common drawback of using mocks APIs. Before we discuss the disadvantages, let me explain the advantages of mock APIs.
- Vietsub (Với API, giả lập là sao chép hoặc bắt chước. Mock API cung cấp các phản hồi API được xác định trước cho các ứng dụng khách. Ví dụ, hãy nghĩ về một ứng dụng có cơ sở dữ liệu. Chúng tôi có thể muốn tạo một API mô phỏng cho cơ sở dữ liệu đó để trả về các biểu diễn dữ liệu mẫu. Do đó, chúng ta có thể lấy một số đối tượng dữ liệu phổ biến từ cơ sở dữ liệu và đặt chúng vào một API giả.
- Các nhà phát triển và ứng dụng khách có thể tương tác với các API giả giống như cách họ tương tác với các API thực. Tuy nhiên, "giả" không cung cấp các tương tác xác thực. Đây là một nhược điểm phổ biến của việc sử dụng API giả. Trước khi chúng ta thảo luận về những nhược điểm, hãy để tôi giải thích những ưu điểm của API giả.)

- link : https://github.com/typicode/json-server
- link : https://rapidapi.com/blog/mock-api/

## Detail Infomation

- watching youtube (xem tài liệu và video kiến thức về API trên youtube và website)
- PR channels ^^

    - link : https://www.youtube.com/watch?v=s7wmiS2mSXY
    - link : https://www.youtube.com/watch?v=fu3GuYFN1p8
    - link : https://www.youtube.com/watch?v=U6Ayth8tCxI
    - link : https://www.youtube.com/watch?v=N-4prIh7t38
    - link : https://www.youtube.com/watch?v=CvX_5uyUXSs
    - link : https://www.youtube.com/watch?v=5UJGRHNZc9M

