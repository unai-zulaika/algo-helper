import React, { useState } from "react";
import Box from "@mui/joy/Box";
import SideBar from "@/components/SideBar";
import HeaderBar from "@/components/HeaderBar";
import Divider from "@mui/joy/Divider";
import StackStructre from "./StackStructure";
import Stack from "@mui/joy/Stack";
import ProjectsTabs from "@/components/ProjectsTabs";
import FooterBar from "@/components/FooterBar";
import { Resizable } from "re-resizable";

export default function MainLayout() {
  const [isListVisible, setIsListVisible] = useState(true);
  const toggleListVisibility = () => setIsListVisible(!isListVisible);
  const [panelWidth, setPanelWidth] = useState(320); // Initial width of the panel

  const handleResizeStop = (e, direction, ref, d) => {
    setPanelWidth(panelWidth + d.width); // Adjust the width based on the delta
  };

  return (
    <Stack
      sx={{
        width: "100%",
        margin: 0,
        padding: 0,
        flex: "1 1 0",
        height: "100vh",
        maxHeight: "100vh",
        flexWrap: "wrap",
      }}
    >
      <Stack sx={{ width: "100%", margin: 0, padding: 0, flexGrow: 0 }}>
        <HeaderBar toggleListVisibility={toggleListVisibility} />
        <Divider
          sx={{
            width: "100%",
            margin: 0,
            padding: 0,
            borderTop: "1px solid black",
          }}
        />
      </Stack>
      <Stack sx={{ margin: 0, padding: 0, flex: "1 1 0", maxHeight: "100%" }}>
        <Stack direction="row" sx={{ flex: "1 1 0", maxHeight: "100%" }}>
          <SideBar />
          <Divider
            orientation="vertical"
            sx={{ borderLeft: "1px solid black" }}
          />
          {isListVisible && (
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
              Sample with default size
            </Resizable>
          )}
          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ProjectsTabs />
            <StackStructre />
          </Stack>
        </Stack>
      </Stack>
      <FooterBar />
    </Stack>
  );
}
