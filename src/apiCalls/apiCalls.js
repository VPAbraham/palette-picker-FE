export const getProjects = () => {
  return fetch('http://palette-pick-be.herokuapp.com/api/v1/projects')
    .then(res => res.json())
}

export const getPalettes = () => {
  return fetch('http://palette-pick-be.herokuapp.com/api/v1/palettes')
    .then(res => res.json())
}
