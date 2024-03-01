const enterDate = "23 February 3024 01:19 PM";
document.getElementById("enterDate").innerText = enterDate;
const input = document.querySelectorAll("input");
clock = () => {
  const date = new Date(enterDate);
  const currentDate = new Date();
  const remaing = Math.floor(date - currentDate) / 1000;
  if (remaing < 0) return; // this prevent time from going in -

  input[0].value = Math.floor(remaing / 86400) % 30;
  input[1].value = Math.floor(remaing / 3600) % 24;
  input[2].value = Math.floor(remaing / 60) % 60;
  input[3].value = Math.floor(remaing) % 60;
};
setInterval(() => {
  clock();
}, 1000);
