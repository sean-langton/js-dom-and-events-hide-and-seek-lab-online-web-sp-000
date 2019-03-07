function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const items = document.querySelectorAll('.ranked-list')
  for ( let i = 0, l = items.length; i < l; i++ ) {
    let children = items[ i ].children

    for ( let j = 0, k = children.length; j < k; j++ ) {
      children[ j ].textContent = parseInt( children[ j ].textContent ) + n
    }
  }
}

function deepestChild() {
  let parent = document.querySelector('#grand-node');
  let child = parent.children[0]

  while (child) {
    parent = child
    child = parent.children[0]
  }

  return parent
}
