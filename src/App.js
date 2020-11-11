import Card from "./components/Card";
import Container from "./components/Container";
import Sneaker from "./components/Sneaker";
import GlobalStyle from "./GlobalStyle";
import Adidas from "./adidas.png";
import Circle from "./components/Circle";
import Info from "./components/Info";
import Sizes from "./components/Sizes";
import Purchase from "./components/Purchase";
import styled from "styled-components/macro";

const Body = styled.body``;

function App() {
  return (
    <Body>
      <GlobalStyle />
      <Container>
        <Card>
          <Sneaker>
            <img src={Adidas} alt="adidas" />
            <Circle />
          </Sneaker>
          <Info>
            <h1>Adidas ZX</h1>
            <h3>
              FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTIONAL COMFORT.
            </h3>
          </Info>
          <Sizes>
            <button>39</button>
            <button>40</button>
            <button>42</button>
            <button>44</button>
          </Sizes>
          <Purchase>
            <button>Purchase</button>
          </Purchase>
        </Card>
      </Container>
    </Body>
  );
}

export default App;
