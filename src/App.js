import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import * as Icon from 'react-bootstrap-icons';
function App() {
  return (
    <>
      <Nav />
      <Header />
      <a className='to-top' title='Lên Đầu Trang'>
        <Icon.ArrowUp size={30} color="black" style={{ background: "" }} className="ml-1" />
      </a>
      <div className="App">
        <section className='section section_topstory'>
          <div className="container">
            <div className="row">
              <div className="col">
                <img className='img-section-top' />
              </div>
              <div className="col" style={{ borderRight: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                <h3 className='title-news'>
                  <a href="https://vnexpress.net/thu-tuong-viet-nam-muon-som-thanh-trung-tam-trong-chuoi-gia-tri-4493879.html"
                    title='Thủ tướng: Việt Nam muốn sớm thành trung tâm trong chuỗi giá trị'>
                    Thủ tướng: Việt Nam muốn sớm thành trung tâm trong chuỗi giá trị
                  </a>
                </h3>
                <p className='description'>
                  <a href="https://vnexpress.net/thu-tuong-viet-nam-muon-som-thanh-trung-tam-trong-chuoi-gia-tri-4493879.html"
                    title='Thủ tướng: Việt Nam muốn sớm thành trung tâm trong chuỗi giá trị'>
                    Thủ tướng muốn các doanh nghiệp Hàn Quốc mở rộng đầu tư để giúp Việt Nam sớm trở thành trung tâm trong chuỗi giá trị sản xuất.
                  </a>
                </p>
                <p className='extend-lead description mt5'>
                  <a href="https://vnexpress.net/thu-tuong-viet-nam-muon-som-thanh-trung-tam-trong-chuoi-gia-tri-4493879.html"
                    title='Thủ tướng: Việt Nam muốn sớm thành trung tâm trong chuỗi giá trị'>
                    Đề nghị này được Thủ tướng nêu tại ...
                  </a>
                </p>
                <p className='meta-news'>
                  <a className='cat c-parsed' title='Kinh doanh'>Kinh doanh
                    <a>{' '}<Icon.ChatLeftFill size={15} color="gray" style={{ background: "" }} className="ml-1" /> {' '}<span className='number-cat'>40</span></a></a>
                </p>
              </div>
            </div>
            <div className="row" style={{ borderBottom: '1px solid #e5e5e5' }}>
              <div className="col">
                <div className='list-sub-feature'>
                  <h3 className='title_news'>Loa phường không còn phù hợp với cuộc sống đô thị.</h3>
                  <p className='description'>
                    Nhiều chuyên gia cho rằng người dân đô thị có nhiều cách tiếp nhận thông tin hiệu quả nên không muốn duy trì loa phường, dù nó đã được cải tiến so với trước kia.
                    <a>{' '}<Icon.ChatLeftFill size={15} color="gray" style={{ background: "" }} className="ml-1" /> {' '}<span className='number-cat'>236</span></a>
                  </p>
                </div>
              </div>
              <div className="col" style={{ borderRight: '1px solid #e5e5e5' }}>
                <div className='list-sub-feature'>
                  <h3 className='title_news'>Nguy cơ nhiều cao tốc ùn tắc khi thu phí không dừng.</h3>
                  <p className='description'>
                    Tỷ lệ xe dán thẻ thu phí không dừng (ETC) trên các cao tốc có lượng xe lớn mới đạt 50-70%, đơn vị quản lý và doanh nghiệp vận tải đều lo ngại ùn tắc vào 1/8.
                    <a>{' '}<Icon.ChatLeftFill size={15} color="gray" style={{ background: "" }} className="ml-1" /> {' '}<span className='number-cat'>109</span></a>
                  </p>
                </div>
              </div>
              <div className="col" style={{ borderRight: '1px solid #e5e5e5' }}>
                <a className='title-link-gn' href='https://vnexpress.net/goc-nhin'>Góc Nhìn</a>
                <div className='list-sub-feature'>
                  <h3 className='title_news'>'Nhà em có một ông nội'</h3>
                  <p className='description'>
                    Văn mẫu là sản phẩm của nền giáo dục lỗi thời mà nếu không dứt bỏ được, khó nói tới những cải cách, đổi mới lớn hơn.
                  </p>
                  <div className='width_common info-author flexbox'>
                    <a className='cat' href="https://vnexpress.net/tac-gia/chu-thi-van-anh-968.html" title='Chu Thị Vân Anh'>
                      Chu Thị Vân Anh
                      <br />
                      <a>{' '}<Icon.ChatLeftFill size={15} color="gray" style={{ background: "" }} className="ml-1" /> {' '}<span className='number-cat'>121</span></a>
                    </a>
                    <div className='thumb-art thumb-author-gn'>
                      <img className='img-author' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section section-podcast-v2'>
          <div className="container" style={{ borderBottom: '1px solid #e5e5e5' }}>
            <span className='inner-title'>Podcasts</span>
            <div className="row">
              <div className="col">
                <div className='content-podcast'>
                  <span className='title-podcast'>
                    'Chồng tôi ở đó chỉ để đủ thành viên gia đình'
                    <p className='description-podcast'>
                      7 năm hôn nhân, Phương gồng gánh kinh tế, việc nhà trong khi chồng không có chí tiến thủ, thích kiểm... 7 năm hôn nhân, Phương gồng gánh kinh tế, việc nhà trong khi chồng không có chí tiến thủ, thích kiểm...
                    </p>
                  </span>
                  <div className='thumb-art'>
                    <img className='img-podcast' src='https://i1-vnexpress.vnecdn.net/2022/07/30/chong-toi-o-do-chi-de-du-thanh-vien-gia-dinh-1659186449.jpg?w=160&h=160&q=100&dpr=2&fit=crop&s=E9Mt7riuwiwd0pv4v2yvdw' />
                  </div>
                </div>
              </div>
              <div className="col" style={{
                borderLeft: '1px solid #e5e5e5', borderRight: '1px solid #e5e5e5'
              }}>
                <div className='content-podcast'>
                  <span className='title-podcast'>
                    Điểm tin 23h: Nguy cơ ùn tắc cao tốc khi thu phí không dừng; Đề xuất TP HCM trả lương người tài tối đa 150 triệu đồng
                    <p className='description-podcast'>
                      Việt Nam đứng đầu bảng U18 nữ Đông Nam Á; Căn hộ biển tăng giá nhưng sức mua yếu; Ukraine tố Nga...
                    </p>
                  </span>
                  <div className='thumb-art'>
                    <img className='img-podcast' src='https://i1-vnexpress.vnecdn.net/2022/07/30/diem-tin-17h-bo-khung-gia-dat-quang-hai-duoc-pau-fc-dang-ky-thi-dau-o-ligue-2-1659174394.jpg?w=160&h=160&q=100&dpr=2&fit=crop&s=cCz4yF5K10ouQEHTii39Kg' />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className='content-podcast'>
                  <span className='title-podcast'>
                    Người giải cứu 31 chú chó từ lò mổ: 'Tôi xem chúng như 31 mạng người'
                    <p className='description-podcast'>
                      Vô tình bắt gặp 31 chú chó trong lò mổ khi đi tìm chó nhà mình thất lạc, anh Khôi van xin để được... <a>{' '}<Icon.ChatLeftFill size={15} color="gray" style={{ background: "" }} className="ml-1" /> {' '}<span className='number-cat'>109</span></a>
                    </p>
                  </span>
                  <div className='thumb-art'>
                    <img className='img-podcast' src="https://i1-vnexpress.vnecdn.net/2022/07/29/nguoi-giai-cuu-31-chu-cho-tu-lo-mo-toi-xem-chung-nhu-31-mang-nguoi-1659098105.jpg?w=160&h=160&q=100&dpr=2&fit=crop&s=WtRhEFJ9pUrROvdqwkC7Rg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section section_container section_video'>
          <div className='width_common inner-section-video'>
            <div className='width_common wrapper-box-video'>
              <div className='box-player-video'>
                <div className='thumb-video thumb thumb-16x9'></div>
                <div className='item-news'>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>

    </>

  );
}

export default App;
