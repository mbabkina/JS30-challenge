const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentYear = new Date().getFullYear()

const isSome19 = people.some((person) => currentYear - person.year >= 19)

console.log(`Is anyone 19 or older? Answer: ${isSome19 ? 'yes' : 'no'}`)

// Array.prototype.every() // is everyone 19 or older?
const isEveryone19 = people.every((person) => currentYear - person.year >= 19)

console.log(`Is everyone 19 or older? Answer: ${isEveryone19 ? 'yes' : 'no'}`)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const id = 823423
const comment = comments.find((com) => com.id === id)
console.log(`The comment with the index ${id} is "${comment.text}"`)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex((com) => com.id === id)
comments.splice(commentIndex, 1)
console.log(comments)
