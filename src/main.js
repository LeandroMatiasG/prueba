import './style.css'

import {showResult} from './ShowResult'

import imgUrl from './viteLogo.png'
document.getElementById('hola').src = imgUrl

document.querySelector('#app').innerHTML = `
  <div>
   
    <h1>Calculadora</h1>
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