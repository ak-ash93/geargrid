import { CarMake } from "@/lib/data";
import React from "react";
import FastMarquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

type MarqueeProps = {
  marqueeImages: CarMake[];
};

const Marquee = ({ marqueeImages }: MarqueeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.1, ease: "easeOut" }}
      className="overflow-hidden mt-5">
      <FastMarquee
        gradient={false}
        speed={60}
        className=" my-12 overflow-hidden  ">
        {marqueeImages.map((make) => (
          <div
            key={make.id}
            className="mx-8 flex  items-center justify-center  "
            style={{ height: 60 }}>
            <Image
              src={make.image}
              alt={make.name}
              width={110}
              height={55}
              className="h-auto w-auto object-contain rounded-lg"
            />
          </div>
        ))}
      </FastMarquee>
    </motion.div>
  );
};

export default Marquee;
