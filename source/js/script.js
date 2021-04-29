// const optionHeaders = document.querySelectorAll('.option__header')

// for (let i=0; i < optionHeaders.length; i++) {
//   const optionHeader = optionHeaders[i]

//   optionHeader.addEventListener('click', function() {
//     optionHeader.parentElement.classList.toggle('option--expanded')
//   })
// }

// const openCountries = document.querySelector('.open-countries')
// const countryFilterModal = document.querySelector('.country-filter__modal')

// openCountries.addEventListener('click', function() {
//   countryFilterModal.classList.toggle('country-filter__modal--open')
// })

// const header = document.querySelector('.main-header')

// window.addEventListener('scroll', function() {
//   console.log("dd")
//     header.classList.add('main-header--scroll')
// })

// const closeCountries = document.querySelector('.close-countries')

// closeCountries.addEventListener('click', function() {
//   countryFilterModal.classList.remove('country-filter__modal--open')
// })

// Бизнес тарифы

const showBusinessRates = document.querySelector('.js-show-business-rates')
const rateModal = document.querySelector('.rate__modal')
const closeBusinessRates = document.querySelector('.js-close-business-rates')


showBusinessRates.addEventListener('click', function() {
  rateModal.classList.add('rate__modal--open')
})

closeBusinessRates.addEventListener('click', function() {
  rateModal.classList.remove('rate__modal--open')
})
