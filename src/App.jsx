import { useState, useEffect } from "react";
import Form from "./components/Form";
import QuoteResult from "./components/QuoteResult";
import cryptoImg from "./img/cryptoImg.png";
import Spinner from "./components/Spinner";

function App() {
  const [coins, setCoins] = useState({});
  const [quotation, setQuotation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const { coin, cryptoCoin } = coins;
      const cryptoQuote = async () => {
        setLoading(true);
        setQuotation({});
        console.log(coin);
        console.log(cryptoCoin);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;

        const answer = await fetch(url);
        const result = await answer.json();

        setQuotation(result.DISPLAY[cryptoCoin][coin]);
        setLoading(false);
      };

      cryptoQuote();
    }
  }, [coins]);

  return (
    <div className={"container app-layout"}>
      <img className={"crypto-img"} src={cryptoImg} alt="img crypto" />
      <div className={"app-content"}>
        <h1 className={"content-title"}>Quote a currency!</h1>

        <Form setCoins={setCoins} />

        {loading && <Spinner />}
        {quotation.PRICE && <QuoteResult quotation={quotation} />}
      </div>
    </div>
  );
}

export default App;
