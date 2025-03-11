function saveUser(user) {
  const stringifiedUser = JSON.stringify(user)
  localStorage.setItem('user', stringifiedUser)
}

function restoreUser() {
  const userJson = localStorage.getItem('user')
  const user = JSON.parse(userJson)
  return user
}
function saveUsers() {
  const stringifiedUsers = JSON.stringify(users)
  localStorage.setItem('users', stringifiedUsers)
}
function restoreUsers() {
  const usersJson = localStorage.getItem('users')
  const users = JSON.parse(usersJson)
  return users
}
