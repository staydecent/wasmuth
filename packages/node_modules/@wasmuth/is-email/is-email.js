const re = '[^\\.\\s@:][^\\s@:]*(?!\\.)@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*'

export default function isEmail (str) {
  return new RegExp(`^${re}$`).test(str)
}
