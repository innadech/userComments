function handleUpdateUser(userKey, userVal) {
  if (userKey === 'name') setUserName(userVal)
  if (userKey === 'age') setUserAge(+userVal)
  if (userKey === 'comment') setUserComment(userVal)
  renderFormUser(user)
  saveUser(user)
}

function handeLoadPage() {
  const user = restoreUser()
  renderFormUser(user)
}

function handleAddUser(user) {
  addUser(user)
  renderUlUsers(users)
}

handeLoadPage()
