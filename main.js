import './style.css'
// import javascriptLogo from './javascript.svg'
import myPro from './pro.jpg'
import sklls from './skills.jpg'
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
  <h2 class='title fade-in-from-top'>Welcome to my engineering portfolio site!</h2>
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
    <p>出身地：長野県 長野市</p>
    <p>趣味：筋トレ　サウナ</p>

    <img style='width: 35%; margin-left: 60%; margin-top: -10%;' src="${myPro}" class="logo vanilla" alt="JavaScript logo" />
  </div>
`
ageCounter(document.querySelector('#age'))


document.querySelector('#PortfolioWork').innerHTML = `
  <div class="mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg Headline contentsBlock">
    <h1>PortfolioWork</h1>
    <p>22歳の時、未経験で都内ITベンチャー企業でセキュリティ会社のスマートフォンアプリのテスターや<br>
    医療用システム、一般住宅のWi-Fiシステムのテクニカルサポートを経験、<br>
    現在は地元長野県の企業でLaravelをメインとした販売管理システムの受託開発と保守運用、自社用の勤怠管理システムの開発など、<br>
    業務用システムの開発に従事しております。
    </p>
    `
document.querySelector('#ResumeCV').innerHTML = `
  <div class=" mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg Headline contentsBlock">
    <h1>Resume / CV</h1>



    </div>
`

document.querySelector('#Skills').innerHTML = `
<div class=" mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg Headline contentsBlock bg-opacity-25 skills" style="overflow: hidden;border-width: 0;">


<div style="z-index: 99;">
<h1 style="">Skills</h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
  <!-- グリッドアイテム1 -->
  <div class=" p-4" style='z-index: 99;'>
    <div style='display: flex; margin-bottom: 14px;'>
      <p style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
        Laravel
      </p>
      <p style="margin-top: 10px;">
        &nbsp;:2年( v5  v6  v9 )
      </p>
    </div>
    <div style='display: flex; margin-bottom: 14px;'>
      <p style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
        Vue.js
      </p>
      <p style="margin-top: 0px;">
        &nbsp;:少し(Laravel vue <br>&nbsp;&nbsp; Inertia viteで使用)
      </p>
    </div>
    <div style='display: flex; margin-bottom: 14px; margin-top: -12px;'>
      <p style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px;  height:50px;">
        React.js
      </p>
      <p style="margin-top: 10px;">
        &nbsp;:少し
      </p>
    </div>





  </div>
  <!-- グリッドアイテム2 -->
  <div class=" p-4" style='z-index: 99;'>

    <div style='display: flex; margin-bottom: 14px;'>
      <p style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px;  height:50px;">
        MYSQL
      </p>
      <p style="margin-top: 10px;">
        &nbsp;:2年
      </p>
    </div>
    <div style='display: flex; margin-bottom: 14px;'>
      <p style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
      Docker
      </p>
      <p style="margin-top: 0px;">
        &nbsp;:開発環境構築<br>&nbsp;&nbsp;できる程度
      </p>
    </div>


    <div style='display: flex; margin-bottom: 14px; margin-top: -12px;'>
      <p style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
      XAMMP
      </p>
      <p style="margin-top: 10px;">
        &nbsp;:2年
      </p>
    </div>





  </div>
  <!-- グリッドアイテム3 -->
  <div class="p-4" style='z-index: 99;'>
    <div style='display: flex; margin-bottom: 14px;'>
    <p style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
      JaveScript
    </p>
    <p style="margin-top: 10px;">
      &nbsp;:2年
    </p>
  </div>

  <div style='display: flex; margin-bottom: 14px;'>
    <p style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px;">
     Git
    </p>
    <p  style="margin-top: 10px;">
      &nbsp;:2年( Hub Lab )
    </p>
  </div>




  </div>
</div>
<img style='opacity: 0.2; z-index:0; background-size: cover; margin-top: -600px; width: 620%; height: auto;' src="${sklls}" class="logo vanilla" alt="JavaScript logo" />
</div>


   <div style="height: 300px;">
    </div>

`


document.querySelector('#Contact').innerHTML = `
<section class="text-gray-600 body-font relative" _msthidden="8">
  <div class="container px-5 py-24 mx-auto" _msthidden="8">
    <div class="flex flex-col text-center w-full mb-12" _msthidden="2">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" _msttexthash="132405" _msthidden="1" _msthash="146">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base" _msttexthash="3498859" _msthidden="1" _msthash="147">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto" _msthidden="6">
      <div class="flex flex-wrap -m-2" _msthidden="6">
        <div class="p-2 w-1/2" _msthidden="1">
          <div class="relative" _msthidden="1">
            <label for="name" class="leading-7 text-sm text-gray-600" _msttexthash="43069" _msthidden="1" _msthash="148">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-1/2" _msthidden="1">
          <div class="relative" _msthidden="1">
            <label for="email" class="leading-7 text-sm text-gray-600" _msttexthash="58058" _msthidden="1" _msthash="149">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-full" _msthidden="1">
          <div class="relative" _msthidden="1">
            <label for="message" class="leading-7 text-sm text-gray-600" _msttexthash="92924" _msthidden="1" _msthash="150">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full" _msthidden="1">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" _msttexthash="79859" _msthidden="1" _msthash="151">Button</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center" _msthidden="2">
          <a class="text-indigo-500" _msttexthash="327145" _msthidden="1" _msthash="152">example@email.com</a>
          <p class="leading-normal my-5" _msttexthash="596453" _msthidden="1" _msthash="153">49 Smith St.
            <br>Saint Cloud, MN 56301
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
`