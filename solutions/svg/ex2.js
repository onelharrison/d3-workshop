function visualize() {

  const chart = d3.select('.chart');

  // TODO: Create and append an svg element to the chart selection 
  // Add a line to the svg

  // HINT: x, y, height, width are [attr]ibutes
  // 
  // <line x1="10px" y1="10px" x2="100px" y2="100px" />

  const svg = chart
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%');

  svg.append('line')
    .attr('x1', '10px')
    .attr('y1', '10px')
    .attr('x2', '100px')
    .attr('y2', '100px')
    .style('stroke', 'red')
    .style('stroke-width', 2);

}
