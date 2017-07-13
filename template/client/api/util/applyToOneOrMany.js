export default function applyToOneOrMany (fn, data) {
  if (Array.isArray(data)) {
    data = data.map(fn)
  } else {
    data = fn(data)
  }
  return data
}
