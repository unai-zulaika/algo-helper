import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface StackVisualizationProps {
  stack: number[];
}

const StackVisualization: React.FC<StackVisualizationProps> = ({ stack }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const svg = d3.select(svgRef.current);
    const width = container.clientWidth;
    const height = container.clientHeight;
    const barWidth = 50;
    const barPadding = 10;

    // Clear previous content
    svg.selectAll("*").remove();

    // Set up the SVG canvas dimensions
    svg.attr("width", width).attr("height", height);

    // Draw stack elements
    svg
      .selectAll("rect")
      .data(stack)
      .enter()
      .append("rect")
      .attr("x", width / 2 - barWidth / 2)
      .attr("y", (d, i) => height - (i + 1) * (barWidth + barPadding))
      .attr("width", barWidth)
      .attr("height", barWidth)
      .attr("fill", "steelblue");

    // Add text labels
    svg
      .selectAll("text")
      .data(stack)
      .enter()
      .append("text")
      .attr("x", width / 2)
      .attr(
        "y",
        (d, i) => height - (i + 1) * (barWidth + barPadding) + barWidth / 2
      )
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text((d) => d);
  }, [stack]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <svg ref={svgRef} style={{ height: "100%", width: "100%" }}></svg>
    </div>
  );
};

export default StackVisualization;
