let id = document.getElementById("id").value;
let fullname = document.getElementById("name").value;
let ext = document.getElementById("ext").value;
let email = document.getElementById("email").value;
let department = document.getElementById("deparment").value;
let myForm = document.getElementById("empForm");

// let btn = document.getElementById("submitButton");

myForm.addEventListener("submit", () => {
  e.preventDefault();
  console.log("ID: " + id);
  console.log("Name: " + fullname);
  console.log("Extension: " + ext);
  console.log("Email: " + email);
  console.log("Deparment: " + department);
});
