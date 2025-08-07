"use client";
import { FeaturedCar } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import React from "react";

type CarProps = {
  cars: FeaturedCar[];
};

const CarCards = ({ cars }: CarProps) => {
  const [isSaved, setIsSaved] = React.useState<number[]>(
    cars.filter((car) => car.wishlisted).map((car) => car.id)
  );
  const toggleSave = (id: number) => {
    setIsSaved((prev) =>
      prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
    );
  };
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[1800px] mx-auto px-5 relative">
      <CarouselContent className="flex  relative ">
        {cars.map((car) => (
          <CarouselItem
            key={car.id}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-5">
            <div>
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all p-0">
                <CardContent className="p-0 relative">
                  {car.images && car.images.length > 0 ? (
                    <div className="relative h-70 w-full">
                      <Image
                        src={car.images[0]}
                        alt={car.make + " " + car.model}
                        fill
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                      No image
                    </div>
                  )}
                  <Button
                    className="absolute top-2 right-2 hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => toggleSave(car.id)}>
                    <Heart
                      className={`size-4 ${
                        isSaved.includes(car.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </Button>

                  <div className="p-4 flex flex-col mb-1">
                    <h3 className="text-lg font-semibold text-gray-600 line-clamp-1">
                      <span>{car.year + " "}</span>
                      {car.make} {car.model}
                    </h3>
                    <span>${car.price.toLocaleString()}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                      <span>{car.transmission}</span>
                      <span>|</span>
                      <span>{car.fuelType}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 size-10 bg-white shadow-md hover:bg-gray-100" />
      <CarouselNext className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 size-10 bg-white shadow-md hover:bg-gray-100" />
    </Carousel>
  );
};

export default CarCards;
