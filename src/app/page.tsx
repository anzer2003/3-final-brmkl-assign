import Head from "next/head";
import { Navbar } from "@/app/components/Navbar"
import Hero from '../app/components/Hero'
import Features from '../app/components/features'
import About from "./components/About";
import Journey from "@/app/components/Jouney"
import Skills from "@/app/components/Skills"
import Contact from "@/app/components/Contact"

export default function Home() {
  return (
    <>
    <Head>
      <title>Syed Anzer Ali Personal Portfolio</title>
      <meta name="description" content="Generated by created next app" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <Journey/>
    <Skills/>
    <Contact/>
    
    </>
  )
}
