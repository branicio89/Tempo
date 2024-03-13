
const key = "b572590444cd6b4cba9eaab2e8f51bbd"

function ColocarDados(dados){
   console.log(dados)
   document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C" // math.floor arredonda um valor
   document.querySelector(".txt-previsao").innerHTML = dados.weather[0].description
   document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
   document.querySelector(".previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarcidade(cidade){  // funcão assincrona para acessar servidor

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    ColocarDados(dados)
}

function CliqueiBotao(){
    
    const cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
    
} 



