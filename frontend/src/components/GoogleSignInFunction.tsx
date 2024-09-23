"use server";
import { signIn } from "@/app/auth";

export default async function SignIn() {
  await signIn("google", { redirectTo: "/dashboard" });
}
