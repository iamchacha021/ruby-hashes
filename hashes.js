let person = {
    name: "John",
    age: 30,
    city: "New York"
  }
//   Object.keys()
console.log(Object.keys(person))
// Object.values()
console.log(Object.values(person))
// .length
console.log(Object.keys(person).length)
// .notation
console.log(person.name)
console.log(person.gender = "unknown")
// the in method to check if a key exists
console.log("name" in person)
console.log("height" in person)
// to check if a value exists in an object
console.log(Object.values(person).includes("New York"))
console.log(Object.values(person).includes("New Yorker"))
// merging two objects using the spread operator
let person1 = {
    name: "John",
    age: 30,
    city: "New York"
  }
  let person2 = {
    name: "Jane",
    gender: "Female"
  }
  person = {...person1, ...person2}
  console.log(person)
