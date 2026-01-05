import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  OrganizationSwitcher,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Theme from "../common/theme";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex p-2 items-center justify-between gap-4 border">
      <h2 className="text-xl font-semibold">TaskRa</h2>

      <div className="flex gap-2 items-center">
        <Theme></Theme>
        <SignedOut>
          <div className="flex gap-1 items-center">
            <SignInButton mode="redirect">
              <Button variant={"outline"} size="sm">
                Log In
              </Button>
            </SignInButton>

            <SignUpButton mode="redirect">
              <Button variant={"outline"} size="sm">
                Sign Up
              </Button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <OrganizationSwitcher></OrganizationSwitcher>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
