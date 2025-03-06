function renderFormUser(user) {
  elName.value = user.name
  elAge.value = user.age
  elComment.value = user.comment
}

function renderUlComment(users) {
  const elUl = document.querySelector('#elListComments')
  elUl.innerHTML = ''
  for (const user of users) {
    const elUserComment = generateUserComment(user)
    elUl.appendChild(elUserComment)
  }
}
