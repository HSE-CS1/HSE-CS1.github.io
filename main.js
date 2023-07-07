const answer = document.querySelector('#output');

const today = new Date();

function checkDate(today){
  if(today.getDay() === 5){
    answer.innerHTML = "YES!";
  } else {
    answer.innerHTML = "NOPE!";
  }
}


checkDate(today);
