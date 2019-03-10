function visualize() {
  const chart = d3.select('.chart');

  // TODO: Create and append an svg element to the chart selection 
  // Add a rectangle to the svg

  // HINT: x, y, width, and height are [attr]ibutes
  // 
  // <rect x="60px" y="60px" width="100px" height="50px" />

  const svg = chart
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%');

  svg.append('rect')
    .attr('x', '60px')
    .attr('y', '60px')
    .attr('width', '100px')
    .attr('height', '50px')
    .style('fill', 'brown')
    .style('stroke', 'white');

}
