import React from "react";

function Unit({
  symbol,
  lastPrice,
  highPrice,
  lowPrice,
  closePrice,
  prevClosePrice,
  priceChange,
  priceChangePercent,
}) {
  return (
    <div>
      <h1>{symbol}</h1>
      <p>Last Price = {lastPrice}</p>
      <p>High Price = {highPrice}</p>
      <p>Low Price = {lowPrice}</p>
      <p>Close Price = {closePrice}</p>
      <p>Previous Close Price = {prevClosePrice}</p>
      <p>Change Percent = {priceChangePercent} %</p>
    </div>
  );
}

export default Unit;
