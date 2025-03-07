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

function addUser() {
  const createdUser = {
    name: user.name,
    age: user.age,
    comment: user.comment,
  }

  users.push(createdUser)
}

// console.log(users)

// addUser(user)
// console.log(users)

// setUserName('name')
// setUserAge(33)
// setUserComment('comment')
// addUser(user)
// console.log(users)

// setUserName('Inna')
// setUserAge(33)
// setUserComment('hi!!')
// addUser(user)
// console.log(users)

// setUserName('rrrrrr')
// setUserAge(11)
// setUserComment('qweqweqe')
// addUser(user)
// console.log(users)

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
