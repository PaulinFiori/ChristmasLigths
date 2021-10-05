import './Controlador.css';

function Controlador() {
    document.title = "Christmas Lights";

    const circulo = document.getElementsByClassName('circulo');
    const IniciarBotao = document.getElementById('IniciarBotao');
    const PararBotao = document.getElementById('PararBotao');
    const Velocidade = document.getElementById('VelocidadeoBotao');
    var tamanho = circulo.length;

    function Iniciar(){
        for (var i = 0; i < tamanho; i++) {
            circulo[i].removeAttribute("style");
            circulo[i].style.animationPlayState = "running";
        }
    }

    function Parar(){
        for (var i = 0; i < tamanho; i++) {
            circulo[i].style.animation = "none";
            circulo[i].style.background = "#563260";
        }
    }

    function MudarIntensidade(){
        var velocidade = document.getElementById('VelocidadeInput').value;

        for (var i = 0; i < tamanho; i++) {
            circulo[i].style.animationDuration = velocidade + "s";
        }
    }

  return (
    <div className="Controlador">
      <header className="Controlador-header">
          <h1>Christmas Lights</h1>
          <div id="circulos">
          <div className="circulo vermelho"></div>
          <div className="circulo laranja"></div>
          <div className="circulo amarelo"></div>
          <div className="circulo verde"></div>
          <div className="circulo azul-claro"></div>
          <div className="circulo azul-escuro"></div>
          <div className="circulo roxo"></div>
          </div>
          <div id="inputs">
              <button id="IniciarBotao" onClick={Iniciar}>Iniciar</button>
              <button id="PararBotao" onClick={Parar}>Parar</button>
              <label for="">Velocidade:</label>
              <input type="number" id="VelocidadeInput" min="1" max="5" placeholder="1 ao 5"></input>
              <button id="VelocidadeoBotao" onClick={MudarIntensidade}>Definir</button>
          </div>
      </header>
    </div>
  );
}

export default Controlador;