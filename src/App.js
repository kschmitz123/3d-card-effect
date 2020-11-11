import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />

    <div class="container">
        <div class="card">
            <div class="sneaker">
                <div class="circle"></div>
                <img src="./adidas.png" alt="adidas">
            </div>
            <div class="info">
                <h1 class="title">Adidas ZX</h1>
                <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                <div class="sizes">
                    <button>39</button>
                    <button>40</button>
                    <button class="active">42</button>
                    <button>44</button>
                </div>
                <div class="purchase">
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
