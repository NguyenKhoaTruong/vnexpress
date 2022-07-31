import './Footer.css';
import * as Icon from 'react-bootstrap-icons';
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
                <div className="wrap-contact">
                    <div className='contact downloadapp'>
                        <p>Tải ứng dụng</p>
                        <a href='https://vnexpress.net/#down-app-popup_vne' className='app_vne open-popup-link' title='VnExpress'>
                            <img className='ic ic-vne' />
                            VnExpress
                        </a>
                        <a href='https://vnexpress.net/#down-app-popup_evne' className='app_evne open-popup-link' title='International'>
                            <img className='ic ic-evne' />
                            International
                        </a>
                    </div>
                    <div className='contact'>
                        <p> Liên hệ</p>
                        <a href="https://vnexpress.net/lien-he-toa-soan" className='mail' title='Liên hệ tòa soạn'>
                            <Icon.Envelope size={20} color="gray" style={{ background: "" }} className="ic ic-mail" title='mail' />
                            Tòa soạn
                        </a>
                        <a href="https://eclick.vn/lien-he/?utm_source=VNE&utm_medium=CPC_BOX&utm_campaign=LienHeQuangCao" className='ads' title='Liên hệ quảng cáo'>
                            <Icon.BadgeAd size={20} color="black" style={{ background: "" }} className="ic ic-ads" title='ads' />
                            Quảng cáo
                        </a>
                        <a href="https://vlight.vnexpress.net/lien-he" className='vlight' title='Vlight'>
                            <Icon.EnvelopePaper size={20} color="#9f7e21" style={{ background: "" }} className="ic-vlight" title='Vlight' />
                            Hợp tác bản quyền
                        </a>
                    </div>
                    <div className='hotline'>
                        <p>Đường dây nóng</p>
                        <div className='left'>
                            <strong>083.888.0123</strong>
                            <p>(Hà Nội)</p>
                        </div>
                        <div className='right-line'>
                            <strong>082.233.3555</strong>
                            <p>(TP. Hồ Chí Minh)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright width_common">
                <p style={{ position: 'relative', top: '3px', float: 'left' }}>
                    <a title='VnExpress - Báo tiếng Việt nhiều người xem nhất' className='logo_ft'>
                        <span style={{ display: 'inline-block', verticalAlign: 'top', margin: '5px 8px 0 0', color: '#222' }}>Báo điện tử</span>
                        <img src='https://s1.vnecdn.net/vnexpress/restruct/i/v629/v2_2019/pc/graphics/logo.svg' alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
                    </a>
                </p>
                <div className='right flexbox'>
                    <a href='' title='RSS' style={{ color: 'inherit', textDecoration: 'none', outline: '1' }}> RSS
                        <span className='txt-follow'> Theo dõi VnExpress trên</span>
                        <a href="https://www.facebook.com/congdongvnexpress/">
                            <Icon.Facebook size={20} color="gray" style={{ background: "" }} className="icon-facebook" title='facebook' />
                        </a>
                        <a href="https://twitter.com/VnEnews">
                            <Icon.Twitter size={20} color="gray" style={{ background: "" }} className="icon-twitter" title='twitter' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCVRqZH5QnrnbMWhElPBD-MQ?sub_confirmation=1">
                            <Icon.Youtube size={20} color="gray" style={{ background: "" }} className="icon-youtube" title='youtube' />
                        </a>
                    </a>
                </div>
            </div>
            <div className="copyright-footer mt15 mb20 flexbox width_common">

                <p>
                    <strong>Báo tiếng Việt nhiều người xem nhất</strong>
                    <br />
                    Thuộc Bộ Khoa học Công nghệ
                    <br />
                    Số giấy phép: 548/GP-BTTTT ngày 24/08/2021
                </p>
                <p>

                    Tổng biên tập: Phạm Hiếu
                    <br />
                    Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
                    <br />
                    Điện thoại: 024 7300 8899 - máy lẻ 4500
                </p>
                <p>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>
            </div>
        </footer>
    );
}

export default Footer;