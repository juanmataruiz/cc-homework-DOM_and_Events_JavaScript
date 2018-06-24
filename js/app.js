document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const animalList = document.querySelector('#animal-list')
  const form = document.querySelector('#new_item_form')

  const handleFormSave = function(event) {
    event.preventDefault();
    const form = event.target;
    const species = form.species.value;
    const numbers = form.numbers.value;
    const continent = form.continent.value;

    const result = document.querySelector('#animal-list');

    const paragraph = document.createElement('div');
    paragraph.textContent = `Species: ${species}, Numbers left: ${numbers}, Continent: ${continent}`
    result.appendChild(paragraph);

    form.reset()
  }

  form.addEventListener('submit', handleFormSave)


});
