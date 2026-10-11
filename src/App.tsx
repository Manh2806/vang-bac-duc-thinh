import { useState } from 'react'

const PHONE_DISPLAY = '0944 401 982'
const PHONE_HREF = 'tel:+84944401982'
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('105A1 Nguyễn Quý Đức Thanh Xuân Hà Nội')

const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

const trustItems = [
  { title: 'Mẫu mã đa dạng', text: 'Liên tục cập nhật xu hướng' },
  { title: 'Tư vấn tận tâm', text: 'Lựa chọn phù hợp nhất' },
  { title: 'Giá cả hợp lý', text: 'Minh bạch và tin cậy' },
]

const collections = [
  { title: 'Nhẫn vàng', tagline: 'Thanh lịch vượt thời gian', image: 'ring.jpg' },
  { title: 'Dây chuyền', tagline: 'Tinh xảo trong từng đường nét', image: 'necklace.jpg' },
  { title: 'Lắc & vòng tay', tagline: 'Điểm nhấn đầy cuốn hút', image: 'bracelet.jpg' },
]

const reviews = [
  {
    quote: 'Cửa hàng nhiều mẫu mã đẹp. Giá hợp lý lắm, phục vụ rất nhiệt tình.',
    name: 'Phúc Gia',
    label: 'Khách hàng địa phương',
  },
  {
    quote: 'Cửa hàng nhiều mẫu mã, tư vấn nhiệt tình. Mình rất hài lòng khi mua sắm tại đây.',
    name: 'Vũ Thị Huyền',
    label: 'Khách hàng địa phương',
  },
  {
    quote: 'Shop nhiều mẫu mã đa dạng, giá cả hợp lý. Sẽ tiếp tục ủng hộ cửa hàng.',
    name: 'Thi Yên Đỗ',
    label: 'Khách hàng thân thiết',
  },
]

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 2.8 9.2 8l-2.1 2.1a16.2 16.2 0 0 0 6.8 6.8l2.1-2.1 5.2 2.6v3.1a1.5 1.5 0 0 1-1.5 1.5A17.7 17.7 0 0 1 2 4.3a1.5 1.5 0 0 1 1.5-1.5h3.1Z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5.4-8 12-8 12S4 15.4 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Vàng Bạc Đức Thịnh - Trang chủ">
      <span className="logo-mark">ĐT</span>
      <span>
        <strong>ĐỨC THỊNH</strong>
        <small>VÀNG BẠC · TRANG SỨC</small>
      </span>
    </a>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main id="top">
      <div className="announcement">
        <span>Uy tín tạo nên giá trị</span>
        <span className="announcement-address">105A1 Nguyễn Quý Đức, Thanh Xuân, Hà Nội</span>
      </div>

      <header className="site-header">
        <Logo />
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#about" onClick={closeMenu}>Về Đức Thịnh</a>
          <a href="#collections" onClick={closeMenu}>Sản phẩm</a>
          <a href="#reviews" onClick={closeMenu}>Đánh giá</a>
          <a href="#contact" onClick={closeMenu}>Liên hệ</a>
          <a className="nav-call" href={PHONE_HREF}>
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </header>

      <section className="hero">
        <img className="hero-image" alt="Nhẫn vàng chế tác tinh xảo" src={img('hero.jpg')} />
        <div className="hero-overlay" />
        <div className="hero-glow" />
        <div className="hero-content">
          <p className="eyebrow">Vàng bạc Đức Thịnh · Hà Nội</p>
          <h1>
            Sắc vàng <em>tinh tuyển</em>
            <br />
            cho dấu ấn riêng.
          </h1>
          <p className="hero-description">
            Trang sức được tuyển chọn tỉ mỉ, mẫu mã đa dạng cùng sự tư vấn tận tâm cho mọi khoảnh khắc
            đáng nhớ.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#collections">
              Khám phá sản phẩm <ArrowIcon />
            </a>
            <a className="button button-ghost" href={MAPS_URL} target="_blank" rel="noreferrer">
              <PinIcon /> Chỉ đường
            </a>
          </div>
        </div>
        <div className="hero-rating">
          <div>
            <strong>5.0</strong>
            <span className="stars" aria-label="5 trên 5 sao">★★★★★</span>
          </div>
          <p>Được tin chọn bởi 64 khách hàng</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Cam kết của cửa hàng">
        {trustItems.map((item, i) => (
          <div key={item.title}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            <p>
              <strong>{item.title}</strong>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section className="about section" id="about">
        <div className="about-copy">
          <p className="eyebrow dark">Câu chuyện Đức Thịnh</p>
          <h2>Trân trọng giá trị trong từng món trang sức</h2>
        </div>
        <div className="about-body">
          <p>
            Tại Vàng Bạc Đức Thịnh, chúng tôi tin rằng mỗi món trang sức không chỉ là một phụ kiện, mà còn
            lưu giữ câu chuyện và dấu ấn của riêng bạn.
          </p>
          <p>
            Từ những thiết kế thanh lịch hằng ngày đến món quà cho dịp trọng đại, đội ngũ Đức Thịnh luôn sẵn
            sàng giúp bạn tìm thấy lựa chọn thật sự phù hợp.
          </p>
          <a href="#contact" className="text-link">
            Ghé thăm cửa hàng <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="collections section" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Bộ sưu tập chọn lọc</p>
            <h2>Vẻ đẹp dành riêng cho bạn</h2>
          </div>
          <p>Khám phá những thiết kế trang sức tinh tế, phù hợp với nhiều phong cách và khoảnh khắc.</p>
        </div>
        <div className="collection-grid">
          {collections.map((item, i) => (
            <article className="collection-card" key={item.title}>
              <img alt={item.title} src={img(item.image)} loading="lazy" />
              <div className="collection-shade" />
              <span className="collection-index">{String(i + 1).padStart(2, '0')}</span>
              <div className="collection-copy">
                <p>{item.tagline}</p>
                <h3>{item.title}</h3>
                <span className="circle-arrow">
                  <ArrowIcon />
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="photo-note">Hình ảnh mang tính minh họa. Vui lòng liên hệ cửa hàng để xem mẫu đang có.</p>
      </section>

      <section className="reviews section" id="reviews">
        <div className="reviews-summary">
          <p className="eyebrow">Khách hàng nói gì</p>
          <h2>Niềm tin được gửi trao</h2>
          <div className="score">
            <strong>5,0</strong>
            <div>
              <span className="stars">★★★★★</span>
              <p>Dựa trên 64 bài đánh giá</p>
            </div>
          </div>
        </div>
        <div className="review-list">
          {reviews.map((review) => (
            <blockquote key={review.name}>
              <span className="quote-mark">“</span>
              <p>{review.quote}</p>
              <footer>
                <span className="avatar">{review.name[0]}</span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.label}</small>
                </span>
                <span className="review-stars">★★★★★</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-card">
          <p className="eyebrow">Ghé thăm cửa hàng</p>
          <h2>Chúng tôi luôn sẵn lòng đón tiếp bạn</h2>
          <div className="contact-details">
            <div>
              <PinIcon />
              <p>
                <span>Địa chỉ</span>
                <strong>105A1 Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội</strong>
              </p>
            </div>
            <div>
              <PhoneIcon />
              <p>
                <span>Điện thoại</span>
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </p>
            </div>
          </div>
          <div className="contact-actions">
            <a className="button button-gold" href={MAPS_URL} target="_blank" rel="noreferrer">
              Mở Google Maps <ArrowIcon />
            </a>
            <a className="button button-ghost" href={PHONE_HREF}>
              Gọi cửa hàng
            </a>
          </div>
        </div>
        <a
          className="map-panel"
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Xem vị trí Vàng Bạc Đức Thịnh trên Google Maps"
        >
          <span className="road road-one" />
          <span className="road road-two" />
          <span className="road road-three" />
          <span className="map-pin">
            <PinIcon />
          </span>
          <span className="map-label">
            <strong>Vàng Bạc Đức Thịnh</strong>
            105A1 Nguyễn Quý Đức
          </span>
        </a>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <Logo />
          <p>
            Nơi vẻ đẹp được trân trọng,
            <br />
            nơi niềm tin được gửi trao.
          </p>
          <a href={PHONE_HREF} className="footer-phone">
            <PhoneIcon /> {PHONE_DISPLAY}
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Vàng Bạc Đức Thịnh</span>
          <span>Thanh Xuân, Hà Nội</span>
        </div>
      </footer>

      <a className="floating-call" href={PHONE_HREF} aria-label="Gọi ngay">
        <PhoneIcon />
        <span>Gọi ngay</span>
      </a>
    </main>
  )
}
