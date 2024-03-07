const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.searchBtn')
const foodContainer = document.querySelector('.food-container')


//function to get foods
const fetchFoods = async (query) => {
  foodContainer.innerHTML = '<h2>Fetching Foods...</h2>'
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  const data = await response.json()

  foodContainer.innerHTML = "";
  data.meals.forEach(meal => {
    const foodDiv = document.createElement('div')
    foodDiv.classList.add('food')
    foodDiv.innerHTML = `
    <img src='${meal.strMealThumb}'>
    <h3>${meal.strMeal}</h3>
    <p><span>${meal.strArea}</span>Dish</p>
    <p>Belongs to <span>${meal.strCategory}</span>Category</p>
    `
    const button = document.createElement('button');
    button.textContent = 'view Food';
    foodDiv.append(button)
    foodContainer.append(foodDiv)
  })
}

searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const searchInput = searchBox.value.trim()
  fetchFoods(searchInput)
})