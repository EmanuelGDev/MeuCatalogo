import styles from "./Social_card.module.css"

export const redes = [
  "Github",
  "Linkedin",
  "Instagram"
]

function Social_card (icon) {
  return (
    <div className={styles.social_container}>
      <section className={styles.social_card}>
        <a href="https://github.com/EmanuelGDev"><img src="\images\GitHub-logo.png"></img></a>
      </section>
      <section className={styles.social_card}>
        <a href="https://www.linkedin.com/in/emanuel-guimarães-santana-29768a244/">
        <img src="\images\Linkedin-logo.png"></img>
        </a>
      </section> 
      <section className={styles.social_card}>
        <a href="https://www.instagram.com/manuggt_/">
          <img src="\images\Instagram-logo.png"></img>
          </a>
      </section> 
    </div>   
  );
}

export default Social_card