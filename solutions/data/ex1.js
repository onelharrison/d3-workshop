function visualize() {

  // TODO: Fetch data from data/heights-and-weights-by-gender.csv

  d3.csv('data/heights-and-weights-by-gender.csv', record => {
    return {
      height: +record.Height,
      weight: +record.Weight,
      gender: record.Gender.toLowerCase()
    }
  })
  .then(data => console.log(data));

}
