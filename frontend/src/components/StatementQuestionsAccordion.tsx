import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import DataStructuresChips from "./DataStructuresChips";

export default function AccordionBasic() {
  return (
    <AccordionGroup sx={{ width: "50%", marginTop: 3 }}>
      <Accordion>
        <AccordionSummary>
          What data structure does the exercise require?
        </AccordionSummary>
        <AccordionDetails>
          <DataStructuresChips />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          Can you break the problem into simpler parts?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          Are there any similar exercises you previously resolved?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
