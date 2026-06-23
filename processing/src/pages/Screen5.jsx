import Sketch from "react-p5";
import Navbar from "../components/Navbar";
import { useRef } from "react";

let timer = 0; // frame counter
const phases = ["red", "yellow", "green"];
let phase = phases[0];
const durations = { red: 180, yellow: 60, green: 180 };
let phaseIndex = 0;

export default function Screen4() {
  const pedRequestRef = useRef(false);
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.background(220);
    p5.noStroke();
  };

  const draw = (p5) => {
    timer++;
    if (pedRequestRef.current) {
      pedRequestRef.current = false;
      timer = 0;
      phaseIndex = 0;
      phase = phases[0];
    }
    if (timer >= durations[phase]) {
      timer = 0;
      phaseIndex = (phaseIndex + 1) % phases.length;
      phase = phases[phaseIndex];
    }
    if (phase === "red") {
      p5.fill(255, 0, 0);
    } else if (phase === "yellow") {
      p5.fill(255, 255, 0);
    } else if (phase === "green") {
      p5.fill(0, 255, 0);
    }
    p5.noStroke();
    p5.ellipse(200, 200, 50, 50);
  };

  return (
    <>
      <h1>Screen 4</h1>
      <Navbar />
      <div className="stats-containter-fixed">
        <Sketch setup={setup} draw={draw} />
      </div>
      <button
        onClick={() => {
          pedRequestRef.current = true;
        }}
      >
        Peaton
      </button>
    </>
  );
}
