const form = document.getElementById("form");
const date = document.getElementById("date");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dateToString = date.value.toString();
  const day = Number(dateToString.substr(8, 2));
  const month = Number(dateToString.substr(5, 2));

  if(day >= 20 && month === 1 || day <= 18 && month === 2) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/aquario';
  } else if (day >= 19 && month === 2 || day <= 20 && month === 3) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/peixes';
  } else if (day >= 21 && month === 3 || day <= 20 && month === 4) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/aries';
  } else if (day >= 21 && month === 4 || day <= 20 && month === 5) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/touro';
  } else if (day >= 21 && month === 5 || day <= 20 && month === 6) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/gemeos';
  } else if (day >= 21 && month === 6 || day <= 22 && month === 7) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/cancer';
  } else if (day >= 23 && month === 7 || day <= 22 && month === 8) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/leao';
  } else if (day >= 23 && month === 8 || day <= 22 && month === 9) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/virgem';
  } else if (day >= 23 && month === 9 || day <= 22 && month === 10) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/libra';
  } else if (day >= 23 && month === 10 || day <= 21 && month === 11) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/escorpiao';
  } else if (day >= 22 && month === 11 || day <= 21 && month === 12) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/sagitario';
  } else if (day >= 22 && month === 12 || day <= 19 && month === 1) {
    window.location.href = 'https://www.horoscopovirtual.com.br/horoscopo/capricornio';
  }
});