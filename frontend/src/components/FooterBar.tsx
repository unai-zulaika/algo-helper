import React from "react";
import { Box, Stepper, Step, StepLabel, Stack } from "@mui/material";
import { Button, Divider } from "@mui/joy";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];

export default function FooterBar() {
  return (
    <Stack direction="column">
      <Divider sx={{ borderTop: "1px solid black" }} />

      <Box
        sx={{
          width: "100%",
          mt: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between", // Adjusts items to the edges and center
          alignItems: "center", // Vertically centers items
          margin: 0,
        }}
      >
        <img
          src="https://www.aingoi.com/wp-content/uploads/2019/01/logo-vector-universidad-deusto.jpg"
          alt="Logo"
          style={{ width: 100, height: "auto" }}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          {/* Centers the stepper */}
          <Stepper activeStep={-1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                {" "}
                <StepLabel>{/* {label} */}</StepLabel>{" "}
              </Step>
            ))}
          </Stepper>
        </Box>
        <Button sx={{ marginRight: 3 }} onClick={function () {}}>
          {" "}
          {" next"}{" "}
        </Button>
      </Box>
    </Stack>
  );
}
