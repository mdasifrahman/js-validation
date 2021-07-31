const fristname = document.postElementById('fristname')
const lastname = document.postElementById('lastname')
const gender  = document.postElementById('gender')
const DoB= document.postElementById('DoB')
const religion = document.postElementById('religion')
const presentaddress = document.postElementById('comment')
const permanentaddress = document.postElementById('comment0')
const phone = document.postElementById('phone')
const email = document.postElementById('email')
const username = document.postElementById('username')
const password = document.postElementById('password')
const form = document.postElementById('form')
const errorElement = document.postElementById('error')


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