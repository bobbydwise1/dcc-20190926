/*
This problem was asked by Google.

You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.

For example, given the following table:

cba
daf
ghi

This is not ordered because of the a in the center. We can remove the second column to make it ordered:

ca
df
gi

So your function should return 1, since we only needed to remove 1 column.

As another example, given the following table:

abcdef

Your function should return 0, since the rows are already ordered (there's only one row).

As another example, given the following table:

zyx
wvu
tsr

Your function should return 3, since we would need to remove all the columns to order it.
*/

const convArr = (yourMatrix) => {
  let copied = JSON.parse(JSON.stringify(yourMatrix)) //Create a simple deep clone of original matrix (Data loss occurs with more complex object references)
  for ( y = 0; y < copied.length; y++ ) {
    for ( x = 0; x < copied[0].length; x++ ) {
      copied[y][x] = copied[y][x].charCodeAt(0)
    }
  }
  return copied
}

const purgeCol = (yourMatrix, col) => {
  if ((col > yourMatrix[0].length - 1)||(col < 0 )) {
    return null
  }
  let copied = JSON.parse(JSON.stringify(yourMatrix))
  for ( y = 0; y < copied.length; y++ ) {
    copied[y].splice(col,1)
  }
  return copied
}

const elimArr = (yourMatrix) => {
  let copied = JSON.parse(JSON.stringify(yourMatrix))
  for ( y = 0; y < yourMatrix.length-1; y++ ) {
    for ( x = 0; x < yourMatrix[0].length-1; x++ ) {
      if (yourMatrix[y][x] > yourMatrix[y+1][x]) {
        console.log(y,x)
        console.log(copied)
        copied = purgeCol(copied,x)
      }
    }
  }
  console.log(copied)
  let count = yourMatrix[0].length-copied[0].length
  return count
}

let test1 = [
  ['c','b','a'],
  ['d','a','f'],
  ['g','h','i'],
]

let test2 = ['a','b','c','d','e','f']

let test3 = [
  ['z','y','x'],
  ['w','v','u'],
  ['t','s','r'],
]



$(document).ready(function() {
  $('#form-1').submit(function(){
    event.preventDefault()
    $('#output-1').text(1)

  })
});
