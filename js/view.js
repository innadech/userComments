function onInputFormUser(e) {
  const userKey = e.target.name
  const userVal = e.target.value
  handleUpdateUser(userKey, userVal)
}

function onClickButtonAddUser() {
  if (elName.value && elAge.value && elComment.value) {
    const user = {
      name: elName.value,
      age: +elAge.value,
      comment: elComment.value,
    }

    handleAddUser(user)
    elName.value = ''
    elAge.value = ''
    elComment.value = ''
  }
}

elName.oninput = onInputFormUser
elAge.oninput = onInputFormUser
elComment.oninput = onInputFormUser
elButtonAdd.onclick = onClickButtonAddUser
