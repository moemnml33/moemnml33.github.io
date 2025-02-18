import { Typography } from "@material-tailwind/react";
import React from "react";
import Links from "./Links";

export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center mt-16 gap-y-6 gap-x-12 border-t border-zinc-800 py-6 text-center md:justify-between">
      <Typography color="text-zinc-400" className="font-normal">
        &copy; Mohamad Boukaili
      </Typography>
      <Links />
    </footer>
  );
}
