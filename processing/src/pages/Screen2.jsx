import Sketch from "react-p5";
import Navbar from "../components/Navbar";

export default function Screen2() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.background(220);
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.fill(255, 0, 0);
    p5.noStroke();
    p5.rect(0, 190, 400, 20);

    p5.fill(255, 0, 0);
    p5.noStroke();
    p5.rect(190, 0, 20, 400);
  };

  return (
    <>
      <h1>Screen 2</h1>
      <Navbar />
      <div
        className="stats-containter-fixed"
        style={{ width: "100%", minHeight: "600px", background: "white" }}
      >
        <Sketch setup={setup} draw={draw} />
      </div>
    </>
  );
}
