const QuoteResult = ({ quotation }) => {
  console.log(quotation);
  const { CHANGE24HOUR, HIGHDAY, IMAGEURL, PRICE, LASTUPDATE, LOWDAY } =
    quotation;
  // console.log(PRICE);
  return (
    <div className="quote">
      <h2>Data</h2>
      <div className="info">
        <img
          className="info-img"
          src={`https://www.cryptocompare.com${IMAGEURL}`}
        />
        <div className="info-data">
          <p>
            Last update: <span>{LASTUPDATE}</span>
          </p>
          <p>
            Price: <span>{PRICE}</span>
          </p>
          <p>
            Highest price of the day: <span>{HIGHDAY}</span>
          </p>
          <p>
            Lowest price of the day: <span>{LOWDAY}</span>
          </p>
          <p>
            Variation in the last 24 hours: <span>{CHANGE24HOUR}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteResult;
