import Card from "./components/Card";
import Container from "./components/Container";
import Sneaker from "./components/Sneaker";
import GlobalStyle from "./GlobalStyle";
import Adidas from "./adidas.png";
import Circle from "./components/Circle";

function App() {
  return (
    <>
      <GlobalStyle />
      <body>
        <Container>
          <Card>
            <Sneaker>
              <img src={Adidas} alt="adidas" />
              <Circle />
            </Sneaker>
          </Card>
        </Container>
      </body>
    </>
  );
}

export default App;
