import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Category, {categories, filterCategory} from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer"
import Header from "../../components/Header";


function Home() {
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

export default Home;
