import * as React from "react";
import { Resizable } from "re-resizable";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import { useEffect, useState } from "react";

interface ResizeableExercisesListProps {
  panelWidth: number; // Define 'currentStep' as a number
  handleResizeStop: (
    _e: any,
    _direction: any,
    _ref: any,
    d: { width: number }
  ) => void;
  arrayUserExercises: any; // TODO
  onExerciseClick: (exerciseId: string) => void;
  activeExercise: string;
}

export default function ResizeableExercisesList({
  panelWidth,
  handleResizeStop,
  arrayUserExercises,
  onExerciseClick,
  activeExercise,
}: ResizeableExercisesListProps) {
  // Step 2: Define state for userExercises
  const [userExercises, setUserExercises] = useState(arrayUserExercises);

  // Step 3: Update state on change
  useEffect(() => {
    setUserExercises(arrayUserExercises);
  }, [arrayUserExercises]); // Dependency array ensures effect runs only when initialUserExercises changes
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
      <Stack spacing={2} direction="row" sx={{ flexGrow: 1 }}>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          variant="plain"
          sx={{ width: "100%" }}
        >
          {userExercises.map((userExercise: any) => (
            <Button
              key={userExercise.id}
              color={userExercise.id === activeExercise ? "primary" : "neutral"}
              onClick={() => onExerciseClick(userExercise.id)}
            >
              {userExercise.name}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Resizable>
  );
}
