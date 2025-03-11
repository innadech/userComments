function handleUpdateUser(userKey, userVal) {
  if (userKey === 'name') setUserName(userVal)
  if (userKey === 'age') setUserAge(+userVal)
  if (userKey === 'comment') setUserComment(userVal)
  renderFormUser(user)
  saveUser(user)
}

function handeLoadPage() {
  const user = restoreUser()
  const name = user.name
  const age = user.age
  const comment = user.comment
  console.log(name)
  setUserName(name)
  setUserAge(age)
  setUserComment(comment)
  renderFormUser(user)
  const users = restoreUsers()
  renderUlUsers(users)
}

function handleAddUser(user) {
  console.log(user)
  addUser(user)
  renderUlUsers(users)
  user
  saveUsers()
}

handeLoadPage()
