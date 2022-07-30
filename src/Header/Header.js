import './Header.css';
import * as Icon from 'react-bootstrap-icons';
function Header() {
    return (
        <header className="section top-header">
            <div className="container">
                <a></a>
                <h1>
                    <a className="logo" title="VnExpress - Báo tiếng Việt nhiều người xem nhất">
                        <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v629/v2_2019/pc/graphics/logo.svg" alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat" />
                    </a>
                </h1>
                <span className="time-now">Thứ bảy, 30/7/2022</span>
                <div className="right">
                    <h2>
                        <a className='btn24hqua' title='Mới nhất'>
                            <Icon.Clock size={15} color="black" style={{ background: "" }} className="icon-clock" />
                            Mới nhất
                        </a>
                    </h2>
                    <a className="evne" title="VnExpress International">
                        <img className="img-international" />
                        International
                    </a>
                    <form class="search search-vne" action="https://timkiem.vnexpress.net" id="formSearchHeader">
                        <input className='keywordHeader' type="text" name="q" placeholder="Tìm kiếm" autocomplete="off" />
                        <button type="submit" title="Tìm kiếm" class="btn-search-vne" id="buttonSearchHeader">
                            <Icon.Search size={15} color="black" style={{ background: "" }} className="icon-search" title='Tìm kiếm' />
                        </button>
                    </form>
                    <form className="myvne_taskbar myvne_login_button">
                        <Icon.Person size={20} color="black" style={{ background: "" }} className="icon-login" title='Đăng Nhập' />
                        <a className='log_txt'>Đăng Nhập</a>
                    </form>
                    <div className="myvne_taskbar myvne_login_button"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;