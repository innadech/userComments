function onInputFormUser(e) {
  const userKey = e.target.name
  const userVal = e.target.value
  handleUpdateUser(userKey, userVal)
}
function onClickButtonAddComment() {
  if ((elName.value !== '', elAge.value !== '', elComment.value !== '')) {
    const user = {
      name: elName.value,
      age: +elAge.value,
      comment: elComment.value,
    }
    console.log(user)
    handleAddComment(user)
    elName.value = ''
    elAge.value = ''
    elComment.value = ''
  }
}

elName.oninput = onInputFormUser
elAge.oninput = onInputFormUser
elComment.oninput = onInputFormUser
addButton.onclick = onClickButtonAddComment

handeLoadPage()
