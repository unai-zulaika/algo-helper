import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";
import * as React from "react";

export default function CheckboxChip() {
  const [selected, setSelected] = React.useState<string>([]);

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <div>
        <RadioGroup
          name="best-movie"
          aria-labelledby="best-movie"
          orientation="horizontal"
          sx={{ flexWrap: "wrap", gap: 1 }}
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
            const checked = selected === name;
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
                <Radio
                  variant="outlined"
                  color={checked ? "primary" : "neutral"}
                  disableIcon
                  overlay
                  label={name}
                  value={name}
                  checked={checked}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected(name);
                    }
                  }}
                />
              </Chip>
            );
          })}
        </RadioGroup>
      </div>
    </Box>
  );
}
