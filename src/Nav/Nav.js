import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
function Nav() {
    return (
        <div className='d-flex justify-content-center'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="#">  <Icon.House size={30} color="black" style={{ background: "" }} className="icon-search" title='Tìm kiếm' /></a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#"> <Icon.House size={20} color="black" style={{ background: "" }} className="icon-home" title='Trang Chủ' /></a>
                        <a className="nav-item nav-link" href="#">Thời Sự</a>
                        <a className="nav-item nav-link" href="#">Góc Nhìn</a>
                        <a className="nav-item nav-link" href="#">Thế Giới</a>
                        <a className="nav-item nav-link" href="#">Video</a>
                        <a className="nav-item nav-link" href="#">Podcast</a>
                        <a className="nav-item nav-link" href="#">Kinh Doanh</a>
                        <a className="nav-item nav-link" href="#">Khoa Học</a>
                        <a className="nav-item nav-link" href="#">Giải Trí</a>
                        <a className="nav-item nav-link" href="#">Thể Thao</a>
                        <a className="nav-item nav-link" href="#">Pháp Luật</a>
                        <a className="nav-item nav-link" href="#">Giáo Dục</a>
                        <a className="nav-item nav-link" href="#">Sức Khỏe</a>
                        <a className="nav-item nav-link" href="#">Đời Sống</a>
                        <a className="nav-item nav-link" href="#">Du Lịch</a>
                        <a className="nav-item nav-link" href="#">Số Hóa</a>
                        <a className="nav-item nav-link" href="#">Xe</a>
                        <a className="nav-item nav-link" href="#">Ý Kiến</a>
                        <a className="nav-item nav-link" href="#">Tâm Sự</a>
                        <a className="nav-item nav-link" href="#">Hài</a>
                    </div>
                </div>
            </nav></div>

    );
}

export default Nav;