/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let parsetime = parseInt(time.split(":")[0]);
  if(parsetime < 12)
    return "Good Morning";
  else if(parsetime > 12 && parsetime < 17)
    return "Good Afternoon";
  else if(parsetime > 17)
    return "Good Evening";
}

function displayMessage(message){
  document.getElementById('greeting').innerText = message
}
