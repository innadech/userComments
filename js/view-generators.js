function generateLiUser(user) {
  const elLi = document.createElement('li')
  const elDivBSpanI = document.createElement('div')
  const elB = document.createElement('b')
  const elSpan = document.createElement('span')
  const elI = document.createElement('i')
  const elDiv = document.createElement('div')
  const elDivSpan = document.createElement('span')
  const elDivComment = document.createElement('div')
  const elDivCommentP = document.createElement('p')
  const elDivCommentPData = document.createElement('p')

  elLi.classList.add('elLi')
  elDivCommentPData.classList.add('elPData')

  elB.textContent = user.name
  elSpan.textContent = ','
  elI.textContent = user.age
  elDivSpan.textContent = 'написал:'
  elDivCommentP.textContent = user.comment
  elDivCommentPData.textContent = '15 марта 2025'

  elLi.appendChild(elDivBSpanI)
  elDivBSpanI.appendChild(elB)
  elDivBSpanI.appendChild(elSpan)
  elDivBSpanI.appendChild(elI)

  elLi.appendChild(elDiv)
  elDiv.appendChild(elDivSpan)

  elLi.appendChild(elDivComment)
  elDivComment.appendChild(elDivCommentP)
  elDivComment.appendChild(elDivCommentPData)

  return elLi
}
