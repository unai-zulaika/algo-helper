import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { Divider } from "@mui/joy";
import StatementQuestionsAccordion from "./StatementQuestionsAccordion";

import ExamplesTable from "./ExamplesTable";

// const rows: GridRowsProp = [
//   { id: 1, col1: "A = [3, 7, 1, 5, 2]", col2: "A = [1, 2, 3, 5, 7]" },
// ];

// const columns: GridColDef[] = [
//   { field: "col1", headerName: "Input", width: 150, editable: true },
//   { field: "col2", headerName: "Output", width: 150, editable: true },
// ];

interface StatementProps {
  exerciseStatementData: {
    title: string;
    description: string;
  };
}

export default function Statement({ exerciseStatementData }: StatementProps) {
  console.log(exerciseStatementData);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "30px",
        // height: "85vh",
      }}
    >
      <Typography level="h1">{exerciseStatementData.title}</Typography>
      <Typography>{exerciseStatementData.description}</Typography>
      <StatementQuestionsAccordion />
      <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
      <Typography level="h1">Examples</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: "0",
          marginTop: 3,
        }}
      >
        {/* <DataGrid rows={rows} columns={columns} /> */}
        <ExamplesTable />
      </Box>
    </Box>
  );
}
