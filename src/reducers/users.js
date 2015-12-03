const defaultUsers = [
  'EGOIST'
]

export default function (users = defaultUsers, action) {
  switch (action.type) {
    case 'ADD_USER':
      return users.concat([action.name])
    default:
      return users
  }
}
