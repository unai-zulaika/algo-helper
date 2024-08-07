import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import * as React from "react";

export default function CheckboxChip() {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <div>
        <Box
          role="group"
          aria-labelledby="fav-movie"
          sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
        >
          {[
            "Array",
            "Single Linked List",
            "Double Linked List",
            "Queue",
            "Stack",
            "Binary tree",
            "Binary search tree",
            "RL siblings tree",
          ].map((name) => {
            const checked = selected.includes(name);
            return (
              <Chip
                key={name}
                variant="plain"
                color={checked ? "primary" : "neutral"}
                startDecorator={
                  checked && (
                    <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
                  )
                }
              >
                <Checkbox
                  variant="outlined"
                  color={checked ? "primary" : "neutral"}
                  disableIcon
                  overlay
                  label={name}
                  checked={checked}
                  onChange={(event) => {
                    setSelected((names) =>
                      !event.target.checked
                        ? names.filter((n) => n !== name)
                        : [...names, name]
                    );
                  }}
                />
              </Chip>
            );
          })}
        </Box>
      </div>
    </Box>
  );
}
