import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import './Nav.css'
function Nav() {
    return (
        // <div className='d-flex justify-content-center'>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //                 <a className="nav-item nav-link" href="#"> <Icon.House size={20} color="black" style={{ background: "" }} className="icon-home" title='Trang Chủ' /></a>
        //                 <a className="nav-item nav-link" href="#">Thời Sự</a>
        //                 <a className="nav-item nav-link" href="#">Góc Nhìn</a>
        //                 <a className="nav-item nav-link" href="#">Thế Giới</a>
        //                 <a className="nav-item nav-link" href="#">Video</a>
        //                 <a className="nav-item nav-link" href="#">Podcast</a>
        //                 <a className="nav-item nav-link" href="#">Kinh Doanh</a>
        //                 <a className="nav-item nav-link" href="#">Khoa Học</a>
        //                 <a className="nav-item nav-link" href="#">Giải Trí</a>
        //                 <a className="nav-item nav-link" href="#">Thể Thao</a>
        //                 <a className="nav-item nav-link" href="#">Pháp Luật</a>
        //                 <a className="nav-item nav-link" href="#">Giáo Dục</a>
        //                 <a className="nav-item nav-link" href="#">Sức Khỏe</a>
        //                 <a className="nav-item nav-link" href="#">Đời Sống</a>
        //                 <a className="nav-item nav-link" href="#">Du Lịch</a>
        //                 <a className="nav-item nav-link" href="#">Số Hóa</a>
        //                 <a className="nav-item nav-link" href="#">Xe</a>
        //                 <a className="nav-item nav-link" href="#">Ý Kiến</a>
        //                 <a className="nav-item nav-link" href="#">Tâm Sự</a>
        //                 <a className="nav-item nav-link" href="#">Hài</a>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <>
            <div className='d-flex justify-content-center' style={{
                borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'
                , position: '-webkit-sticky', position: 'sticky', top: 0, zIndex: '1000', background: 'rgb(235 233 231)'
            }}>
                <ul className="nav">
                    <li><a href="/"> <Icon.House size={20} color="black" style={{ background: "" }} className="" title='Trang Chủ' /></a></li>
                    <li><a href="#">Thời Sự</a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#">Chính Trị</a>
                            </li>
                            <li><a href="#">Dân Sinh</a></li>
                            <li><a href="#">Lao Động - Việc Làm</a></li>
                            <li><a href="#">Giao Thông</a></li>
                            <li><a href="#">MeKong</a></li>
                            <li><a href="#">Quỹ Hy Vọng</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Góc Nhìn</a>
                        <ul className="sub-menu">
                            <li><a href="#">Bình Luận Nhiều</a></li>
                            <li><a href="#">Covid 19</a></li>
                            <li><a href="#">Chính Trị {'&'} Chính Sách</a></li>
                            <li><a href="#">Y tế {'&'} Sức Khỏe</a></li>
                            <li><a href="#">Kinh Doanh {'&'} Quản trị</a></li>
                            <li><a href="#">Giáo Dục {'&'} Tri Thức</a></li>
                            <li><a href="#">Môi Trường</a></li>
                            <li><a href="#">Văn Hóa {'&'} Lối Sống</a></li>
                            <li><a href="#">Tác Giả</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Thế Giới</a>
                        <ul className="sub-menu">
                            <li><a href="#">Tư Liệu</a></li>
                            <li><a href="#">Phân Tích</a></li>
                            <li><a href="#">Người Việt 5 Châu</a></li>
                            <li><a href="#">Cuộc Sống Đó Đây</a></li>
                            <li><a href="#">Quân Sự</a></li>
                        </ul></li>
                    <li><a href="#">Video</a>
                        <ul className="sub-menu">
                            <li><a href="#">Thời Sự</a></li>
                            <li><a href="#">Nhịp Sống</a></li>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Tôi Kể</a></li>
                            <li><a href="#">Chuyện Núi Rừng</a></li>
                            <li><a href="#">Pháp Luật</a></li>
                            <li><a href="#">Giải Trí</a></li>
                            <li><a href="#">Thể Thao</a></li>
                            <li><a href="#">Số Hóa</a></li>
                            <li><a href="#">Xe</a></li>
                            <li><a href="#">Sức Khỏe</a></li>
                            <li><a href="#">Du Lịch</a></li>
                            <li><a href="#">Thế Giới</a></li>
                            <li><a href="#">Khoa Học</a></li>
                            <li><a href="#">Giáo Dục</a></li>
                            <li><a href="#">Tọa Đàm Kinh Tế</a></li>
                            <li><a href="#">Chủ Đề</a></li>
                            <li><a href="#">Nguy Cơ</a></li>
                        </ul></li>
                    <li><a href="#">Podcast</a>
                        <ul className="sub-menu">
                            <li><a href="#">VnExpress Hôm Nay</a></li>
                            <li><a href="#">Họ Nói Gì?</a></li>
                            <li><a href="#">Hộp Đen</a></li>
                            <li><a href="#">Ly Hôn</a></li>
                            <li><a href="#">Thầm Thì</a></li>
                            <li><a href="#">Bạn Ổn Không?</a></li>
                            <li><a href="#">Tôi Trong Gương</a></li>
                            <li><a href="#">Điểm Tin</a></li>
                            <li><a href="#">Chuyện Đi Làm</a></li>
                        </ul></li>
                    <li><a href="#">Kinh Doanh</a>
                        <ul className="sub-menu">
                            <li><a href="#">Quốc Tế</a></li>
                            <li><a href="#">Doanh Nghiệp</a></li>
                            <li><a href="#">Chứng Khoán</a></li>
                            <li><a href="#">Bất Động Sản</a></li>
                            <li><a href="#">Ebank</a></li>
                            <li><a href="#">Vĩ Mô</a></li>
                            <li><a href="#">Tiền Của Tôi</a></li>
                            <li><a href="#">Bảo Hiểm</a></li>
                            <li><a href="#">Hàng Hóa</a></li>
                        </ul></li>
                    <li><a href="#">Khoa Học</a>
                        <ul className="sub-menu">
                            <li><a href="#">Khoa Học Trong Nước</a></li>
                            <li><a href="#">Tin Tức</a></li>
                            <li><a href="#">Phát Minh</a></li>
                            <li><a href="#">Ứng Dụng</a></li>
                            <li><a href="#">Thế Giới Tự Nhiên</a></li>
                            <li><a href="#">Thường Thức</a></li>
                            <li><a href="#">Sáng Kiến Khoa Học</a></li>
                        </ul></li>
                    <li><a href="#">Giải Trí</a>
                        <ul className="sub-menu">
                            <li><a href="#">Giới Sao</a></li>
                            <li><a href="#">Phim</a></li>
                            <li><a href="#">Video</a></li>
                            <li><a href="#">Nhạc</a></li>
                            <li><a href="#">Thời Trang</a></li>
                            <li><a href="#">Làm Đẹp</a></li>
                            <li><a href="#">Sách</a></li>
                            <li><a href="#">Sân Khấu - Mỹ Thuật</a></li>
                        </ul></li>
                    <li><a href="#">Thể Thao</a>
                        <ul className="sub-menu">
                            <li><a href="#">Bóng Đá</a></li>
                            <li><a href="#">Marathon</a></li>
                            <li><a href="#">Lịch Thi Đấu</a></li>
                            <li><a href="#">Tennis</a></li>
                            <li><a href="#">Các Môn Khác</a></li>
                            <li><a href="#">Hậu Trường</a></li>
                            <li><a href="#">Video</a></li>
                            <li><a href="#">Ảnh</a></li>
                            <li><a href="#">Tường Thuật</a></li>
                        </ul></li>
                    <li><a href="#">Pháp Luật</a>
                        <ul className="sub-menu">
                            <li><a href="#">Hồ Sơ Phá Án</a></li>
                            <li><a href="#">Tư Vấn</a></li>
                            <li><a href="#">Video</a></li>
                        </ul></li>
                    <li><a href="#">Giáo Dục</a>
                        <ul className="sub-menu">
                            <li><a href="#">Tin Tức</a></li>
                            <li><a href="#">Tuyển Sinh</a></li>
                            <li><a href="#">Chân Dung</a></li>
                            <li><a href="#">Du Học</a></li>
                            <li><a href="#">Học Tiếng Anh</a></li>
                            <li><a href="#">Trắc Nghiệm</a></li>
                            <li><a href="#">Giáo Dục 4.0</a></li>
                        </ul></li>
                    <li><a href="#">Sức Khỏe</a>
                        <ul className="sub-menu">
                            <li><a href="#">Tin Tức</a></li>
                            <li><a href="#">Tư Vấn </a></li>
                            <li><a href="#">Dinh Dưỡng</a></li>
                            <li><a href="#">Khỏe Đẹp</a></li>
                            <li><a href="#">Đàn Ông</a></li>
                            <li><a href="#">Các Bệnh</a></li>
                            <li><a href="#">Vaccine</a></li>
                            <li><a href="#">Di Chứng Covid</a></li>
                            <li><a href="#">Di Truyền</a></li>
                        </ul></li>
                    <li><a href="#">Đời Sống</a>
                        <ul className="sub-menu">
                            <li><a href="#">Tổ Ấm</a></li>
                            <li><a href="#">Bài Học Sống</a></li>
                            <li><a href="#">Nhà</a></li>
                            <li><a href="#">Tiêu Dùng</a></li>
                            <li><a href="#">Cooking</a></li>
                        </ul></li>
                    <li><a href="#">Du Lịch</a>
                        <ul className="sub-menu">
                            <li><a href="#">Điểm Đến</a></li>
                            <li><a href="#">Ẩm Thực</a></li>
                            <li><a href="#">Dấu Chân</a></li>
                            <li><a href="#">Tư Vấn </a></li>
                            <li><a href="#">Cẩm Nang</a></li>
                            <li><a href="#">Ảnh</a></li>
                            <li><a href="#">Ăn Và Chơi</a></li>
                            <li><a href="#">Mở Cửa Du Lịch</a></li>
                        </ul></li>
                    <li><a href="#">Số Hóa</a>
                        <ul className="sub-menu">
                            <li><a href="#">Công Nghệ</a></li>
                            <li><a href="#">Sản Phẩm</a></li>
                            <li><a href="#">BlockChain</a></li>
                            <li><a href="#">Startup</a></li>
                        </ul></li>
                    <li><a href="#">Xe</a>
                        <ul className="sub-menu">
                            <li><a href="#">Thị Trường</a></li>
                            <li><a href="#">Cầm Lái</a></li>
                            <li><a href="#">Diễn Đàn</a></li>
                            <li><a href="#">V-Car</a></li>
                            <li><a href="#">Thi Bằng Lái</a></li>
                            <li><a href="#">Mua Bán</a></li>
                        </ul></li>
                    <li><a href="#">Ý Kiến</a>
                        <ul className="sub-menu">
                            <li><a href="#">Thời Sự</a></li>
                            <li><a href="#">Đời Sống</a></li>
                        </ul></li>
                </ul>
            </div>
        </>
    );
}

export default Nav;