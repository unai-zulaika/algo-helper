import * as React from "react";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { Divider } from "@mui/joy";

export default function ProjectsTabs() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 0 }}>
      <Tabs
        value={index}
        onChange={(event, value) => setIndex(value as number)}
      >
        <TabList
          disableUnderline
          sx={{
            backgroundColor: "#dadedf",
          }}
        >
          <Tab color={"neutral"}>First tab</Tab>
          <Tab color={"neutral"}>Second tab</Tab>
        </TabList>
      </Tabs>
      <Divider sx={{ borderTop: "1px solid black" }} />
    </Box>
  );
}
