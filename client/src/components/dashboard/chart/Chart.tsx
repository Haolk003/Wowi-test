"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import ReactApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import ChartHeader from "./ChartHeader";
import CryptoChartData from "@/data/CryptoChartData";

const series = [
  {
    name: "candle",
    data: CryptoChartData,
  },
];

const options: ApexOptions = {
  chart: {
    height: 350,
    width: "100%",
    type: "candlestick",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  annotations: {
    xaxis: [
      {
        x: "Oct 06 14:00",
        borderColor: "#00E396",
        label: {
          borderColor: "#00E396",
          style: {
            fontSize: "12px",
            color: "#fff",
            background: "#00E396",
          },
          orientation: "horizontal",
          offsetY: 7,
          text: "Annotation Test",
        },
      },
    ],
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "category",
    labels: {
      formatter: function (val: any) {
        return dayjs(val).format("HH:mm");
      },
      style: {
        fontSize: "12px",
        fontFamily: "Poppins, sans-serif",
        colors: "#666",
        fontWeight: 600,
      },
    },
  },
  yaxis: {
    tooltip: {
      enabled: false,
    },
    labels: {
      style: {
        fontSize: "12px",
        fontFamily: "Poppins, sans-serif",
        colors: "#666",
        fontWeight: 600,
      },
    },
  },
};

const Chart = () => {
  const ranges = ["1H", "1D", "7D", "15D", "1M"];
  const [coinType, setCoinType] = useState("bitcoin");
  const [selectRange, setSelectRange] = useState("1D");

  const handleChangeCointype = (value: string) => {
    setCoinType(value);
  };

  const handleChangeSelectRange = (value: string) => {
    setSelectRange(value);
  };

  return (
    <div className="w-[70%] bg-white shadow-md p-3  rounded-[16px]">
      <ChartHeader
        coinType={coinType}
        handleChangeCointype={handleChangeCointype}
      />
      <div className="flex gap-1">
        <div className="w-[90%]">
          <ReactApexCharts
            options={options}
            series={series}
            type="candlestick"
            height={350}
          />
        </div>
        <ul className="flex flex-col justify-between h-[300px]">
          {ranges.map((range) => (
            <RangeItem
              key={range}
              range={range}
              selectedRange={selectRange}
              onSelectRange={handleChangeSelectRange}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

interface RangeItemProps {
  range: string;
  selectedRange: string;
  onSelectRange: (range: string) => void;
}
const RangeItem = ({ range, selectedRange, onSelectRange }: RangeItemProps) => (
  <li
    className={`border border-black/10 w-[50px] h-[36px] rounded-[10px] flex items-center justify-center cursor-pointer ${
      selectedRange === range && "bg-[#3D5AFE]/30"
    }`}
    onClick={() => onSelectRange(range)}
  >
    {range}
  </li>
);

export default Chart;
