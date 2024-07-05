import * as React from "react";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { Divider } from "@mui/joy";
import { useEffect, useState } from "react";

interface ProjectsTabsProps {
  arrayUserExercises: any; // TODO
  onExerciseClick: (exerciseId: string) => void;
  activeExercise: string;
}

export default function ProjectsTabs({
  arrayUserExercises,
  onExerciseClick,
  activeExercise,
}: ProjectsTabsProps) {
  // Step 2: Define state for userExercises
  const [userExercises, setUserExercises] = useState(arrayUserExercises);

  // Step 3: Update state on change
  useEffect(() => {
    setUserExercises(arrayUserExercises);
  }, [arrayUserExercises]); // Dependency array ensures effect runs only when initialUserExercises changes
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 0 }}>
      <Tabs
        value={activeExercise}
        // onChange={(event, value) => setIndex(value as number)}
        onChange={(_event, value) => onExerciseClick(value)}
      >
        <TabList
          disableUnderline
          sx={{
            backgroundColor: "#dadedf",
          }}
        >
          {userExercises.map((userExercise: any) => (
            <Tab color="neutral" key={userExercise.id} value={userExercise.id}>
              {userExercise.name}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Divider sx={{ borderTop: "1px solid black" }} />
    </Box>
  );
}
