import React, { use, useState } from "react";
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import ProjectsTabs from "@/components/ProjectsTabs";
import FooterBar from "@/components/FooterBar";
import Statement from "@/components/Statement";
import DiagramFlow from "@/components/DiagramFlow";
import ResizeableExercisesList from "@/components/ResizeableExercisesList";
import ResizeableStatementData from "@/components/ResizeableStatementData";
import ResizeableChat from "@/components/ResizeableChat";
import CodeEditor from "@/components/CodeEditor";
import Finished from "@/components/Finished";

import { client } from "@/app/page";

import { useQuery, gql } from "@apollo/client";

import ResizeableDiagram from "@/components/ResizeableDiagram";

const defaultExerciseData = {
  title: "Exercise title",
  description:
    "Exercise explanation. This is a long text that explains the exercise",
  examples: [
    {
      input: "A = [3, 7, 1, 5, 2]",
      output: "A = [1, 2, 3, 5, 7]",
    },
  ],
};

const userData = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  settings: {
    theme: "dark",
    notifications: true,
  },
};

const userExercises = [
  {
    exercise_id: 1,
    exercise_name: "Bubble Sort",
    exercisedata: {
      title: "Bubble Sort",
      description:
        "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.",
    },
  },
  {
    exercise_id: 2,
    exercise_name: "Reverse linked list",
    exercisedata: {
      title: "Reverse linked list",
      description:
        "Given a pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.",
    },
  },
];

export default function MainLayout() {
  const [exerciseStatementData, setExerciseStatementData] = useState({
    title: "",
    description: "",
  });
  const [isListVisible, setIsListVisible] = useState(true);
  const toggleListVisibility = () => setIsListVisible(!isListVisible);
  const [panelWidth, setPanelWidth] = useState<number>(320); // Initial width of the panel
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [currentResizeableList, setCurrentResizeableList] = useState<number>(0);
  const [userExercises, setUserExercises] = useState<any[]>([]);
  const [activeExercise, setActiveExercise] = useState("1");

  function onExerciseClick(exerciseKey: string) {
    // Update the activeExercise state with the new key
    setActiveExercise(exerciseKey);
  }

  const handleResizeStop = (
    _e: any,
    _direction: any,
    _ref: any,
    d: { width: number }
  ) => {
    setPanelWidth(panelWidth + d.width); // Adjust the width based on the delta
  };

  const incrementStep = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const decrementStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const updateResizeableList = (currentNumber: number) => {
    if (currentNumber == currentResizeableList) toggleListVisibility();
    else {
      setCurrentResizeableList(currentNumber);
      if (!isListVisible) toggleListVisibility();
    }
  };

  const renderSwitch = (param: number) => {
    switch (param) {
      case 0:
        return <Statement exerciseStatementData={exerciseStatementData} />;
      case 1:
        return <DiagramFlow />;
      case 2:
        return <CodeEditor />;
      case 3:
        return <Finished />;
      default:
        return "OOps! Error!";
    }
  };

  const renderResizeable = (param: number) => {
    switch (param) {
      case 0:
        return (
          <ResizeableExercisesList
            panelWidth={panelWidth}
            handleResizeStop={handleResizeStop} // Pass the function to the child component
            arrayUserExercises={userExercises}
            onExerciseClick={onExerciseClick}
            activeExercise={activeExercise}
          />
        );
      case 1:
        return (
          <ResizeableStatementData
            panelWidth={panelWidth}
            handleResizeStop={handleResizeStop} // Pass the function to the child component
            exerciseData={exerciseStatementData}
            currentStep={currentStep}
          />
        );
      case 2:
        return (
          <ResizeableDiagram
            panelWidth={panelWidth}
            handleResizeStop={handleResizeStop} // Pass the function to the child component
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <ResizeableChat
            panelWidth={panelWidth}
            handleResizeStop={handleResizeStop} // Pass the function to the child component
          />
        );
      default:
        return (
          <ResizeableExercisesList
            panelWidth={panelWidth}
            handleResizeStop={handleResizeStop} // Pass the function to the child component
            arrayUserExercises={userExercises}
            onExerciseClick={onExerciseClick}
            activeExercise={activeExercise}
          />
        );
    }
  };

  // do once
  React.useEffect(() => {
    // TODO: remove this
    setExerciseStatementData(defaultExerciseData);

    const GET_USER_EXERCISES = gql`
      query UserExercises {
        userExercises(userId: 1) {
          name
          id
          exercisedata {
            title
            description
          }
        }
      }
    `;

    client
      .query({ query: GET_USER_EXERCISES })
      .then((result) => setUserExercises(result.data.userExercises));
  }, []);

  React.useEffect(() => {
    // TODO: remove this
    console.log(userExercises);
    if (userExercises.length > 0)
      setExerciseStatementData(
        userExercises[parseInt(activeExercise) - 1].exercisedata
      ); // Update the statement data based on the active exercise
  }, [activeExercise]);

  return (
    <Stack
      sx={{
        width: "100%",
        margin: 0,
        padding: 0,
        flex: "1 1 0",
        flexWrap: "wrap",
      }}
    >
      <Stack sx={{ width: "100%", margin: 0, padding: 0, flexGrow: 0 }}>
        <HeaderBar />
        <Divider
          sx={{
            width: "100%",
            margin: 0,
            padding: 0,
            borderTop: "1px solid black",
          }}
        />
      </Stack>
      <Stack
        sx={{
          margin: 0,
          padding: 0,
          flex: "1 1 0",
          maxHeight: "100%",
        }}
      >
        <Stack direction="row" sx={{ flex: "1 1 0", maxHeight: "100%" }}>
          <SideBar updateResizeableList={updateResizeableList} />
          <Divider
            orientation="vertical"
            sx={{ borderLeft: "1px solid black" }}
          />
          {isListVisible && renderResizeable(currentResizeableList)}
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ProjectsTabs
              arrayUserExercises={userExercises}
              onExerciseClick={onExerciseClick}
              activeExercise={activeExercise}
            />
            {/* Wrap Statement in a div or another Stack for better control over its styling */}
            <div
              style={{
                maxHeight: "calc(100vh - 20vh)",
                minHeight: "calc(100vh - 20vh)",
                overflowY: "scroll",
              }}
            >
              {renderSwitch(currentStep)}
            </div>
          </Stack>
        </Stack>
      </Stack>
      <FooterBar
        currentStep={currentStep}
        incrementStep={incrementStep}
        decrementStep={decrementStep}
      />
    </Stack>
  );
}
