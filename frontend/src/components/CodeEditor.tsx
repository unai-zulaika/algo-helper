import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import Box from "@mui/joy/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Button,
  Divider,
  Typography,
} from "@mui/joy";
import ComplexityChip from "./ComplexityChips";

export default function CodeEditor() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "30px",
        height: "85vh",
        paddingTop: "0px",
      }}
    >
      <Typography level="h1" sx={{ paddingBottom: "10px" }}>
        Pseudocode
      </Typography>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js, "javascript")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          border: "1px solid black",
        }}
      />

      <AccordionGroup sx={{ width: "50%", marginTop: 3 }}>
        <Accordion>
          <AccordionSummary>
            What is the complexity of your pseudocode?
          </AccordionSummary>
          <AccordionDetails>
            <ComplexityChip />
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            border: "1px solid black",
            padding: "10px",
            display: "flex", // Enable flexbox
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically (optional, remove if not needed)
            flexDirection: "column", // Align items horizontally
          }}
        >
          <Typography sx={{ minHeight: "50px", fontSize: 14 }}>
            Run your pseudocode for output...
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
          <Button size="sm" sx={{ margin: "7px" }}>
            Run pseudocode
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
