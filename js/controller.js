function handleUpdateUser(userKey, userVal) {
  if (userKey === 'name') setUserName(userVal)
  if (userKey === 'age') setUserAge(+userVal)
  if (userKey === 'comment') setUserComment(userVal)
  renderFormUser(user)
  saveUser(user)
  console.log(user)
}

function handeLoadPage() {
  const user = restoreUser()
  renderFormUser(user)
  // console.log(user)
}
function handleAddComment(user) {
  addUser(user)
  console.log(users)
  renderUlUsers(users)
}

handeLoadPage()
