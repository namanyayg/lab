/** Lovingly Handcrafted by Namanyay Goel */

function $(el, ancestor = document) {
  return ancestor.querySelector(el)
}

function $$(el) {
  return document.querySelectorAll(el)
}

window.addEventListener('load', function () {
  // Set the created at date and age for each creation
  const $creations = [...$$('.creation')]
  for (let $creation of $creations) {
    const createdAtString = $('.creation__date-and-age', $creation).getAttribute('data-created-at')
    const createdAt = new Date(createdAtString)
    const dateOfBirth = new Date('1998-07-16')
    // compute age
    let age = createdAt.getFullYear() - dateOfBirth.getFullYear()
    const monthDiff = createdAt.getMonth() - dateOfBirth.getMonth()
    if (monthDiff <= 0) {
      age--
    }
    // set formatted age and created at
    $('.date', $creation).textContent = createdAt.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })
    $('.age', $creation).textContent = age
  }
});