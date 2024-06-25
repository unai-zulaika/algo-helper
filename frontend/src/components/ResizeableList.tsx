import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

const ResizableList = ({ items, isVisible, setSize, initialSize }) => {
  const [containerSize, setContainerSize] = useState(initialSize);

  useEffect(() => {
    // This ensures the size is updated in the parent component when the list is hidden
    console.log("containerSize", containerSize);
    if (!isVisible) {
      setSize(containerSize);
    }
  }, [isVisible, containerSize, setSize]);

  const [isResizing, setIsResizing] = useState(false);

  const startResizing = (
    mouseDownEvent: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("YEAH");
    setIsResizing(true);

    const startX = mouseDownEvent.pageX;
    const startY = mouseDownEvent.pageY;
    const startSize = { ...containerSize };

    const doResize = (mouseMoveEvent: { pageX: any; pageY: any }) => {
      if (isResizing) {
        const currentX = mouseMoveEvent.pageX;
        const currentY = mouseMoveEvent.pageY;
        const newWidth = startSize.width + (currentX - startX);
        const newHeight = startSize.height + (currentY - startY);
        console.log("newWidth", newWidth);
        setContainerSize({ width: newWidth, height: newHeight });
      }
    };

    const stopResizing = () => {
      setIsResizing(false);
      window.removeEventListener("mousemove", doResize);
      window.removeEventListener("mouseup", stopResizing);
    };

    window.addEventListener("mousemove", doResize);
    window.addEventListener("mouseup", stopResizing);
  };

  return (
    <Box
      sx={{
        width: containerSize.width,
        height: containerSize.height,
        resize: "both",
        overflow: "auto",
        border: "1px solid black",
        position: "relative",
      }}
      onMouseDown={(e) => startResizing(e)}
    >
      {/* Render items here */}
    </Box>
  );
};

export default ResizableList;
