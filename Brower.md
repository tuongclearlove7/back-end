# Documentation Browsers

## Introduction Browsers

💬 What is Browsers? (Browsers là gì?)

- Web browsers are the most widely used software. In this primer, I will explain how they work behind the scenes. We will see what happens when you type google.com in the address bar until you see the Google page on the browser screen.

- Vietsub (Trình duyệt web là phần mềm được sử dụng rộng rãi nhất. Trong phần sơ lược này, tôi sẽ giải thích cách chúng hoạt động đằng sau hậu trường. Chúng ta sẽ xem điều gì sẽ xảy ra khi bạn nhập google.com vào thanh địa chỉ cho đến khi bạn nhìn thấy trang Google trên màn hình trình duyệt.)

## The browsers we will talk about

- There are five major browsers used on desktop today: Chrome, Internet Explorer, Firefox, Safari and Opera. On mobile, the main browsers are Android Browser, iPhone, Opera Mini and Opera Mobile, UC Browser, the Nokia S40/S60 browsers and Chrome, all of which, except for the Opera browsers, are based on WebKit. I will give examples from the open source browsers Firefox and Chrome, and Safari (which is partly open source). According to StatCounter statistics (as of June 2013) Chrome, Firefox and Safari make up around 71% of global desktop browser usage. On mobile, Android Browser, iPhone and Chrome constitute around 54% of usage.

- Vietsub (Có năm trình duyệt chính được sử dụng trên máy tính để bàn hiện nay: Chrome, Internet Explorer, Firefox, Safari và Opera. Trên điện thoại di động, các trình duyệt chính là Trình duyệt Android, iPhone, Opera Mini và Opera Mobile, UC Browser, trình duyệt Nokia S40/S60 và Chrome, tất cả đều dựa trên WebKit, ngoại trừ trình duyệt Opera. Tôi sẽ đưa ra các ví dụ từ các trình duyệt nguồn mở Firefox và Chrome và Safari (một phần là nguồn mở). Theo thống kê của StatCounter (tính đến tháng 6 năm 2013) Chrome, Firefox và Safari chiếm khoảng 71% lượng sử dụng trình duyệt máy tính để bàn trên toàn cầu. Trên thiết bị di động, Trình duyệt Android, iPhone và Chrome chiếm khoảng 54% mức sử dụng.)

## The browser's high level structure

- The browser's main components are:

- The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
The browser engine: marshals actions between the UI and the rendering engine.
The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
JavaScript interpreter. Used to parse and execute JavaScript code.
Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
Browser components
Figure 1: Browser components
It is important to note that browsers such as Chrome run multiple instances of the rendering engine: one for each tab. Each tab runs in a separate process.

- Vietsub (Các thành phần chính của trình duyệt là: Giao diện người dùng: phần này bao gồm thanh địa chỉ, nút quay lại/chuyển tiếp, menu đánh dấu trang, v.v. Mọi phần của trình duyệt đều hiển thị ngoại trừ cửa sổ nơi bạn xem trang được yêu cầu.
Công cụ trình duyệt: sắp xếp các hành động giữa giao diện người dùng và công cụ kết xuất.
Công cụ kết xuất: chịu trách nhiệm hiển thị nội dung được yêu cầu. Ví dụ: nếu nội dung được yêu cầu là HTML, công cụ hiển thị sẽ phân tích cú pháp HTML và CSS và hiển thị nội dung được phân tích cú pháp trên màn hình.
Kết nối mạng: đối với các cuộc gọi mạng như yêu cầu HTTP, sử dụng các triển khai khác nhau cho nền tảng khác nhau đằng sau giao diện độc lập với nền tảng.
Phụ trợ giao diện người dùng: được sử dụng để vẽ các tiện ích cơ bản như hộp tổ hợp và cửa sổ. Chương trình phụ trợ này hiển thị một giao diện chung không dành riêng cho nền tảng. Bên dưới nó sử dụng các phương thức giao diện người dùng của hệ điều hành.
Trình thông dịch JavaScript. Được sử dụng để phân tích cú pháp và thực thi mã JavaScript.
Lưu trữ dữ liệu. Đây là một lớp kiên trì. Trình duyệt có thể cần lưu tất cả các loại dữ liệu cục bộ, chẳng hạn như cookie. Các trình duyệt cũng hỗ trợ các cơ chế lưu trữ như localStorage, IndexedDB, WebSQL và FileSystem.
thành phần trình duyệt
Hình 1: Các thành phần của trình duyệt
Điều quan trọng cần lưu ý là các trình duyệt như Chrome chạy nhiều phiên bản của công cụ kết xuất: một phiên bản cho mỗi tab. Mỗi tab chạy trong một quy trình riêng biệt.)


## Detail Infomation

    - link : https://web.dev/howbrowserswork/
    - link : https://www.browserstack.com/guide/browser-rendering-engine
    - link : https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work
    



































