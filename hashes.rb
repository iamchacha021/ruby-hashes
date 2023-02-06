person = {
  name: "John",
  age: 30,
  city: "New York"
}
# .keys
puts person.keys()
# .values
puts person.values()
# .length / .size
puts person.length()
# .fetch()
puts person.fetch(:name)
puts person.fetch(:gender, "Unknown") 
#  .key?
puts person.key?(:name)
puts person.key?(:gender)
# .has_value? or .value?
puts person.has_value?("John") 
puts person.value?("Jane") 
# .merge()
person1 = {
    name: "John",
    age: 30,
    city: "New York"
  }
  person2 = {
    name: "Jane",
    gender: "Female"
  }
  person = person1.merge(person2)
  puts person
  