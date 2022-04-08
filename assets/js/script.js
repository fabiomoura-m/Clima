document.querySelector('.busca').addEventListener('submit', async event => {
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;

  if (input !== '') {
    showWarning('Carregando...');

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=e95dc6cf975b104382086af23b711e98&units=metric&lang=pt_br`;

    let results = await fetch(url);
    let json = await results.json();
    console.log(json);
  }
});

function showWarning(message) {
  document.querySelector('.aviso').innerHTML = message;
}
