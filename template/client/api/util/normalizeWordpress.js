import applyToOneOrMany from './applyToOneOrMany'

export default function normalizeWordpress (data) {
  return applyToOneOrMany(_normalizeWordpressPost, data)
}

function _normalizeWordpressPost (post) {
  post.title = post.title.rendered
  return post
}
