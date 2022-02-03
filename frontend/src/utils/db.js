const API_ROOT_URL = process.env.API_ROOT_URL || 'http://localhost:3002'

export const saveFile = (file, filename) => {
  var formdata = new FormData()
  formdata.append('name', filename)
  formdata.append('photo', file)

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  }

  return fetch(`${API_ROOT_URL}/images`, requestOptions)
  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.log('error', error))
}
