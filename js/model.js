const users = []
const user = {
  name: '',
  age: 0,
  comment: '',
}

function setUserName(name) {
  user.name = name
}

function setUserAge(age) {
  user.age = age
}

function setUserComment(comment) {
  user.comment = comment
}

function addUser(user) {
  if (!users.includes(user)) {
    return users.push(user)
  }
}

console.log(users)

addUser(user)
console.log(users)

addUser(user)
console.log(users)

setUserName('name')
setUserAge(33)
setUserComment('comment')
addUser(user)
console.log(users)

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
