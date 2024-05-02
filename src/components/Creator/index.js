import styles from "./Creator.module.css"

function Creator () {
  return (
    <div className={styles.creator}>
      <h2>Olá, eu sou o Emanuel</h2>
      <img src="../../images/Foto-Criador.png"></img>
      <h3>Estudante de Sistemas de Informação
        <br></br>
        Me siga nas redes sociais!
      </h3>
    </div>
  );
}

export default Creator;