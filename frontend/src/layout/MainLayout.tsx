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

import ResizeableList from "@/components/ResizeableList";

export default function MainLayout() {
  const [isListVisible, setIsListVisible] = useState(true);
  const [listSize, setListSize] = useState({ width: 300, height: 200 }); // Default size

  const toggleListVisibility = () => setIsListVisible(!isListVisible);

  return (
    <Stack sx={{ width: "100%", margin: 0, padding: 0, flexGrow: 1 }}>
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
      <Stack sx={{ margin: 0, padding: 0, flexGrow: 1 }}>
        <Stack direction="row">
          <SideBar />
          <Divider
            orientation="vertical"
            sx={{ borderLeft: "1px solid black" }}
          />

          {isListVisible && (
            <Resizable
              defaultSize={{
                width: 320,
                height: 200,
              }}
              style={{ border: "1px solid black" }}
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
