import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { ageCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector('#counter'))

console.log(document.querySelector('#Home'));

document.querySelector('#Home').innerHTML = `
<div class="max-w-lg mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg">
  <h2 class="font-bold text-lg mb-2">Hello</h2>
  <p>This is an example of a block element that looks like it's floating.</p>
</div>
`
document.querySelector('#AboutMe').innerHTML = `
  <div class="max-w-lg mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg">
    <h2 class="font-bold text-lg mb-2">AboutMe</h2>
    <p>
      name: 新井勇大
    </p>

    <p id='age'>
    age:
    <p/>
    <p>出身地：長野市</p>
  </div>
`
ageCounter(document.querySelector('#age'))


document.querySelector('#PortfolioWork').innerHTML = `
  <div class="max-w-lg mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg">
    <h2 class="font-bold text-lg mb-2">PortfolioWork</h2>

`
document.querySelector('#ResumeCV').innerHTML = `
  <div class="max-w-lg mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg">
    <h2 class="font-bold text-lg mb-2">AboutMe</h2>
    <p>
      name: 新井勇大
    </p>

    <p id='age'>
    age:
    <p/>
    <p>This is an example of a block element that looks like it's floating.</p>
  </div>
`

document.querySelector('#Skills').innerHTML = `
  <div class="max-w-lg mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg">
    <h2 class="font-bold text-lg mb-2">Skills</h2>
   </div>

  <p>
   Laravel :2年
   MySql :2年
   docker :自分の開発環境構築できる程度
  </p>
`
