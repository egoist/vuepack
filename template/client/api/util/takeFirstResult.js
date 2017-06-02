export default function takeFirstResult (data) {
  if (data.length) {
    data = data[0]
  } else {
    throw new Error(`Empty result`)
  }
  return data
}
