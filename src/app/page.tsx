import Image from "next/image";

import Main from "@/components/Main";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Main/>
    <About/>
    <Experience/>
    <TechStack/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
