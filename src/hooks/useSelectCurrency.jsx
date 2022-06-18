import { useState } from "react";

const useSelectCurrency = (label, currenciesOptions) => {
  const [coinValue, setCoinValue] = useState("");

  const SelectCurrency = () => {
    return (
      <>
        <label className={"formulary__label"}>{label}</label>

        <select
          className={"formulary__select"}
          value={coinValue}
          onChange={(event) => setCoinValue(event.target.value)}
        >
          <option value="">Select an option</option>

          {currenciesOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </>
    );
  };

  return [coinValue, SelectCurrency];
};

export default useSelectCurrency;
