function visualize() {
  const chart = d3.select('.chart');

  // TODO: Create and append an svg element to the chart selection 
  // Add a circle to the svg

  // HINT: cy, cx, and r are [attr]ibutes
  // 
  // <circle cx="60px" cy="60px" r="30px" />

  const svg = chart
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%');

  svg.append('circle')
    .attr('cx', '60px')
    .attr('cy', '60px')
    .attr('r', '30px')
    .style('fill', 'brown')
    .style('stroke', 'white');

}
