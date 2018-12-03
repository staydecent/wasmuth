export default function partial (fn, args) {
  args = [fn].concat(Array.prototype.slice.call(args))
  return fn.bind.apply(fn, args)
}
