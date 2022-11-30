const prevBtn = document.getElementById('section2__nav-prev')
const nextBtn = document.getElementById('section2__nav-next')
const city = document.querySelector('.section2__details-city')
const area = document.querySelector('.section2__details-area')
const cost = document.querySelector('.section2__details-cost')
const time = document.querySelector('.section2__details-time')
const img = document.querySelector('.section2__img-block')
const icons = document.querySelector('.section2__nav-icons')
const view = document.querySelectorAll('.section2__view-item')
console.log(view);
let index = 0

const ENTITIES = [
  {
    city: `Rostov-on-Don<br>LCD admiral`,
    area: `81 m<sup>2</sup>`,
    time: '3.5 months',
    cost: 'Upon request',
    img: 'url(../img/section-2_1.png)',
    icon: `
      <rect x="55.1639" y="0.456543" width="9.56667" height="9.56667" rx="4.78333" fill="white" fill-opacity="0.3"/>
      <rect x="28.0583" y="0.456543" width="9.56667" height="9.56667" rx="4.78333" fill="white" fill-opacity="0.3"/>
      <rect x="0.952759" y="0.456299" width="9.56667" height="9.56667" rx="4.78333" fill="white"/>`
  },
    {
    city: `Sochi<br>Thieves`,
    area: `105 m<sup>2</sup>`,
    time: '4 months',
    cost: 'Upon request',
    img: 'url(../img/section-2_2.png)',
    icon: `
      <rect x="55.1639" y="0.456543" width="9.56667" height="9.56667" rx="4.78333" fill="white" fill-opacity="0.3"/>
      <rect x="28.0583" y="0.456543" width="9.56667" height="9.56667" rx="4.78333" fill="white"/>
      <rect x="0.952759" y="0.456299" width="9.56667" height="9.56667" rx="4.78333" fill="white" fill-opacity="0.3"/>`
  },
    {
    city: `Rostov-on-Don<br>Patriotic`,
    area: `93 m<sup>2</sup>`,
    time: '3 months',
    cost: 'Upon request',
    img: 'url(../img/section-2_3.png)',
    icon: `
      <rect x="55.1639" y="0.456543" width="9.56667" height="9.56667" rx="4.78333" fill="white"/>
      <rect x="28.0583" y="0.456543" width="9.56667" height="9.56667" rx="4.78333" fill="white" fill-opacity="0.3"/>
      <rect x="0.952759" y="0.456299" width="9.56667" height="9.56667" rx="4.78333" fill="white" fill-opacity="0.3"/>`
  }
]

function flipping(el) {
  view[el].classList.add('active')
  const obj = ENTITIES[el]
  city.innerHTML = obj.city
  area.innerHTML = obj.area
  cost.innerHTML = obj.cost
  time.innerHTML = obj.time
  img.style.backgroundImage = obj.img
  icons.innerHTML = obj.icon
}

prevBtn.addEventListener('click', () => {
  view[index].classList.remove('active')
  index--
  if (index < 0) index = ENTITIES.length - 1
  flipping(index)
})

nextBtn.addEventListener('click', () => {
  view[index].classList.remove('active')
  index++
  if (index === ENTITIES.length) index = 0
  flipping(index)
})