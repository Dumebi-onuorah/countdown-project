const futureDate= new Date('March 10, 2024 12:00:00:00'). getTime();
const x=setInterval(function(){
  const now = new Date(). getTime();
  const diffInMs = futureDate - now;
  const daysLeft = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((diffInMs % (1000 * 60)) / 1000);


 const days = document.querySelector('#days .Day');
 const hours = document.querySelector('#hours .Hour');
 const minutes = document.querySelector('#minutes .Min');
 const seconds = document.querySelector('#seconds .Sec');
  
  const formattedDays = String(daysLeft).padStart(2, '0');
  const formattedHours = String(hoursLeft).padStart(2, '0');
  const formattedMinutes = String(minutesLeft).padStart(2, '0');
  const formattedSeconds = String(secondsLeft).padStart(2, '0');

  days.textContent = formattedDays;
  hours.textContent = formattedHours;
  minutes.textContent = formattedMinutes;
  seconds.textContent = formattedSeconds;

 if (diffInMs<0) {
  clearInterval(x);

  document.getElementById("demo").innerHTML="00:00:00:00"
 }
}, 1000);
document.querySelector("button").addEventListener(
  "click",
  countdownTimestart
)
