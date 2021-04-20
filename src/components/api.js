const API_END_POINT = '...'

const request = (nodeId) => {
  // Depends on the presence of nodeId,
  // choose between root directory or specific directory to render
  fetch(`${API_END_POINT}/${nodeId? nodeId : ''}`)
  .then((response) => {
    if (!response.ok) throw new Error('server error occured!')
    return response.json()
  })
  .catch((error) => throw new Error(error.message)
}

// request with async ~ await

