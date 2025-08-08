export type FeaturedCar = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  images: string[];
  transmission: string;
  fuelType: string;
  bodyType: string;
  mileage: number;
  color: string;
  wishlisted: boolean;
};

export type CarMake = {
  id: number;
  name: string;
  image: string;
};
export type BodyType = {
  id: number;
  name: string;
  image: string;
};

export const featuredCars = [
  {
    id: 1,
    make: "Tesla",
    model: "Model S",
    year: 2023,
    price: 89999,
    images: ["/cars/model-s.avif"],
    transmission: "Automatic",
    fuelType: "Electric",
    bodyType: "Sedan",
    mileage: 5000,
    color: "Silver",
    wishlisted: false,
  },
  {
    id: 2,
    make: "Ford",
    model: "Mustang GT",
    year: 2022,
    price: 55999,
    images: ["/cars/mustang-gt.avif"],
    transmission: "Manual",
    fuelType: "Petrol",
    bodyType: "Coupe",
    mileage: 12000,
    color: "Blue",
    wishlisted: true,
  },
  {
    id: 3,
    make: "Porsche",
    model: "911 Carrera",
    year: 2023,
    price: 112999,
    images: ["/cars/911-carrera.jpg"],
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Coupe",
    mileage: 3000,
    color: "Black",
    wishlisted: false,
  },
  {
    id: 4,
    make: "Honda",
    model: "Civic Type R",
    year: 2023,
    price: 42999,
    images: ["/cars/civic-r.jpg"],
    transmission: "Manual",
    fuelType: "Diesel",
    bodyType: "Hatchback",
    mileage: 7000,
    color: "White",
    wishlisted: false,
  },
  {
    id: 5,
    make: "Lamborghini",
    model: "Aventador",
    year: 2021,
    price: 399999,
    images: ["/cars/aventador.avif"],
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Supercar",
    mileage: 1000,
    color: "Silver",
    wishlisted: true,
  },
  {
    id: 6,
    make: "Mercedes-Benz",
    model: "G-Wagon",
    year: 2023,
    price: 159999,
    images: ["/cars/g-wagon.jpg"],
    transmission: "Automatic",
    fuelType: "Diesel",
    bodyType: "SUV",
    mileage: 6000,
    color: "Black",
    wishlisted: false,
  },
  {
    id: 7,
    make: "BMW",
    model: "i8 Coupe",
    year: 2020,
    price: 99999,
    images: ["/cars/bmw-i8.jpg"],
    transmission: "Automatic",
    fuelType: "Hybrid",
    bodyType: "Coupe",
    mileage: 15000,
    color: "Silver",
    wishlisted: false,
  },
  {
    id: 8,
    make: "Chevrolet",
    model: "Camaro ZL1",
    year: 2022,
    price: 67999,
    images: ["/cars/camaro-zl1.avif"],
    transmission: "Manual",
    fuelType: "Petrol",
    bodyType: "Coupe",
    mileage: 9000,
    color: "Blue",
    wishlisted: true,
  },
  {
    id: 9,
    make: "Audi",
    model: "R8 V10",
    year: 2023,
    price: 169999,
    images: ["/cars/audi-r8.jpg"],
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Coupe",
    mileage: 4000,
    color: "Gray",
    wishlisted: false,
  },
  {
    id: 10,
    make: "Bugatti",
    model: "Chiron",
    year: 2022,
    price: 2999999,
    images: ["/cars/chiron.avif"],
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Hypercar",
    mileage: 1200,
    color: "Black",
    wishlisted: true,
  },
];

export const carMakes = [
  { id: 1, name: "Audi", image: "/marquee/audi.jpg" },
  { id: 2, name: "Bmw", image: "/marquee/bmw-logo.jpeg" },
  { id: 3, name: "Chevrolet", image: "/marquee/chevrolet-logo.webp" },
  { id: 4, name: "Lamborghini", image: "/marquee/lamborgini.jpeg" },
  { id: 5, name: "Mercedes", image: "/marquee/mercedes.webp" },
  { id: 6, name: "Mustang", image: "/marquee/mustang.png" },
  { id: 7, name: "Porsche", image: "/marquee/porsche-logo.avif" },
  { id: 8, name: "Tesla", image: "/marquee/tesla.avif" },
  { id: 9, name: "Kia", image: "/marquee/kia-logo.jpg" },
  { id: 10, name: "Toyota", image: "/marquee/toyota-logo.png" },
];

export const bodyTypes = [
  { id: 1, name: "Hatchback", image: "/cars/hatchback.webp" },
  { id: 2, name: "Sedan", image: "/cars/sedan.jpeg" },
  { id: 3, name: "Convertible", image: "/cars/convertible.webp" },
  { id: 4, name: "Suv", image: "/cars/suv.png" },
];
