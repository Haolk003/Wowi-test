"use client";

import React from "react";
import { Grid } from "@mui/material";
import { ButtonCustom } from "../ui";
import { FaBitcoin, FaEthereum, FaLitecoinSign } from "react-icons/fa6";
import { SiRipple } from "react-icons/si";
const CryptoHeader = () => {
  return (
    <div className="flex gap-5 ">
      <div className="w-[50%]">
        <h4 className="font-BeVietNam text-16 leading-24 font-500 mb-5">
          Your Total Banlance
        </h4>
        <div className=" bg-white shadow-md rounded-[16px] min-h-[230px] p-3 flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="">
              <p className="text-text-primary font-[400] font-Poppins text-16 leading-[27px]">
                $33692.00
              </p>
              <p className="font-14 text-text-secondary font-BeVietNam leading-22">
                Avl.Bal.
              </p>
            </div>
            <div className="flex gap-3">
              <ButtonCustom
                variant="contained"
                backgroundColor="#d4eefd"
                fullWidth
                className="h-[35px] w-[85px] "
                size="small"
                textColor="#0A8FDC"
                hoverBackgroundColor="#bce4fc"
              >
                <div className="font-[500] font-Poppins text-[13px] leading-24">
                  Send
                </div>
              </ButtonCustom>
              <ButtonCustom
                variant="contained"
                backgroundColor="#0A8FDC"
                fullWidth
                className="h-[35px] w-[85px] "
                size="small"
              >
                <div className="font-[500] font-Poppins text-[13px] leading-24">
                  Receive
                </div>
              </ButtonCustom>
            </div>
          </div>
          <p className="font-BeVietNam font-[400] text-14 leading-22 text-text-secondary">
            Buy Current in USD
          </p>
          <Grid container justifyContent="space-between">
            <Grid item>
              <h4 className="text-primary font-500 text-[20px] font-Poppins leading-[27px]">
                9.654
              </h4>
              <p className="font-BeVietNam text-[14px] font-400 leading-22 text-text-secondary">
                Bitcoin
              </p>
            </Grid>
            <Grid item>
              <h4 className="text-primary font-500 text-[20px] font-Poppins leading-[27px]">
                76.184
              </h4>
              <p className="font-BeVietNam text-[14px] font-400 leading-22 text-text-secondary">
                Monero
              </p>
            </Grid>
            <Grid item>
              <h4 className="text-primary font-500 text-[20px] font-Poppins leading-[27px]">
                1567.5
              </h4>
              <p className="font-BeVietNam text-[14px] font-400 leading-22 text-text-secondary">
                Ripple
              </p>
            </Grid>
            <Grid item>
              <h4 className="text-primary font-500 text-[20px] font-Poppins leading-[27px]">
                56.78
              </h4>
              <p className="font-BeVietNam text-[14px] font-400 leading-22 text-text-secondary">
                Litecoin
              </p>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="w-[50%]">
        <h4 className="font-BeVietNam text-16 leading-24 font-500 ">Coins</h4>
        <Grid className="h-[230px] mt-5 " container>
          <Grid item xs={6} className="pr-4">
            <div className="bg-white w-full h-full rounded-[10px] shadow-md flex justify-between items-center p-2">
              <div className="flex items-center gap-3">
                <FaBitcoin className="text-G2" size={40} />
                <div>
                  <p className="text-14 font-BeVietNam leading-22 font-400 text-text-secondary">
                    Bitcoin Price
                  </p>
                  <h4 className="font-400 font-BeVietNam text-[16px] text-text-primary leading-26">
                    $7289.75
                  </h4>
                </div>
              </div>
              <div>
                <p className="text-success  leading-24 text-16 font-500 font-BeVietNam text-center">
                  +0.8%
                </p>
                <p className="font-400 leading-18 text-12 font-Poppins text-[#757575]">
                  vs last 30 days
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="bg-white w-full h-full rounded-[10px] shadow-md flex justify-between items-center p-2">
              <div className="flex items-center gap-3">
                <div className="bg-G1 flex items-center justify-center w-10 h-10 rounded-full text-white">
                  <FaEthereum size={20} />
                </div>

                <div>
                  <p className="text-14 font-BeVietNam leading-22 font-400 text-text-secondary">
                    Etheium Price
                  </p>
                  <h4 className="font-400 font-BeVietNam text-[16px] text-text-primary leading-26">
                    $65.1200
                  </h4>
                </div>
              </div>
              <div>
                <p className="text-secondary-dark  leading-24 text-16 font-500 font-BeVietNam text-center">
                  -0.68%
                </p>
                <p className="font-400 leading-18 text-12 font-Poppins text-[#757575]">
                  vs last 30 days
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} className="pr-4 pt-4">
            <div className="bg-white w-full h-full rounded-[10px] shadow-md flex justify-between items-center p-2">
              <div className="flex items-center gap-3">
                <div className="bg-G4 flex items-center justify-center w-10 h-10 rounded-full text-white">
                  <FaLitecoinSign size={20} />
                </div>
                <div>
                  <p className="text-14 font-BeVietNam leading-22 font-400 text-text-secondary">
                    LiteCoin Price
                  </p>
                  <h4 className="font-400 font-BeVietNam text-[16px] text-text-primary leading-26">
                    $65.1200
                  </h4>
                </div>
              </div>
              <div>
                <p className="text-secondary-dark  leading-24 text-16 font-500 font-BeVietNam text-center">
                  -0.68%
                </p>
                <p className="font-400 leading-18 text-12 font-Poppins text-[#757575]">
                  vs last 30 days
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="pt-4">
            <div className="bg-white w-full h-full rounded-[10px] shadow-md flex justify-between items-center p-2">
              <div className="flex items-center gap-3">
                <div className="bg-G5 w-10 h-10 rounded-full text-center flex items-center justify-center text-white">
                  <SiRipple size={20} />
                </div>

                <div>
                  <p className="text-14 font-BeVietNam leading-22 font-400 text-text-secondary">
                    Ripple Price
                  </p>
                  <h4 className="font-400 font-BeVietNam text-[16px] text-text-primary leading-26">
                    $0.2544
                  </h4>
                </div>
              </div>
              <div>
                <p className="text-success  leading-24 text-16 font-500 font-BeVietNam text-center">
                  +0.8%
                </p>
                <p className="font-400 leading-18 text-12 font-Poppins text-[#757575]">
                  vs last 30 days
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CryptoHeader;
