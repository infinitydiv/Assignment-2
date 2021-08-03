function setAge(e){
var bday = new Date(Date.parse(e.target.value));
var today = new Date()

document.getElementsByName('age')[0].value = today.getFullYear() - bday.getFullYear();
}
