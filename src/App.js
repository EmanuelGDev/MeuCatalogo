import Header from "./components/Header";
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import Container from "./components/Container";
import Card from "./components/Card"
import videos from "./json/videos.json"
import Category from "./components/Category";

const categories = [
  "Filme",
  "Musica",
  "Jogos",
  "Esportes",
  "Estudos"
]

function filterCategory(id) {
  return videos.filter(video => video.category === categories[id])
}

function App() {
  return (
    <>
      <Header />
      <Banner image="home"></Banner>
      <Container>

        {
          categories.map((category, index) =>        
          <Category category={category}>
            {filterCategory(index).map(video => {return <Card id={video.id} key={video.id} alt={video.title}/>})}
          </Category>)
        }

      </Container>
      <Footer />
    </>
  );
}

export default App;
