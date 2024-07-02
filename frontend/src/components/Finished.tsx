import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography, { typographyClasses } from "@mui/joy/Typography";

import Link from "@mui/joy/Link";
import { ArrowForward } from "@mui/icons-material";
import Button from "@mui/joy/Button";

export default function Finished({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Container
      sx={(theme) => ({
        position: "relative",
        display: "flex",
        flexDirection: reversed ? "column-reverse" : "column",
        alignItems: "center",
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: "row",
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "50ch",
          textAlign: "center",
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: "flex-start",
            textAlign: "initial",
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: "balance",
          },
        })}
      >
        <Typography color="primary" fontSize="lg" fontWeight="lg">
          Congratulations!
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          You did it!
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          Now you should think about implementing the pseudocode in other
          languages such as Java or Python.
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          Also, you could think about other possible solutions for the same
          problem.
        </Typography>
        <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
          Start another exercise
        </Button>

        <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
          Export to PDF
        </Button>
      </Box>
      <AspectRatio
        ratio={600 / 520}
        variant="outlined"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: "stretch",
          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },
          borderRadius: "sm",
          bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        <img
          src="https://images.unsplash.com/photo-1556711905-4bd1b6603275?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </AspectRatio>
    </Container>
  );
}
