function handleUpdateUser(userKey, userVal) {
  if (userKey === 'name') setName(userVal)
  if (userKey === 'age') setAge(+userVal)
  if (userKey === 'comment') setComment(userVal)
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
  addUserComment(user)
  console.log(users)
  renderUlComment(users)
}
