
import {showResult} from '../ShowResult'
import viteLogo from '../assets/viteLogo.png'

document.querySelector('#app').innerHTML = `
  <div>
    <img src='${viteLogo}' alt='viteLogo'
    <h1>Calculadora1</h1>
    <input type="text" id="numero1" placeholder="inserte numero 1">
    <input type="text" id="numero2" placeholder="inserte numero 2">
    <input type="text" id="operacion" placeholder="inserte la operación">
    <div class="card">
      <button id="btn" type="button">Calcular</button>
    </div>
    <p id="showRes"></p>
  </div>
`
document.getElementById("btn").addEventListener('click', () => {
  showResult(document.querySelector('#showRes'),document.getElementById('numero1').value,document.getElementById('numero2').value,document.getElementById('operacion').value)
}
)