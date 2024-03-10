import './style.css'
// import javascriptLogo from './javascript.svg'
import myPro from './pro.jpg'
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

document.querySelector('#Home').innerHTML = `
<div>
  <h2 class='title'>Welcome to my engineering portfolio site!</h2>
</div>
`
document.querySelector('#AboutMe').innerHTML = `
  <div class=" mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg Headline contentsBlock">
    <h1>AboutMe</h1>
    <p>
      name: 新井勇大
    </p>

    <p id='age'>
    age:
    <p/>
    <p>出身地：長野市</p>
    <p>趣味：筋トレ　サウナ</p>

    <img style='width: 35%; margin-left: 60%;' src="${myPro}" class="logo vanilla HeadlineRight" alt="JavaScript logo" />
  </div>
`
ageCounter(document.querySelector('#age'))


document.querySelector('#PortfolioWork').innerHTML = `
  <div class="mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg Headline contentsBlock">
    <h1>PortfolioWork</h1>
    <p>都内ITベンチャー企業でテスターやテクニカルサポートを経験後、
    地元長野県で販売管理システム、勤怠管理システムなどの業務用システムの開発業務で
    全工程を経験、
    </p>
    `
document.querySelector('#ResumeCV').innerHTML = `
  <div class=" mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg Headline contentsBlock">
    <h1>AboutMe</h1>



    </div>
`

document.querySelector('#Skills').innerHTML = `
<div style="position: relative" class="mx-auto">
  <h1 style="position: absolute">Skills</h1>
  <div style="position: absolute" class="Headline contentsBlock block shadow-lg rounded-lg  mt-5 p-4 bg-white">
    <p>
     Laravel :2年( v5  v6  v9 )
    </p>
    <p>
     MySql :2年
    </p>
    <p>
     docker :自分の開発環境構築できる程度
    </p>
    <p>
     JavaSqript : 2年
    </p>
    <p>
     Vue.js : 学習中(Laravel)
    </p>
    <p>
     React.js : 学習中
    </p>
    <p>
     GitHub
    </p>
  </div>
</div>

   <div style="height: 300px;">
    </div>

`
