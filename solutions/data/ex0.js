function visualize() {
  // TODO: Create columns where each column varies in height inside
  // the chart selection.

  const columnHeights = [10, 20, 30, 40, 50];

  d3.select('.chart')
    .selectAll('div')
    .data(columnHeights)
    .enter()
    .append('div')
      .style('height', (d) => `${d * 10}px`)
      .style('width', '100px')
      .style('display', 'inline-block')
      .style('background-color', 'blue')
      .style('margin-right', '2px')
      .style('vertical-align', 'bottom')
      .style('padding-top', '4px')
    .text(d => d)
      .style('text-align', 'center')
      .style('color', '#fff');
}
