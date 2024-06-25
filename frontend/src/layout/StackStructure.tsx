import React, { useState } from "react";
import StackVisualization from "../components/StackVisualization";

const StackStructre: React.FC = () => {
  const [stack, setStack] = useState<number[]>([]);

  const handlePush = () => {
    const newValue = stack.length > 0 ? stack[stack.length - 1] + 1 : 1;
    setStack([...stack, newValue]);
  };

  const handlePop = () => {
    setStack(stack.slice(0, stack.length - 1));
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <h1>Stack Visualization</h1>
      <button onClick={handlePush}>Push</button>
      <button onClick={handlePop}>Pop</button>
      <StackVisualization stack={stack} />
    </div>
  );
};

export default StackStructre;
