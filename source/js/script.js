const optionHeaders = document.querySelectorAll('.option__header')

for (let i = 0; i < optionHeaders.length; i++) {
  const optionHeader = optionHeaders[i]

  optionHeader.addEventListener('click', function () {
    optionHeader.parentElement.classList.toggle('option--expanded')
  })
}

// const openCountries = document.querySelector('.open-countries')


// if (openCountries && countryFilterModal) {
//   openCountries.addEventListener('click', function () {
//     countryFilterModal.classList.toggle('country-filter__modal--open')
//   })
// }

const countryToggler = document.querySelector('.country-toggler')
const countryFilterModal = document.querySelector('.country-filter__modal')


if (countryToggler && countryFilterModal) {
  countryToggler.addEventListener('click', function () {
    countryFilterModal.classList.toggle('country-filter__modal--open')
  })
}

if(countryToggler) {
  countryToggler.addEventListener('click', function () {
    countryToggler.classList.toggle('country-toggler--opened')
  })
}

const header = document.querySelector('.main-header')

// window.addEventListener('scroll', function () {
//   console.log("dd")
//   header.classList.add('main-header--scroll')
// })

const closeCountries = document.querySelector('.close-countries')

if(closeCountries){
  closeCountries.addEventListener('click', function () {
    countryFilterModal.classList.remove('country-filter__modal--open')
  })
}

// Бизнес тарифы

const showBusinessRates = document.querySelector('.js-show-business-rates')
const rateModal = document.querySelector('.rate__modal')
const closeBusinessRates = document.querySelector('.js-close-business-rates')

if(showBusinessRates && rateModal && closeBusinessRates) {

  showBusinessRates.addEventListener('click', function () {
    rateModal.classList.add('rate__modal--open')
  })

  closeBusinessRates.addEventListener('click', function () {
    rateModal.classList.remove('rate__modal--open')
  })
}

// Меню навигации

const navToggler = document.querySelector('.toggle')


navToggler.addEventListener('click', function () {
  header.classList.toggle('main-header--open')
})

const choseCountry = document.querySelector('.chose-country')
const countriesWrapper = document.querySelector('.countries-wrapper')

if(choseCountry && countriesWrapper) {
  choseCountry.addEventListener('click', function() {
    countriesWrapper.classList.toggle('countries-wrapper--open')
  })
}
