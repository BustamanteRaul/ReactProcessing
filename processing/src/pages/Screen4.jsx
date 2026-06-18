import Sketch from "react-p5";
import Navbar from "../components/Navbar";

export default function Screen4() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.background(220);
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.fill(255, 0, 0);
    p5.noStroke();
    p5.rect(0, 0, 50, 50);

    p5.fill(255, 0, 0);
    p5.noStroke();
    p5.rect(350, 0, 50, 50);

    p5.fill(255, 0, 0);
    p5.noStroke();
    p5.rect(0, 350, 50, 50);

    p5.fill(255, 0, 0);
    p5.noStroke();
    p5.rect(350, 350, 50, 50);
  };

  return (
    <>
      <h1>Screen 4</h1>
      <Navbar />
      <div className="stats-containter-fixed">
        <Sketch setup={setup} draw={draw} />
      </div>
    </>
  );
}
