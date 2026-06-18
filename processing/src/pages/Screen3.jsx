import Sketch from "react-p5";
import Navbar from "../components/Navbar";

export default function Screen3() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.background(220);
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.fill(255, 0, 0);
    p5.noStroke();
    p5.ellipse(200, 200, 350, 350);

    p5.fill(0, 255, 0);
    p5.noStroke();
    p5.ellipse(200, 200, 200, 200);

    p5.fill(0, 0, 255);
    p5.noStroke();
    p5.ellipse(200, 200, 100, 100);
  };

  return (
    <>
      <h1>Screen 3</h1>
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
