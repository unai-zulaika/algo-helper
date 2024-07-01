import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import DataStructuresChips from "./DataStructuresChips";
import { Typography } from "@mui/joy";

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
          <Typography>
            Think about little problems that can be solved independently.
          </Typography>
          <Typography>
            For example, if you are asked to find the maximum value in an array,
            you can first find the maximum value in the first half of the array
            and then the maximum value in the second half of the array. Finally,
            you can compare the two maximum values to find the maximum value in
            the entire array.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          Are there any similar exercises you previously resolved?
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Think about the exercises you have resolved in the past and try to
            find similarities with the current exercise.
          </Typography>
          <Typography>
            For instance, if you are asked to find the maximum value in an
            array, you can think about the exercises where you had to find the
            minimum value in an array.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
