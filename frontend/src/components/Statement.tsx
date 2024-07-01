import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { Divider } from "@mui/joy";
import { DataGrid } from "@mui/x-data-grid";
import StatementQuestionsAccordion from "./StatementQuestionsAccordion";

const rows: GridRowsProp = [
  { id: 1, col1: "A = [3, 7, 1, 5, 2]", col2: "A = [1, 2, 3, 5, 7]" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Input", width: 150, editable: true },
  { field: "col2", headerName: "Output", width: 150, editable: true },
];

export default function Statement() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "30px",
      }}
    >
      <Typography level="h1">Exercise title</Typography>
      <Typography>
        Exercise explanation. This is a long text that explains the exercise
      </Typography>
      <StatementQuestionsAccordion />
      <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
      <Typography level="h1">Examples</Typography>
      <div style={{ height: "200px", width: "100%", marginTop: 3 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  );
}
