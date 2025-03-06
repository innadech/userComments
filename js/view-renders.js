function renderFormUser(user) {
  elName.value = user.name
  elAge.value = user.age
  elComment.value = user.comment
}

function renderUlUsers(users) {
  const elUl = document.querySelector('#elListComments')
  elUl.innerHTML = ''
  for (const user of users) {
    const elUserComment = generateLiUser(user)
    elUl.appendChild(elUserComment)
  }
}
