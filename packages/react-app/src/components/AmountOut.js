import React, { useState, useRef } from "react";
import { formatUnits } from "ethers/lib/utils";

import { chevronDown } from "../assets";
import { useAmountsOut, useOnClickOutside } from "../utils";
import styles from "../styles";

const AmountOut = ({
  fromToken,
  toToken,
  amountIn,
  pairContract,
  onToTokenChange,
  counterpartTokens,
}) => {
  const [showList, setShowList] = useState(false);
  const ref = useRef();

  const amountOut =
    useAmountsOut(pairContract, amountIn, fromToken, toToken) ?? 0;

  useOnClickOutside(ref, () => setShowList(false));

  return (
    <div className={styles.amountContainer}>
      <input
        placeholder="0.0"
        type="number"
        value={formatUnits(amountOut)}
        className={styles.amountInput}
        disabled
      />

      <div className="relative" onClick={() => setShowList(!showList)}>
        <button className={styles.currencyButton}>
          {toToken ? counterpartTokens[toToken] : "Select"}
          <img
            src={chevronDown}
            alt="cheveron-down"
            className={`w-4 h-4 object-contain ml-2 ${
              showList ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {showList && (
          <ul ref={ref} className={styles.currencyList}>
            {Object.entries(counterpartTokens).map(
              ([token, tokenName], index) => (
                <li
                  key={index}
                  className={styles.currencyListItem}
                  onClick={() => {
                    if (typeof onToTokenChange === "function")
                      onToTokenChange(token);
                    setShowList(false);
                  }}
                >
                  {tokenName}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AmountOut;
