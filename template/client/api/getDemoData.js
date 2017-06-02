// import axios from 'axios'
// import CONFIG from '../config.js'
//
// export default function getArtists () {
//   return axios.get(`${CONFIG.API_URL}/wp/v2/artists?per_page=100`, {
//     transformResponse: [].concat(
//       axios.defaults.transformResponse
//       // transformDataHoweverYouWant
//     )
//   })
// }

export default function getDemoData () {
  return new Promise((resolve) => resolve({
    text: 'Lorem Ipsum',
    number: 1
  }))
}
