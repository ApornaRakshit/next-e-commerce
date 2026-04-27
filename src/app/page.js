import Banner from "@/components/homepage/Banner";
import HeroSection from "@/components/homepage/HeroSection";
import OurProducts from "@/components/homepage/OurProducts";
import Features from "./features/page";
import DisplayFeatures from "@/components/homepage/DisplayFeatures";

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <HeroSection></HeroSection>
    <OurProducts></OurProducts>
    <DisplayFeatures></DisplayFeatures>
    </>
  );
}