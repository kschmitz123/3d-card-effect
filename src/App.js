import Card from "./components/Card";
import Container from "./components/Container";
import Sneaker from "./components/Sneaker";
import GlobalStyle from "./GlobalStyle";
import Adidas from "./adidas.png";
import Circle from "./components/Circle";
import Info from "./components/Info";

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
            <Info>
              <h1>Adidas ZX</h1>
              <h3>
                FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTIONAL
                COMFORT.
              </h3>
            </Info>
          </Card>
        </Container>
      </body>
    </>
  );
}

export default App;
