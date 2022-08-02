

let input=document.getElementById('flexSwitchCheckDefault');

function change() {
  if (input.checked) {
    document.getElementById('label').style.color='black'
    document.getElementById('body').style.backgroundColor='#ffffff';
  }
  else {
    document.getElementById('body').style.backgroundColor='black';
    label.style.color='#ffffff'
  }
}
