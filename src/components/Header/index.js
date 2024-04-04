//Header

import styles from "./Header.module.css";

function Header() {
  return(
    <header className={styles.header}>
      <span>RandomFlix</span>
      <nav>
        <a href ="#">Home</a>
        <a href ="#">Assistir</a>
        <a href="#">Conheca o criador</a>
      </nav>
    </header>
  );
}

export default Header;