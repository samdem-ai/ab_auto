import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Fleet from "./components/Fleet";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [selectedCar, setSelectedCar] = useState("");

  const handleBook = (id: string) => {
    setSelectedCar(id);
    const el = document.getElementById("reserver");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Fleet onBook={handleBook} />
        <HowItWorks />
        <WhyUs />
        <Booking selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
