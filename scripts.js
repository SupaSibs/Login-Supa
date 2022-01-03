"use strict";
const inputs = document.querySelectorAll(".inputs");
const errors = document.querySelectorAll(".error");
const submit = document.querySelector("#submit");
submit.addEventListener("click", validate.bind(globalThis, inputs));
function validate(inparray) {
for (const element of inparray) {
switch (true) {
case (element.value === inparray[0].value && element.value === ""):
errors[0].style.display = "block";
case (element.value === inparray[1].value && element.value === ""):
errors[1].style.display = "block";
case (element.value === inparray[2].value && element.value === ""):
errors[2].style.display = "block";
case (element.value === inparray[3].value && element.value === ""):
errors[3].style.display = "block";
break;
default:
validateEmail(inparray[2].value);
break;
} } }
function validateEmail(email) {
let atCount = 0;
for (const letter of inparray) {
if (letter = "@") {
atCount++; 
} }
if (atCount !== 1) {
errors[2].style.display = "block";
} }
