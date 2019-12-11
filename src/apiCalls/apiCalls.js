export const getProjects = async() => {
  const response = await fetch('http://palette-pick-be.herokuapp.com/api/v1/projects')
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}

export const getPalettes = async() => {
  const response = await fetch('http://palette-pick-be.herokuapp.com/api/v1/palettes')
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}

export const postPalette = async (newPalette) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newPalette),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`http://palette-pick-be.herokuapp.com/api/v1/palettes`, options)
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}

export const deletePalette = async (paletteId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`http://palette-pick-be.herokuapp.com/api/v1/palettes/${paletteId}`, options);
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}

export const postProject = async (newProject) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newProject),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('http://palette-pick-be.herokuapp.com/api/v1/projects', options)
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}

export const deleteProject = async (projectId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`http://palette-pick-be.herokuapp.com/api/v1/projects/${projectId}`, options)
  try {
    return response.json()
  } catch {
    throw Error(response.statusText)
  }
}
