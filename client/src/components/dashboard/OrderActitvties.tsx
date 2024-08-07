"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";
import { styled } from "@mui/system";

import OrderData from "@/data/OrderData";

const StyledTableContainer = styled(TableContainer)({
  marginTop: 16,
});

const StyledTableHead = styled(TableHead)({
  backgroundColor: "#f5f5f5",
});

const StyledTableCellHead = styled(TableCell)({
  fontWeight: "bold",
  color: "#333",
});

const StyledTableCellBody = styled(TableCell)({
  color: "#555",
});

const BuyIcon = styled(HiOutlineArrowNarrowUp)({
  color: "green",
});

const SellIcon = styled(HiOutlineArrowNarrowDown)({
  color: "red",
});

const ViewAllButton = styled(Button)({
  textTransform: "none",
});

const OrderActivities = () => {
  return (
    <div className="mt-4 bg-white p-3 rounded-[16px] shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-500 font-Poppins leading-24">
          Orders Activities
        </h2>
        <ViewAllButton variant="text" color="primary">
          View All
        </ViewAllButton>
      </div>
      <StyledTableContainer>
        <Table>
          <StyledTableHead>
            <TableRow>
              <StyledTableCellHead>Transaction ID</StyledTableCellHead>
              <StyledTableCellHead>Type</StyledTableCellHead>
              <StyledTableCellHead>Description</StyledTableCellHead>
              <StyledTableCellHead>Date</StyledTableCellHead>
              <StyledTableCellHead>USD Amount</StyledTableCellHead>
              <StyledTableCellHead>Amount</StyledTableCellHead>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {OrderData.map((row) => (
              <TableRow key={row.id}>
                <StyledTableCellBody>{row.id}</StyledTableCellBody>
                <StyledTableCellBody>
                  {row.type === "buy" ? <BuyIcon /> : <SellIcon />}
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <div className="flex items-center gap-2">
                    {row.type === "buy" ? "Buy " : "Sell "}
                    {row.coin === "bitcoin" ? (
                      <>
                        <FaBitcoin style={{ color: "#f7931a" }} /> Bitcoin
                      </>
                    ) : (
                      <>
                        <FaEthereum style={{ color: "#3c3c3d" }} /> Ethereum
                      </>
                    )}
                  </div>
                </StyledTableCellBody>
                <StyledTableCellBody>{row.date}</StyledTableCellBody>
                <StyledTableCellBody>{row.usdAmount}</StyledTableCellBody>
                <StyledTableCellBody>{row.amount}</StyledTableCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
};

export default OrderActivities;
