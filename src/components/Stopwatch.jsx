import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [state, setState] = useState(0);
  useEffect(function () {
    let timer = setInterval(() => setState((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <h2>{state} seconds</h2>
    </>
  );
}
