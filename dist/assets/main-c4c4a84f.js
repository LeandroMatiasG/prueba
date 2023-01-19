import"./modulepreload-polyfill-ec808ebb.js";function r(e,t){return parseInt(e)+parseInt(t)}function u(e,t,o,l){let n=0;n=r(t,o),e.innerHTML=`Result is ${n}`}const d="/assets/viteLogo-33d4b497.png";document.getElementById("hola").src=d;document.querySelector("#app").innerHTML=`
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
`;document.getElementById("btn").addEventListener("click",()=>{u(document.querySelector("#showRes"),document.getElementById("numero1").value,document.getElementById("numero2").value,document.getElementById("operacion").value)});
