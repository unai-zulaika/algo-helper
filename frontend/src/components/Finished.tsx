import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Typography, { typographyClasses } from "@mui/joy/Typography";
import {
  CssVarsProvider,
  useColorScheme,
} from "@mui/joy/styles/CssVarsProvider";
import IconButton from "@mui/joy/IconButton";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import CssBaseline from "@mui/joy/CssBaseline";
import Link from "@mui/joy/Link";
import { ArrowForward } from "@mui/icons-material";
import Button from "@mui/joy/Button";

import framesxTheme from "../app/theme";

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
      sx={{
        position: "fixed",
        zIndex: 999,
        top: "1rem",
        right: "1rem",
        borderRadius: "50%",
        boxShadow: "sm",
      }}
    >
      {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Finished({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <ColorSchemeToggle />
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          "& > div": {
            scrollSnapAlign: "start",
          },
        }}
      >
        <Container
          sx={(theme) => ({
            position: "relative",
            minHeight: "100vh",
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
              The power to do more
            </Typography>
            <Typography
              level="h1"
              fontWeight="xl"
              fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
            >
              A large headlinerer about our product features & services
            </Typography>
            <Typography
              fontSize="lg"
              textColor="text.secondary"
              lineHeight="lg"
            >
              A descriptive secondary text placeholder. Use it to explain your
              business offer better.
            </Typography>
            <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
              Get Started
            </Button>
            <Typography>
              Already a member? <Link fontWeight="lg">Sign in</Link>
            </Typography>
            <Typography
              level="body-xs"
              sx={{
                position: "absolute",
                top: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              HeroLeft01
            </Typography>
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
              src="https://images.unsplash.com/photo-1483791424735-e9ad0209eea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </AspectRatio>
        </Container>
      </Box>
    </CssVarsProvider>
  );
}
