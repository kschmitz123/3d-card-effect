import Card from "./components/Card";
import Container from "./components/Container";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Card></Card>
      </Container>
    </>
  );
}

export default App;
