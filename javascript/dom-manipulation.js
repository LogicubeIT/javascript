// accessing the DOM elements from our linked HTML file.
// document key word refers to the linked html file.
// syntax for accessing DOM elements: document.[querySelector]
// 3 ways (query selectors) to access DOM elements : 1. by id 2. by name 3. by tagName 4. by class


// 1. by id 
// use case : whenever you want to select one of a kind element or unique.
const element = document.getElementById('heading-1').innerText
console.log(element)

