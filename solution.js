function findNextSquare(sq) {
  let root = Math.sqrt(sq)
  return root % 1 === 0 ? (root + 1)*(root + 1) : -1
}

console.log(findNextSquare(121)) // 144
console.log(findNextSquare(155)) // -1