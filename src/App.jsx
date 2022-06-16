import cryptoImg from "./img/cryptoImg.png"

function App() {
  return (
    <div className={"container app-layout"}>
      <img className={"crypto-img"} src={cryptoImg} alt="img crypto" />
      <div className={"app-content"}>
        <h1>
          Quote a currency!
        </h1>
      </div>
    </div>
  );
}

export default App;
