import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (color === "red") {
        setColor("yellow");
      }
      if (color === "yellow") {
        setColor("green");
      }
      if (color == "green") {
        setColor("red");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [color]);

  return (
    <div className="traffic-light">
      <div
        className="light red"
        style={{ opacity: color === "red" ? 1 : 0.2 }}
      ></div>
      <div
        className="light yellow"
        style={{ opacity: color === "yellow" ? 1 : 0.2 }}
      ></div>
      <div
        className="light green"
        style={{ opacity: color === "green" ? 1 : 0.2 }}
      ></div>
    </div>
  );
}
