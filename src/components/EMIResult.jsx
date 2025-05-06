import React from "react";
import { Typography, Box } from "@mui/material";

const EMIResult = ({ emi, currency }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Monthly EMI: {currency} {emi}</Typography>
    </Box>
  );
};

export default EMIResult;