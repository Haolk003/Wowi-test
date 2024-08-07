"use client";

import React, { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { FaBitcoin } from "react-icons/fa6";

const CryptoTractionForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [coinType, setCoinType] = useState("bitcoin");
  const [usdAmount, setUsdAmount] = useState("146962.992");
  const [btcAmount, setBtcAmount] = useState("0.258");

  const handleTabChange = (event: any, newValue: any) => {
    setTabIndex(newValue);
  };

  const handleCoinTypeChange = (event: any) => {
    setCoinType(event.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      className="bg-white rounded-[16px] w-[30%] shadow-md"
    >
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Buy" className="w-[50%]" />
        <Tab label="Sell" className="w-[50%]" />
      </Tabs>

      <Box sx={{ p: 3, borderRadius: 1, mt: 2 }}>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          Coin Name
        </Typography>

        <Select
          value={coinType}
          onChange={handleCoinTypeChange}
          fullWidth
          displayEmpty
          startAdornment={<FaBitcoin style={{ marginRight: 8 }} />}
        >
          <MenuItem value="bitcoin">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaBitcoin />
              <span style={{ marginLeft: 8 }}>Bitcoin BTC</span>
            </div>
          </MenuItem>
        </Select>

        <Typography variant="body2" color="textSecondary" sx={{ mt: 2, mb: 1 }}>
          Amount (USD)
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          value={usdAmount}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            endAdornment: (
              <InputAdornment position="end" style={{ color: "#4caf50" }}>
                USD
              </InputAdornment>
            ),
          }}
        />

        <Typography variant="body2" color="textSecondary" sx={{ mt: 2, mb: 1 }}>
          Amount (BTC)
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          value={btcAmount}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" style={{ color: "#ff9800" }}>
                BTC
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          <p className="font-BeVietNam text-16 font-500">Buy BTC</p>
        </Button>
      </Box>
    </Container>
  );
};

export default CryptoTractionForm;
