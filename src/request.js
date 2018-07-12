import check from 'check-arg-types'

import map from './map'

const toType = check.prototype.toType

let XMLHttpRequest
let async = true
if (typeof window === 'undefined') {
  (function () {
    XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
    async = false
  })()
}

export default function request ({url, method = 'GET', data = null, headers}) {
  const xhr = new XMLHttpRequest()
  const promise = new Promise((resolve, reject) => {
    xhr.open(method, url, async)
    xhr.onload = () => xhr.status >= 400
      ? reject(xhr.statusText)
      : resolve(safelyParse(xhr.responseText))
    xhr.onerror = () => reject(xhr.statusText)
    xhr.setRequestHeader('Content-Type', 'application/json')
    if (headers && toType(headers) === 'object') {
      map((k, v) => xhr.setRequestHeader(k, v), headers)
    }
    const dataType = toType(data)
    xhr.send(dataType === 'object' || dataType === 'array'
      ? JSON.stringify(data)
      : data)
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
