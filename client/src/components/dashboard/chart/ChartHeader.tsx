import React from "react";
import { Select, MenuItem } from "@mui/material";
import { FaBitcoin, FaEthereum, FaLitecoinSign } from "react-icons/fa6";
import { SiRipple } from "react-icons/si";

const coins = [
  {
    value: "bitcoin",
    label: "BitCoin",
    symbol: "BTC",
    icon: <FaBitcoin className="text-G2" size={25} />,
    iconBg: "",
  },
  {
    value: "litecoin",
    label: "LiteCoin",
    symbol: "LTC",
    icon: <FaLitecoinSign />,
    iconBg: "bg-G4 text-white",
  },
  {
    value: "ethereum",
    label: "Ethereum",
    symbol: "ETH",
    icon: <FaEthereum />,
    iconBg: "bg-G1 text-white",
  },
  {
    value: "ripple",
    label: "Ripple",
    symbol: "XRP",
    icon: <SiRipple />,
    iconBg: "bg-G5 text-white",
  },
];

type Props = {
  coinType: string;
  handleChangeCointype: (value: string) => void;
};

const ChartHeader: React.FC<Props> = ({ coinType, handleChangeCointype }) => {
  return (
    <div className="flex justify-between items-center p-1">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue="bitcoin"
        value={coinType}
        onChange={(e) => handleChangeCointype(e.target.value)}
      >
        {coins.map((coin) => (
          <MenuItem key={coin.value} value={coin.value}>
            <div className="flex items-center gap-3">
              <div
                className={`w-[25px] h-[25px] rounded-full flex items-center justify-center ${coin.iconBg}`}
              >
                {coin.icon}
              </div>
              <p className="font-BeVietNam text-14 leading-22 font-400 text-text-primary w-[80px]">
                {coin.label}
              </p>
              <span className="text-14 leading-22 font-BeVietNam font-400 text-text-secondary">
                {coin.symbol}
              </span>
            </div>
          </MenuItem>
        ))}
      </Select>
      <div>
        <p className="font-BeVietNam font-500 text-16 leading-[27px] text-text-primary">
          $ 41.580
        </p>
        <span className="font-BeVietNam font-500 leading-22 text-14 text-text-secondary">
          Low Price
        </span>
      </div>

      <div>
        <p className="font-BeVietNam font-500 text-16 text-success leading-[27px] ">
          $ 41.580
        </p>
        <span className="font-BeVietNam font-500 leading-22 text-14 text-text-secondary">
          Hign Price
        </span>
      </div>

      <div>
        <p className="font-BeVietNam font-500 text-16 leading-[27px] text-text-primary">
          $ 41.580
        </p>
        <span className="font-BeVietNam font-500 leading-22 text-14 text-text-secondary">
          24H Volume
        </span>
      </div>

      <div>
        <p className="font-BeVietNam font-500 text-16 leading-[27px]  text-secondary-dark">
          $ 41.580
        </p>
        <span className="font-BeVietNam font-500 leading-22 text-14 text-text-secondary">
          24 Change
        </span>
      </div>
    </div>
  );
};

export default ChartHeader;
