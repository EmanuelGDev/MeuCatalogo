import styles from "./Criador.module.css"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Creator from "../../components/Creator";
import Social_card from "../../components/Social_Card";


function Criador () {
  return( 
    <>
      <Header />
      <Container>
        <Creator />
        <Social_card />
      </Container>
      <Footer  />
    </>
  );
}

export default Criador;