import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
function Nav() {
    return (
        <div className='d-flex justify-content-center'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                {/* <a class="navbar-brand" href="#">  <Icon.House size={30} color="black" style={{ background: "" }} className="icon-search" title='Tìm kiếm' /></a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="#"> <Icon.House size={20} color="black" style={{ background: "" }} className="icon-home" title='Trang Chủ' /></a>
                        <a class="nav-item nav-link" href="#">Thời Sự</a>
                        <a class="nav-item nav-link" href="#">Góc Nhìn</a>
                        <a class="nav-item nav-link" href="#">Thế Giới</a>
                        <a class="nav-item nav-link" href="#">Video</a>
                        <a class="nav-item nav-link" href="#">Podcast</a>
                        <a class="nav-item nav-link" href="#">Kinh Doanh</a>
                        <a class="nav-item nav-link" href="#">Khoa Học</a>
                        <a class="nav-item nav-link" href="#">Giải Trí</a>
                        <a class="nav-item nav-link" href="#">Thể Thao</a>
                        <a class="nav-item nav-link" href="#">Pháp Luật</a>
                        <a class="nav-item nav-link" href="#">Giáo Dục</a>
                        <a class="nav-item nav-link" href="#">Sức Khỏe</a>
                        <a class="nav-item nav-link" href="#">Đời Sống</a>
                        <a class="nav-item nav-link" href="#">Du Lịch</a>
                        <a class="nav-item nav-link" href="#">Số Hóa</a>
                        <a class="nav-item nav-link" href="#">Xe</a>
                        <a class="nav-item nav-link" href="#">Ý Kiến</a>
                        <a class="nav-item nav-link" href="#">Tâm Sự</a>
                        <a class="nav-item nav-link" href="#">Hài</a>
                    </div>
                </div>
            </nav></div>

    );
}

export default Nav;