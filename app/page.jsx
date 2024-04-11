import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
    </main>
  );
}
