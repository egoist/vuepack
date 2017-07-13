import './style.scss'

export default {
  name: 'Image',
  props: ['src', 'caption', 'alt', 'fullWidth'],
  render (h) {
    const { src, caption, alt, fullWidth } = this

    return (
      <figure class={'Image' + (fullWidth === true ? ' Image--fullwidth' : '')}>
        <img src={src} alt={alt} class='Image__img' />
        {caption ? <figcaption class='Image__caption'>{caption}</figcaption> : null }
      </figure>
    )
  }
}
