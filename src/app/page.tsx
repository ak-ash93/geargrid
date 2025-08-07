import CarCards from "@/components/CarCards";
import { DotBackground } from "@/components/ui/heroBg";
import { featuredCars } from "@/lib/data";

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
          <div className="flex justify-center items-center">
            <h2 className="text-xl text-gray-500 font-bold tracking-wide capitalize mb-4">
              Top Picks For You
            </h2>
          </div>
          <CarCards cars={featuredCars} />
        </div>
      </section>
    </div>
  );
}
