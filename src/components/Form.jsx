import { useEffect, useState } from "react";

import useSelectCurrency from "../hooks/useSelectCurrency";
import { currencies } from "../data/currencies";
import Error from "./Error";
import transferIcon from "../img/transfer.svg";

const Form = ({ setCoins }) => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

  const [error, setError] = useState(false);

  const [coin, SelectCurrency] = useSelectCurrency(
    "Select your currency",
    currencies
  );
  const [cryptoCoin, SelectCryptoCoin] = useSelectCurrency(
    "Select a Crypto Currency",
    cryptoCurrencies
  );

  useEffect(() => {
    const queryAPI = async () => {
      // const url =
      //   "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const url =
        "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD";
      const answer = await fetch(url);
      const result = await answer.json();
      const cryptoArray = result.Data.map((crypto) => {
        const { Name, FullName } = crypto.CoinInfo;

        const cryptoCurrency = {
          id: Name,
          name: FullName,
        };
        return cryptoCurrency;
      });

      setCryptoCurrencies(cryptoArray);
    };

    queryAPI();
  }, []);

  // functions
  const clickbutton = (event) => {
    const formButton = event.target;
    formButton.classList.add("clicked-button");
    setTimeout(() => {
      formButton.classList.remove("clicked-button");
    }, 100);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ([coin, cryptoCoin].includes("")) {
      console.log("Introduce los dos valores!");
      setError(true);

      return;
    }

    setError(false);
    setCoins({ coin, cryptoCoin });
    console.log("INICIANDO SETCOINS");
  };

  return (
    <>
      {error && <Error>You need to set all the values</Error>}
      <form className={"formulary"} onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCryptoCoin />

        {/*<input className={"formulary__button"} type="submit" value="Convert" />*/}
        <button
          className={"formulary__button"}
          type="submit"
          onClick={clickbutton}
        >
          <img src={transferIcon} alt="icon convert" /> Quote!
        </button>
      </form>
    </>
  );
};

export default Form;
