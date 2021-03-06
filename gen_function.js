function* generate(num) {
  yield 10
  yield 5
  yield num
  yield num + 5
}

const gen = generate(10)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
