//Header
import {Link} from "react-router-dom"
import styles from "./Header.module.css";

function Header() {
  return(
    <header className={styles.header}>
      <Link to="/">
        <span>RandomFlix</span>
      </Link>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/watch">
          Assistir
        </Link>
        <Link to="/criador">
          Conheça o criador
        </Link>
      </nav>
    </header>
  );
}

export default Header;