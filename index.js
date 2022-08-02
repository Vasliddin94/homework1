

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


let input2=document.getElementById('flexSwitchCheckDefault1');
  function hide() {
    if (input2.checked) {
      document.getElementById('box1').style.display='none'
    }
    else {
      document.getElementById('box1').style.display='block'
    }
  }

  let button=document.getElementById('flexSwitchCheckDefault1').addEventListener('click',   function hide() {
      if (input2.checked) {
        document.getElementById('box1').style.display='none'
      }
      else {
        document.getElementById('box1').style.display='block'
      }
    })
