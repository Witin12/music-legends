import "./Header.css";
import avatar from './assets/avatar.png';

function Header() {
  return (
    <header className="header-container">
      <nav className="navigation">
        <ul className="items-menu">
          <li className="item">
            <a href="">Início</a>
          </li>
          <li className="item">
            <a href="">Buscar</a>
          </li>
          <li className="item">
            <a href="">Minha biblioteca</a>
          </li>
        </ul>
      </nav>

      <h2 className="header-title">Music Legends</h2>

      <div className="profile">
        <span className="name-profile">Witor Santos</span>
        <img
          src={avatar}
          alt="Foto de perfil de Witor Santos"
          className="image-profile"
        />
      </div>
    </header>
  );
}

export default Header;

