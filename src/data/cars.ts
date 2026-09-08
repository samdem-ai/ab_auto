export type Tier = "eco" | "compact" | "premium";
export type Transmission = "manual" | "auto";
export type Fuel = "essence" | "diesel";

export interface Car {
  id: string;
  name: string;
  /** optional model year shown as a badge */
  year?: number;
  image: string;
  tier: Tier;
  /** price per day in DZD */
  price: number;
  seats: number;
  doors: number;
  transmission: Transmission;
  fuel: Fuel;
  ac: boolean;
}

// Prices provided by AB Auto (DZD / jour).
export const CARS: Car[] = [
  {
    id: "symbol",
    name: "Renault Symbol",
    image: "/assets/cars/symbol.jpg",
    tier: "eco",
    price: 6000,
    seats: 5,
    doors: 4,
    transmission: "manual",
    fuel: "essence",
    ac: true,
  },
  {
    id: "picanto",
    name: "Kia Picanto",
    image: "/assets/cars/picanto.jpg",
    tier: "eco",
    price: 6500,
    seats: 5,
    doors: 5,
    transmission: "manual",
    fuel: "essence",
    ac: true,
  },
  {
    id: "tipo",
    name: "Fiat Tipo",
    image: "/assets/cars/tipo.jpg",
    tier: "compact",
    price: 8000,
    seats: 5,
    doors: 4,
    transmission: "manual",
    fuel: "essence",
    ac: true,
  },
  {
    id: "corsa",
    name: "Opel Corsa",
    image: "/assets/cars/corsa.jpg",
    tier: "compact",
    price: 8000,
    seats: 5,
    doors: 5,
    transmission: "manual",
    fuel: "essence",
    ac: true,
  },
  {
    id: "clio2023",
    name: "Renault Clio 5",
    year: 2023,
    image: "/assets/cars/clio2023.jpg",
    tier: "compact",
    price: 8500,
    seats: 5,
    doors: 5,
    transmission: "manual",
    fuel: "essence",
    ac: true,
  },
  {
    id: "p208",
    name: "Peugeot 208",
    image: "/assets/cars/p208.jpg",
    tier: "compact",
    price: 9000,
    seats: 5,
    doors: 5,
    transmission: "manual",
    fuel: "essence",
    ac: true,
  },
  {
    id: "clio2024",
    name: "Renault Clio 5",
    year: 2024,
    image: "/assets/cars/clio2024.jpg",
    tier: "compact",
    price: 10000,
    seats: 5,
    doors: 5,
    transmission: "auto",
    fuel: "essence",
    ac: true,
  },
  {
    id: "golf8",
    name: "Volkswagen Golf 8",
    image: "/assets/cars/golf8.jpg",
    tier: "premium",
    price: 19000,
    seats: 5,
    doors: 5,
    transmission: "auto",
    fuel: "essence",
    ac: true,
  },
];

export const TIERS: Tier[] = ["eco", "compact", "premium"];

export const priceRange = (() => {
  const p = CARS.map((c) => c.price);
  return { min: Math.min(...p), max: Math.max(...p) };
})();
