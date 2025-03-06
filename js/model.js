const user = {
  name: '',
  age: 0,
  comment: '',
}

function setName(name) {
  user.name = name
}

function setAge(age) {
  user.age = age
}

function setComment(comment) {
  user.comment = comment
}
const users = []

function addUserComment(user) {
  if (!users.includes(user)) {
    return users.push(user)
  }
}

// function addListNickname() {
//   if (!nicknames.includes(currentNickname)) {
//     nicknames.push(currentNickname)
//     return true
//   } else {
//     return false
//   }
// }

// addUserComment({
//   name: 'ivan',
//   age: 16,
//   comment: 'oooo',
// })
// addUserComment({
//   name: 'ivan',
//   age: 16,
//   comment: 'oooo',
// })
// const nlll = addUserComment({
//   name: 'ivan',
//   age: 16,
//   comment: 'oooo',
// })
// nlll
