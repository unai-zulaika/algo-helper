import React from "react";
import { Box, Stepper, Step, StepLabel, Stack } from "@mui/material";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];

export default function FooterBar() {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stepper activeStep={-1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="end"
        sx={{ width: "100%", pt: 2 }}
      >
        <img
          src="https://www.aingoi.com/wp-content/uploads/2019/01/logo-vector-universidad-deusto.jpg"
          alt="Logo"
          style={{ width: 100, height: "auto" }}
        />
      </Stack>
    </Box>
  );
}
