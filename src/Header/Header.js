import './Header.css';
import * as Icon from 'react-bootstrap-icons';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <form className="search search-vne" action="https://timkiem.vnexpress.net" id="formSearchHeader">
                        <input className='keywordHeader' type="text" name="q" placeholder="Tìm kiếm" autocomplete="off" />
                        <button type="submit" title="Tìm kiếm" className="btn-search-vne" id="buttonSearchHeader">
                            <Icon.Search size={15} color="black" style={{ background: "" }} className="icon-search" title='Tìm kiếm' />
                        </button>
                    </form>
                    <form className="myvne_taskbar myvne_login_button">
                        <Icon.Person size={20} color="black" style={{ background: "" }} className="icon-login" title='Đăng Nhập' />
                        <a className='log_txt' onClick={handleShow}>Đăng Nhập</a>
                    </form>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        size="lg"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Đăng Nhập</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <p className='text-center'>Đăng nhập với email</p>
                                        <form className="needs-validation" novalidate>
                                            <div className="form-row">
                                                <div className="col m-3">
                                                    <input type="email" className="form-control" id="validationTooltip01" placeholder="Enter email" required aria-describedby="emailHelp" />
                                                    <div className="valid-tooltip">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col m-3">
                                                    <input type="password" className="form-control" id="validationTooltip02" placeholder="Password" required />
                                                    <div className="valid-tooltip">
                                                        Looks good!
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='text-center'>
                                                <button className="btn btn-danger mt-3" type="submit">Đăng Nhập</button>
                                            </p>
                                        </form>
                                        <p className='text-center'> Lấy Lại Mật Khẩu</p>
                                    </div>
                                    <div class="col">
                                        2 of 2
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>

                        {/* <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary">Understood</Button>
                        </Modal.Footer> */}
                    </Modal>
                    <div className="myvne_taskbar myvne_login_button"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;