"use client";
import CarCards from "@/components/CarCards";
import { DotBackground } from "@/components/HeroBg";
import Marquee from "@/components/Marquee";
import { whyChooseUsList } from "@/lib";
import { bodyTypes, carMakes, faqList, featuredCars } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCar } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="  flex flex-col">
      {/* Hero section */}
      <section className="mt-15 relative py-5 text-white">
        <div>
          <DotBackground />
        </div>
      </section>
      {/* Featured section */}
      <section>
        <div>
          <motion.div className="flex justify-center items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
              className="text-xl text-gray-500 font-bold tracking-wide capitalize mb-4">
              Top Picks For You
            </motion.h2>
          </motion.div>
          <CarCards cars={featuredCars} />
          <Marquee marqueeImages={carMakes} />
        </div>
      </section>

      {/* Intro section  */}
      <section className="py-5  ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="container mx-auto px-4 ">
          <motion.h2 className="text-xl md:text-2xl font-bold text-gray-600 tracking-wider text-center mb-10 ">
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15 bg-gray-100 rounded-3xl p-8">
            {whyChooseUsList.map((item) => (
              <div
                key={item.id}
                className="text-center border-b-1 md:border-b-0 md:border-r-1 border-gray-300 last:border-b-0 last:border-r-0">
                <div className=" text-white bg-gray-300 rounded-full size-18 flex items-center justify-center mx-auto mb-2">
                  <FaCar className="size-7 " />
                </div>
                <h3 className="text-xl text-gray-600 font-bold mb-2 ">
                  {item.title}
                </h3>
                <p className="leading-relaxed px-10 mb-7">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Discover by Design section */}
      <section className="py-5 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.3, ease: "easeOut" }}
          className="container mx-auto px-4 ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-600 tracking-wider text-center mb-10">
            Discover by Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4  gap-4 ">
            {bodyTypes.map((type) => (
              <Link
                key={type.id}
                href={`/cars?bodyType=${type.name}`}
                className="relative group cursor-pointer">
                <div className="overflow-hidden rounded-lg flex justify-end h-60 mb-4 relative">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill={true}
                    className="object-cover object-center group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-70 text-white text-center py-2">
                  <span className="text-sm font-semibold">{type.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Faq section */}
      <section className="py-5 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
          className="container mx-auto px-4 ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-600 tracking-wider text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqList.map((faq) => (
              <AccordionItem key={faq.index} value={`item-${faq.index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>
    </div>
  );
}
