import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("Good morning");
  const [textColor, setTextColor] = useState({ color: "red" });

  useEffect(() => {
    const d = new Date();
    let hour = d.getHours();

    if (hour >= 0 && hour < 12) {
      setText("Good night");
      setTextColor({ color: "blue" });
    } else if (hour >= 12 && hour < 18) {
      setText("Good evening");
      setTextColor({ color: "green" });
    } else {
      setText("Good morning");
    }
  }, []);

  return (
    <div>
      <h1 style={textColor}>{text}</h1>
    </div>
  );
}

export default App;
