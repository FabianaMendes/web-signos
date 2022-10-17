const form = document.getElementById("form");
const date = document.getElementById("date");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const dateFormatted = new Date(date.value);
  // const year = dateFormatted.getFullYear();
  // const month = (dateFormatted.getMonth()+1).toString().padStart(2, '0');
  // const day = (dateFormatted.getDate()+1).toString().padStart(2, '0');

  const nasc = date.value.toString();
  console.log(nasc);
  console.log(nasc.substr(5, 2))
  console.log(nasc.substr(8, 2))
  const day = Number(nasc.substr(8, 2));
  const month = Number(nasc.substr(5, 2));

  if(day >= 20 && month === 1 || day <= 18 && month === 2) {
    console.log('signo Aquario');
    window.location.href = 'https://www.mapadomeuceu.com.br/blog/signo-de-cada-mes';
  } else {

  }


  console.log(date.value, day, month);
});