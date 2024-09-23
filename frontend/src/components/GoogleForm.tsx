import * as React from "react";
import { Button } from "@mui/joy";
import { signIn } from "../app/auth";
import GoogleIcon from "./GoogleIcon";

export default function GoogleForm() {
  return (
    <form
      action={async () => {
        "use server";
        console.log("signing in with google");
        await signIn("google");
      }}
    >
      <Button
        variant="soft"
        color="neutral"
        fullWidth
        startDecorator={<GoogleIcon />}
      >
        Continue with Google
      </Button>
    </form>
  );
}
