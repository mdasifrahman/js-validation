const fristname = document.getElementById('fristname')
const lastname = document.getElementById('lastname')
const gender  = document.getElementById('gender')
const DoB= document.getElementById('DoB')
const religion = document.getElementById('religion')
const presentaddress = document.getElementById('comment')
const permanentaddress = document.getElementById('comment0')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventlistener ('submit' , (e) =>{

let messages =[]
if (name.value=== '' || fristname.value == null){
	messages.push('fristname is required')
}
if (name.value=== '' || lastname.value == null){
	messages.push('lastname is required')
}
if (name.value=== '' || gender.value == null){
	messages.push('gender is required')
}
if (name.value=== '' || DoB .value == null){
	messages.push('DoB is required')
}
if (name.value=== '' || religion.value == null){
	messages.push('religion is required')
}if (name.value=== '' || presentaddress.value == null){
	messages.push('presentaddress is required')
}if (name.value=== '' || permanentaddress.value == null){
	messages.push('presentaddress is required')
}
if (name.value=== '' || phone.value == null){
	messages.push('phone is required')
}
if (name.value=== '' || email.value == null){
	messages.push('email is required')
}
if (name.value=== '' || username.value == null){
	messages.push('username is required')
}
if (name.value=== '' || password.value == null){
	messages.push('password is required')
}

if(messages.length >0) {
	e.preventDefult()
	errorElement.innerText = messages.join(',')
}

})
