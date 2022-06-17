import {useState} from "react";

const useSelectCurrency = (label, currenciesOptions) => {

  const [state, setState] = useState('');

  const SelectCurrency = () => {
    return (
      <>
        <label className={"formulary__label"}>{label}</label>

        <select className={"formulary__select"} value={state} onChange={ event => setState(event.target.value)} >
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

  return [state, SelectCurrency];
};

export default useSelectCurrency;
