export default function slugify (str) {
  return str.toLowerCase().replace(/'/g, '').replace(/\s/g, '-').replace(' ', '')
}
