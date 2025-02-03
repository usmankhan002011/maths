"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "Arithmatic 1", style: { textColor: "white" } },
  { option: "Arithmatic 2", style: { textColor: "white" } },
  { option: "Arithmatic 3", style: { textColor: "white" } },
  {
    option: "Wild Card",
    style: { backgroundColor: "#05f209", textColor: "white" },
  },
  { option: "Algebra 1", style: { textColor: "white" } },
  { option: "Algebra 2", style: { textColor: "white" } },
  { option: "Algebra 3", style: { textColor: "white" } },
  { option: "Geometry 1", style: { textColor: "white" } },
  { option: "Geometry 2", style: { textColor: "white" } },
  { option: "Geometry 3", style: { textColor: "white" } },
  {
    option: "Wild Card",
    style: { backgroundColor: "#05f209", textColor: "white" },
  },
  {
    option: "Trig 2",
    style: {
      textColor: "white",
    },
  },
  {
    option: "Trig 1",
    style: {
      textColor: "white",
    },
  },
  {
    option: "Trig 3",
    style: {
      textColor: "white",
    },
  },
  {
    option: "Stats 1",
    style: {
      textColor: "white",
    },
  },
  {
    option: "Stats 2",
    style: {
      textColor: "white",
    },
  },
  {
    option: "Stats 3",
    style: {
      textColor: "white",
    },
  },
  {
    option: "Bankrupt",
    style: {
      backgroundColor: "green",
      textColor: "white",
    },
  },
];

export default function Home() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const mustSpinRef = useRef(false);
  const buttonClick = () => {
    setMustSpin(true);
    mustSpinRef.current = true;
    const randomPrize = Math.floor(Math.random() * data.length);
    setPrizeNumber(randomPrize);
  };

  return (
    <div className="bg-zinc-200 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-black text-2xl font-bold text-center sm:text-4xl">
          MUBASHIR AMIR RIAZ RAJA Roulette game for Maths
        </h1>
        <div style={{ width: "400px", height: "400px", margin: "0 auto" }}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            innerRadius={30} // Creates the hollow center
            textDistance={65} // Positions text closer to the segments
            backgroundColors={["#3e3e3e", "#df3428"]}
            innerBorderColor="black" // Set inner border color to black
            innerBorderWidth={15}
            outerBorderWidth={15}
            onStopSpinning={() => setMustSpin(false)}
            spinDuration={0.5}
          />
        </div>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
          onClick={buttonClick}
        >
          SPIN THE WHEEL{" "}
        </button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
