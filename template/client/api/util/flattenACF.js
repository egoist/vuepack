import applyToOneOrMany from './applyToOneOrMany'

export default function flattenACF (data) {
  return applyToOneOrMany(_flattenPost, data)
}

function _flattenPost (post) {
  const flatPost = { ...post, ...post.acf }
  return flatPost
}
