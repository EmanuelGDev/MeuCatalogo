import styles from "./Criador.module.css"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Creator from "../../components/Creator";


function Criador () {
  return( 
    <>
      <Header />
      <Container>
        <Creator />
      </Container>
      <Footer  />
    </>
  );
}

export default Criador;