"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import HeroSearch from "./HeroSearch";

export function DotBackground() {
  return (
    <div className="relative flex h-screen md:h-screen  w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:110px_110px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col items-center gap-10 md:gap-6 text-center p-3 ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-20 gradient bg-clip-text text-transparent text-4xl font-bold tracking-wider sm:text-7xl leading-[1.2] md:leading-[1.5] mb-4">
          Find Your Dream Ride <br />
          with{" "}
          <span className="text-white font-extrabold tracking-tight">
            GearGrid
          </span>
        </motion.h1>

        <motion.p
          className="text-center gradient-sub mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}>
          Shift Into Gear — Your Journey Starts Here.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
          className=" w-[80%] md:w-full max-w-md mt-5">
          <HeroSearch />
        </motion.div>
      </div>
    </div>
  );
}
