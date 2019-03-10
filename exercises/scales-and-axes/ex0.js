function visualize() {
  const chart = d3.select('.chart');

  const svg = chart
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%');

  const margins = {
    right: 10,
    left: 10,
    top: 20,
    bottom: 20
  };

  const svgWidth = parseInt(svg.style('width'));
  const svgHeight = parseInt(svg.style('height'));

  const data = [0, 10, 20, 30, 40, 50, 60];

  // TODO: Create an xScale and an xAxis and add the axis to the svg

}
