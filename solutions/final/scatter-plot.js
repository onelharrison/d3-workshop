function visualize() {

  const svg = d3.select('.chart')
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%');

  const margins = {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20
  };

  const svgDimensions =  {
    height: parseInt(svg.style('height')),
    width: parseInt(svg.style('width'))
  };

  const mainG = svg
    .append('g')
    .attr('transform', `translate(${margins.left}, ${2 * margins.top})`);

  d3.csv('data/heights-and-weights-by-gender.csv', (record) => {
    return {
      gender: record.Gender.toLowerCase(),
      height: +record.Height,
      weight: +record.Weight
    };
  })
  .then(data => genderScatterPlot('male', data));

  function genderScatterPlot(gender, data) {

    const dataForGender = data.filter(record => record.gender === gender);
    const heights = dataForGender.map(d => d.height);
    const weights = dataForGender.map(d => d.weight);

    const xScale = d3.scaleLinear()
      .domain(d3.extent(heights))
      .range([3*margins.left, svgDimensions.width - (2*margins.right)])
      .nice();

    const xAxis = d3.axisBottom()
      .scale(xScale);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(weights))
      .range([svgDimensions.height - (5 * margins.bottom), 0])
      .nice();

    const yAxis = d3.axisLeft()
      .scale(yScale);

    mainG.append('g')
      .classed('x-axis', true)
      .attr('transform', `translate(0, ${d3.max(yScale.range())})`)
      .call(xAxis)
      .append('text')
      .attr('x', svgDimensions.height - (4*margins.bottom))
      .attr('y', 2 * margins.bottom)
      .attr('text-anchor', 'end')
      .style('stroke', 'black')
      .style('fill', 'black')
      .style('font-size', '12px')
      .text('Height (in)');

    mainG.append('g')
      .classed('y-axis', true)
      .attr('transform', `translate(${d3.min(xScale.range())}, 0)`)
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -d3.max(yScale.range()) / 2)
      .attr('y', -(2 * margins.left))
      .attr('text-anchor', 'center')
      .style('stroke', 'black')
      .style('fill', 'black')
      .style('font-size', '12px')
      .text('Weight (lb)');

    const plotRadius = 3;

    mainG.selectAll('.plot-point')
      .data(dataForGender)
      .enter()
      .append('g')
      .classed('plot-point', true)
      .append('circle')
      .attr('cx', d => xScale(d.height))
      .attr('cy', d => yScale(d.weight))
      .attr('r', plotRadius)
      .style('stroke', 'white')
      .style('fill', 'blue');

  }
}

