"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  { ssr: false }
);

const data = [
  { 
    option: "Arith 1",
    style: {
      backgroundColor: "green",
      textColor: "#ede5d2",
    },
    name: "Arithmatics Easy",
  },
  { 
    option: "Arith 2", 
    style: {
      backgroundColor: "#ede5d2",
      textColor: "#4f6759",
    },
    name: "Arithmatics Medium",
  },
  { 
    option: "Arith 3", 
    style: {
      backgroundColor: "green",
      textColor: "#ede5d2",
    }, 
    name: "Arithmatics Hard",
  },
  {
    option: "Wild Card",
    style: { backgroundColor: "#f4fd2e", textColor: "black" },
  },
  { 
    option: "Algebra 1", 
    style: {
      backgroundColor: "#ede5d2",
      textColor: "#4f6759",
    },
    name: "Algebra Easy", 
  },
  { 
    option: "Algebra 2", 
    style: {
      backgroundColor: "green",
      textColor: "#ede5d2",
    }, 
    name: "Algebra Medium", 
  },
  { 
    option: "Algebra 3", 
    style: {
      backgroundColor: "#ede5d2",
      textColor: "#4f6759",
    },
    name: "Algebra Hard",  
  },
  { 
    option: "Geo 1", 
    style: {
      backgroundColor: "green",
      textColor: "#ede5d2",
    },
    name: "Geometry Easy", 
  },
  { 
    option: "Geo 2", 
    style: {
      backgroundColor: "#ede5d2",
      textColor: "#4f6759",
    },
    name: "Geometry Medium", 
  },
  { 
    option: "Geo 3", 
    style: {
      backgroundColor: "green",
      textColor: "#ede5d2",
    }, 
    name: "Geometry Hard",
  },
  {
    option: "Wild Card",
    style: { backgroundColor: "#f4fd2e", textColor: "black" },
  },
  {
    option: "Trig 1",
    style: {
      backgroundColor: "#ede5d2",
      textColor: "#4f6759",
    },
    name: "Trigonometry Easy",
  },
  {
    option: "Trig 2",
    style: {
      backgroundColor: "green",
      textColor: "#ede5d2",
    },
    name: "Trigonometry Medium",
  },
  {
    option: "Trig 3",
    style: {
      backgroundColor: "#ede5d2",
      textColor: "#4f6759",
    },
    name: "Trigonometry Hard",
  },
  {
    option: "Stats 1",
    style: {
      backgroundColor: "green",
      textColor: "#ede5d2",
    },
    name: "Statistics Easy",
  },
  {
    option: "Stats 2",
    style: {
      backgroundColor: "#ede5d2",
      textColor: "#4f6759",
    },
    name: "Statistics Medium",
  },
  {
    option: "Stats 3",
    style: {
      backgroundColor: "green",
      textColor: "#ede5d2",
    },
    name: "Statistics Hard",
  },
  {
    option: "Bankrupt",
    style: {
      backgroundColor: "#eb4d4d",
      textColor: "black",
    },
  },
];

export default function Home() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const mustSpinRef = useRef(false);
  const [winner, setWinner] = useState<string | null>(null);
  const spinSound = useRef<HTMLAudioElement | null>(null);
  const [, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
    spinSound.current = new Audio("/roulette.mp3");
  }, []);
  
  const buttonClick = () => {
    setWinner(null);
    setMustSpin(true);
    if (spinSound.current) {
      spinSound.current.currentTime = 0;
      spinSound.current.play();
    }
    mustSpinRef.current = true;
    const randomPrize = Math.floor(Math.random() * data.length);
    setPrizeNumber(randomPrize);
  };

  return (
    <div className="container">
      <div className="yellow-circle"></div>
      <div className="yellow-circle"></div>
      <div className="yellow-circle"></div>
      <div className="yellow-circle"></div>
      <div className="yellow-circle"></div>
      <div className="yellow-circle"></div>
      <main className="containerInner">
        <h1 className="text text-2xl font-bold text-center sm:text-4xl">
          Wheel of Wisdom
        </h1>
        <div className="wheelContainer">
          <div className="winner">
            {winner && <h2 className='winnerText'>{winner} 🎉</h2>}
          </div>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            innerRadius={50} // Creates the hollow center
            textDistance={75} // Positions text closer to the segments
            backgroundColors={["#3e3e3e", "#df3428"]}
            innerBorderColor="black" // Set inner border color to black
            innerBorderWidth={15}
            outerBorderWidth={15}
            onStopSpinning={() => {
              setMustSpin(false)
              setWinner(data[prizeNumber].name ?? data[prizeNumber].option)
              if (spinSound.current) {
                spinSound.current.pause();
                spinSound.current.currentTime = 0;
              }
            }}
            spinDuration={0.5}
            fontSize={15}
          />
        </div>
        <button
          className="button"
          onClick={buttonClick}
        >
          SPIN THE WHEEL{" "}
        </button>
      </main>
    </div>
  );
}