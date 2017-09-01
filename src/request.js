import check from 'check-arg-types'

import map from './map'

const toType = check.prototype.toType

export default function request ({url, method = 'GET', data = null, headers}) {
  const xhr = new window.XMLHttpRequest()
  const promise = new Promise((resolve, reject) => {
    xhr.open(method, url)
    xhr.onload = () => xhr.status >= 400
      ? reject(xhr.statusText)
      : resolve(safelyParse(xhr.responseText))
    xhr.onerror = () => reject(xhr.statusText)
    xhr.setRequestHeader('Content-Type', 'application/json')
    if (headers && toType(headers) === 'object') {
      map((k, v) => xhr.setRequestHeader(k, v), headers)
    }
    xhr.send(toType(data) === 'object' ? JSON.stringify(data) : data)
  })
  return {xhr, promise}
}

function safelyParse (json) {
  try {
    return JSON.parse(json)
  } catch (_) {
    return json
  }
}
