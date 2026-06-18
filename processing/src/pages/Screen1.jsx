import Sketch from "react-p5";
import Navbar from "../components/Navbar";

export default function Screen1() {
  const setup = (p5, canvasParentRef) => {
    const width = 400;
    const height = 400;
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.background(20);
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.fill(20, 15);
    p5.rect(0, 0, p5.width, p5.height);

    const velocidad = p5.dist(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    const diametro = p5.dist(velocidad, 0, 100, 10, 90, true);

    const rojo = p5.map(p5.mouseX, 0, p5.width, 100, 255);
    const verde = p5.map(p5.mouseY, 0, p5.height, 100, 255);
    p5.fill(rojo, verde, 255, 200);
    p5.ellipse(p5.mouseX, p5.mouseY, diametro, diametro);
  };

  return (
    <>
      <h1>Sketch 1</h1>
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
