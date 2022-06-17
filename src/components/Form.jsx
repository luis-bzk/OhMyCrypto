import React from "react";
import { useEffect } from "react";

import useSelectCurrency from "../hooks/useSelectCurrency";
import { currencies } from "../data/currencies";

const Form = () => {
  useEffect(() => {
    const queryAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const answer = await fetch(url);
      const result = await answer.json();

      console.log(result.Data);
    };
    queryAPI();
  }, []);

  const [coin, SelectCurrency] = useSelectCurrency(
    "Select your currency",
    currencies
  );
  // selectCurrency();

  return (
    <form className={"formulary"}>
      <SelectCurrency />

      <input className={"formulary__button"} type="submit" value="Quote!" />
    </form>
  );
};

export default Form;
