import './Footer.css'
function Footer() {
    return (
        <footer className="footer container">
            <div className="inner-footer width_common">
                <ul className="list-menu-footer" style={{ fontWeight: 'bold' }}>
                    <li className="item-menu">
                        <a>Trang Chủ</a>
                    </li>
                    <li className="item-menu">
                        <a>Video</a>
                    </li>
                    <li className="item-menu">
                        <a>Podcasts</a>
                    </li>
                    <li className="item-menu">
                        <a>Ảnh</a>
                    </li>
                    <li className="item-menu" style={{ paddingTop: '15px', borderTop: '1px solid #e0e0e0' }}>
                        <a>Mới nhất</a>
                    </li>
                    <li className="item-menu">
                        <a>Xem nhiều</a>
                    </li>
                    <li className="item-menu">
                        <a>Tin nóng</a>
                    </li>
                </ul>
                <ul className="list-menu-footer">
                    <li className="item-menu">
                        <a>Thời sự</a>
                    </li>
                    <li className="item-menu">
                        <a>Góc nhìn</a>
                    </li>
                    <li className="item-menu">
                        <a>Thế giới</a>
                    </li>
                    <li className="item-menu">
                        <a>Kinh doanh</a>
                    </li>
                    <li className="item-menu">
                        <a>Giải trí</a>
                    </li>
                </ul>
                <ul className="list-menu-footer">
                    <li className="item-menu">
                        <a>Thể thao</a>
                    </li>
                    <li className="item-menu">
                        <a>Pháp luật</a>
                    </li>
                    <li className="item-menu">
                        <a>Giáo dục</a>
                    </li>
                    <li className="item-menu">
                        <a>Sức khỏe</a>
                    </li>
                    <li className="item-menu">
                        <a>Đời sống</a>
                    </li>
                    <li className="item-menu">
                        <a>Du lịch</a>
                    </li>
                </ul>
                <ul className="list-menu-footer">
                    <li className="item-menu">
                        <a>Khoa học</a>
                    </li>
                    <li className="item-menu">
                        <a>Số hóa</a>
                    </li>
                    <li className="item-menu">
                        <a>Xe</a>
                    </li>
                    <li className="item-menu">
                        <a>Ý kiến</a>
                    </li>
                    <li className="item-menu">
                        <a>Tâm sự</a>
                    </li>
                    <li className="item-menu">
                        <a>Hài</a>
                    </li>
                </ul>
                <ul className="list-menu-footer" style={{ borderLeft: '1px solid #e0e0e0' }}>
                    <li className="item-menu">
                        <a>Rao vặt</a>
                    </li>
                    <li className="item-menu">
                        <a>Startup</a>
                    </li>
                    <li className="item-menu">
                        <a>Mua ảnh VnExpress</a>
                    </li>
                    <li className="item-menu">
                        <a>Vhome</a>
                    </li>
                    <li className="item-menu">
                        <a>eBox</a>
                    </li>
                    <li className="item-menu">
                        <a>eWork</a>
                    </li>
                </ul>
                <div className="wrap-contact"></div>
            </div>
            <div className="copyright width_common">
                <p style={{ position: 'relative', top: '3px', float: 'left' }}>
                    <a title='VnExpress - Báo tiếng Việt nhiều người xem nhất' className='logo_ft'>
                        <span style={{ display: 'inline-block', verticalAlign: 'top', margin: '5px 8px 0 0', color: '#222' }}>Báo điện tử</span>
                        <img src='https://s1.vnecdn.net/vnexpress/restruct/i/v629/v2_2019/pc/graphics/logo.svg' alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
                    </a>
                </p>
            </div>
            <div className="copyright-footer mt15 mb20 flexbox width_common"></div>
        </footer>
    );
}

export default Footer;