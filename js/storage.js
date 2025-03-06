function saveUser(user) {
  const stringifiedUser = JSON.stringify(user)
  localStorage.setItem('user', stringifiedUser)
}

function restoreUser() {
  const userJson = localStorage.getItem('user')
  const user = JSON.parse(userJson)
  return user
}
