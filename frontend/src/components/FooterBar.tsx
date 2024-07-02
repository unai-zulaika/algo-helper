import React from "react";
import { Box, Stepper, Step, Stack, StepIndicator } from "@mui/joy";
import { Button, Divider, Link } from "@mui/joy";
import { Check } from "@mui/icons-material";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

interface FooterBarProps {
  currentStep: number; // Define 'currentStep' as a number
  incrementStep: () => void;
  decrementStep: () => void;
}

export default function FooterBar({
  currentStep,
  incrementStep,
  decrementStep,
}: FooterBarProps) {
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
        {currentStep > 0 && (
          <Button onClick={decrementStep} size="sm" sx={{ margin: "10px" }}>
            Previous
          </Button>
        )}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          {/* Centers the stepper */}
          {/* <Stepper
          // activeStep={currentStep}
          // alternativeLabel
          >
            {steps.map((label) => (
              <Step
                key={label}
                indicator={
                  <StepIndicator variant="solid" color="primary">
                    <Check />
                  </StepIndicator>
                }
              >
                {" "}
              </Step>
            ))}
          </Stepper> */}
        </Box>
        {currentStep < 3 && (
          <Button onClick={incrementStep} sx={{ margin: "10px" }} size="sm">
            {"Next"}
            {/* TODO: css button to be smaller Next */}
          </Button>
        )}
      </Box>
    </Stack>
  );
}
