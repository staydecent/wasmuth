import check from 'check-arg-types'

import pathGet from './path'

const toType = check.prototype.toType

// `window` that won't fail server side
export const safeWindow = (path, ...args) => {
  if (typeof window === 'undefined') {
    return
  }
  const ref = pathGet(path, window)
  if (toType(ref) === 'function') {
    return ref.call(
      path.indexOf('localStorage') > -1 ? window.localStorage : window,
      ...args
    )
  } else {
    return ref
  }
}

export default safeWindow