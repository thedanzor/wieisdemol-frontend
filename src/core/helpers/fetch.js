export const post = payload => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }
}

export const get = {
  method: 'GET'
}
