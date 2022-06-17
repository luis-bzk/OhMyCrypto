import cryptoImg from "./img/cryptoImg.png";
import Form from "./components/Form";

function App() {
  return (
    <div className={"container app-layout"}>
      <img className={"crypto-img"} src={cryptoImg} alt="img crypto" />
      <div className={"app-content"}>
        <h1 className={"content-title"}>Quote a currency!</h1>

        <Form />
      </div>
    </div>
  );
}

export default App;
