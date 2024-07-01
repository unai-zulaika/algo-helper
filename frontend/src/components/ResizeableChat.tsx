import * as React from "react";
import { Resizable } from "re-resizable";
import Stack from "@mui/joy/Stack";

import MessagesPane from "./MessagesPane";

interface ResizeableExercisesListProps {
  panelWidth: number; // Define 'currentStep' as a number
  handleResizeStop: (
    _e: any,
    _direction: any,
    _ref: any,
    d: { width: number }
  ) => void;
}

export default function ResizeableExercisesList({
  panelWidth,
  handleResizeStop,
}: ResizeableExercisesListProps) {
  return (
    <Resizable
      handleClasses={{
        top: "pointer-events-none",
        bottom: "pointer-events-none",
        left: "pointer-events-none",
        topRight: "pointer-events-none",
        bottomRight: "pointer-events-none",
        bottomLeft: "pointer-events-none",
        topLeft: "pointer-events-none",
      }}
      size={{ width: panelWidth, height: "100%" }} // Use state for dynamic width, fixed height
      onResizeStop={handleResizeStop}
      maxHeight="100%" // Prevent vertical resizing
      minHeight="100%" // Match the container's height
      maxWidth="100%" // Optional: Limit the maximum width if needed
      // Other props for Resizable
      style={{ borderRight: "1px solid black", maxHeight: "100%" }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{ flexGrow: 1, flexWrap: 1, height: "100%" }}
      >
        <MessagesPane />
      </Stack>
    </Resizable>
  );
}
