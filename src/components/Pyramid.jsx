import React from 'react';

const Pyramid = ({ dataMoneyPyramid, questionNumber }) => {
  return (
    <div className="pyramid">
      <ul className="money-list">
        {dataMoneyPyramid.map((moneyPyramind) => (
          <li
            className={
              questionNumber === moneyPyramind.id
                ? 'money-list-item active'
                : 'money-list-item'
            }
            key={moneyPyramind.id}
          >
            <span className="money-list-item-number">{moneyPyramind.id}</span>
            <span className="money-list-item-amount">
              {moneyPyramind.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pyramid;
