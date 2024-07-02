import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { Divider } from "@mui/joy";
import { DataGrid } from "@mui/x-data-grid";
import StatementQuestionsAccordion from "./StatementQuestionsAccordion";

import { Theme, styled } from "@mui/joy/styles";
import ExamplesTable from "./ExamplesTable";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
}));

const rows: GridRowsProp = [
  { id: 1, col1: "A = [3, 7, 1, 5, 2]", col2: "A = [1, 2, 3, 5, 7]" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Input", width: 150, editable: true },
  { field: "col2", headerName: "Output", width: 150, editable: true },
];

interface StatementProps {
  exerciseStatementData: {};
}

export default function Statement({ exerciseStatementData }: StatementProps) {
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
