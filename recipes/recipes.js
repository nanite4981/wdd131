const recipes = [
	{
		author: 'Provo High Culinary Students',
		url: '',
		isBasedOn: '',
		cookTime: '30 Min',
		datePublished: '2016-10-16',
		tags: ['Waffles', 'Sweet Potato', 'Side'],
		description: 'Savory waffles made with Sweet potato with a hint of Ginger',
		image: './images/sweet-potato-waffle-md.jpg',
		recipeIngredient: [
			'2 separated eggs',
			'1/4 C Oil',
			'1/4 tsp salt',
			'1/4 tsp Cayenne pepper',
			'3/4 C milk',
			'1 Tbsp Brown Sugar',
			'2 tsp Shredded Ginger',
			'3/4 C Mashed Sweet Potatoes',
			'1 Tbsp Minced Shallots',
			'1 Tbsp Baking Powder',
			'1 Tbsp Chives',
			'1/4 C Cornmeal',
			'1 C Flour'
		],
		name: 'Sweet Potato Waffles',
		prepTime: '30 Min',
		recipeInstructions: [
			'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
			'Next add the cornmeal, chives, and flour and baking powder',
			'Whip the egg whites until stiff and fold in',
			'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
		],
		recipeYield: '6 waffles',
		rating: 4
	},
	{
		author: 'Shane Thompson',
		url: '',
		isBasedOn: '',
		cookTime: '20 min',
		datePublished: '',
		tags: ['Chicken', 'Entree'],
		description:
			'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
		image: './images/escalopes-de-poulet-a-la-creme.webp',
		recipeIngredient: [
			'2 Chicken Tenders, Cubed',
			'4 Mushrooms, Sliced',
			'1/2 C Whipping Cream',
			'1-2 Tbsp Stone Ground Mustard',
			'1 tsp Lemon Juice',
			'Salt and Pepper to taste',
			'1 C Rice, uncooked',
			'4-5 oz Fresh Green Beans'
		],
		name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
		prepTime: '10 min',
		recipeInstructions: [
			'Add 1 1/2 cups of water to a pan and bring to a boil.  Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.',
			'Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through. (10 minutes). ',
			'Pour in cream, mustard and salt and pepper.  Stir.  On medium heat, simmer until it thickens (5 minutes)',
			'While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2in lengths.  In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes)',
			'Serve sauce over rice, with the Green beans on the side.'
		],
		recipeYield: '3 servings',
		rating: 4.5
	},
	{
		author: 'Shane Thompson',
		url: '',
		isBasedOn: '',
		cookTime: '30 min',
		datePublished: '2018-09-19',
		tags: ['Potatoes', 'side'],
		description:
			'Easy and delicious oven roasted potatoes that go great with almost anything.',
		image: './images/roasted-potatoes.webp',
		recipeIngredient: [
			'3-4 Medium Potatoes',
			'1 Tbsp Olive oil',
			'2 tsp Italian Seasoning',
			'1/2 tsp Salt',
			'1/2 tsp Ground Black Pepper',
			'1-2 tsp Hot Sauce (optional)'
		],
		name: 'Oven Roasted potato slices',
		prepTime: '10 min',
		recipeInstructions: [
			'Preheat oven to 400 deg F',
			'Wash and thinly slice the potatoes (I usually slice the potato in half lengthwise, then thinly slice the halves, again lengthwise)',
			'Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.',
			'Toss the potatoes in the spice mixture to evenly coat then spead over a baking sheet',
			'Bake for 30 min or until the desired level of crispyness is achieved.'
		],
		recipeYield: '',
		rating: 4
	},
	{
		author: 'Shane Thompson',
		url: '',
		isBasedOn: '',
		cookTime: '20 min',
		datePublished: '2018-09-19',
		tags: ['Southwest', 'entree'],
		description:
			'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
		image: './images/black-beans-and-rice.jpg',
		recipeIngredient: [
			'1 Medium Onion, diced',
			'2 Cloves Garlic, minced',
			'1 Tbsp Olive oil',
			'1 Can Black Beans (15oz)',
			'1 Can Diced Tomatoes (15oz)',
			'1/8 tsp Cayenne Pepper (optional)',
			'2 C Brown Rice (uncooked)',
			'Grated Cheese',
			'Tortilla Chips'
		],
		name: 'Black Beans and Rice',
		prepTime: '10 min',
		recipeInstructions: [
			'Add 4 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (20-30 minutes)',
			'In another saucepan heat the oil and add the diced onion and garlic. Cook until tender.',
			'Stir in the drained Black beans, Undrained tomatoes, and Cayenne.',
			'Bring to a boil, then reduce heat and simmer uncovered for 15 min.',
			'Serve over rice, topped with grated cheese and Tortilla chips.'
		],
		recipeYield: '4 servings',
		rating: 3
	},
	{
		author: 'Shane Thompson',
		url: '',
		isBasedOn: '',
		cookTime: '30 min',
		datePublished: '2018-09-19',
		tags: ['chicken', 'entree', 'Indian'],
		description:
			'Quick and easy Chicken curry recipe made with easy to find ingredients.',
		image: './images/chicken-curry.webp',
		recipeIngredient: [
			'4 Slices Bacon',
			'1 clove Garlic',
			'2 Tbsp Flour',
			'1 C water',
			'1 C Milk',
			'3 Tbsp Tomato Paste',
			'1/2 C Apple Sauce',
			'3-4 tsp Curry Powder',
			'2 tsp Chicken Bouillion',
			'3/4 C Sour Cream',
			'1-2 C Chicken, cubed',
			'2 C Rice, uncooked'
		],
		name: 'Chicken Curry',
		prepTime: '10 min',
		recipeInstructions: [
			'Add 3 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (15-20 minutes)',
			'Cook bacon until crisp, drain reserving 1 Tbsp of bacon drippings, crumble bacon and set aside.',
			'Cook Chicken and Cube.',
			'Blend flour into bacon drippings then stir in the milk until the flour is well mixed. Stir in water, applesauce, tomato paste, curry, and bullion, and garlic.',
			'Bring to a boil, then reduce heat and simmer until rice is done.',
			'Before serving add crumbled bacon, chicken and stir in sour cream. Serve over rice.',
			'Can add condiments if desired: fried potatoes, raisins, toasted coconut, chutney, diced peppers, almonds, cashews.'
		],
		recipeYield: '5 servings',
		rating: 5
	},
	{
		author: 'Shane Thompson',
		url: '',
		isBasedOn: '',
		cookTime: '11 min',
		datePublished: '2018-09-19',
		tags: ['dessert'],
		description: 'Delicious soft chocolate chip cookies with coconut.',
		image: './images/chocolate-chip-cookies.jpg',
		recipeIngredient: [
			'1 Lb butter, softened',
			'1 C white sugar',
			'3 Eggs',
			'1 1/2 C Brown sugar',
			'1 tsp Baking soda',
			'1 tsp Vanilla extract',
			'1/4 tsp Salt',
			'5 C Flour (We like mixing 2 cups whole wheat with 3 cups white)',
			'2 C Chocolate Chips',
			'1 C Shredded Coconut'
		],
		name: 'Chocolate Chip Cookies',
		prepTime: '15 min',
		recipeInstructions: [
			'Preheat oven to 350F.',
			'Cream butter, white sugar, and eggs together.',
			'Add brown sugar, salt, baking soda, and vanilla. Mix well.',
			'Add flour, chocolate chips, and coconut. Mix well.',
			'Place on baking sheet in rows of 1-1.5 inch balls of dough.',
			'Bake for 11-12 minutes.'
		],
		recipeYield: '8 dozen',
		rating: 5
	},
	{
		author: 'Ester Kocht',
		url: 'https://www.esterkocht.com/german-gooseberry-cake-with-vanilla-cream-and-crumble/',
		isBasedOn: '',
		cookTime: '45min',
		datePublished: '2023-10-10',
		tags: ['dessert', 'German'],
		description:
			"This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet. Made up of a cake base, filled with fresh gooseberries and vanilla cream and finished off with crumble that's flavored with vanilla. A must have recipe for gooseberry lovers!!",
		image: './images/german-gooseberry-cake.jpg',
		recipeIngredient: [
			'For the Cake Base:',
			'180 g (1 ½ cups/ 6.3 oz) plain flour',
			'2 medium eggs',
			'100 g (3 ½ oz) butter soft',
			'2 teaspoons vanilla sugar',
			'60 g (about 1/3 cup/ 2.1 oz) sugar',
			'2 ½ teaspoons baking powder',
			'For the Vanilla Cream:',
			'250 ml (1 cup/ 8 ½ fl. oz) milk',
			'40 (⅓ cup/ 1.4 oz) corn flour cornstarch',
			'2 tablespoons sugar',
			'1 tablespoon vanilla sugar',
			'200 g (7.1 oz) sour cream',
			'For the struesel (crumble):',
			'250 g (2 cups + 1 tablespoon/ 8.8 oz) plain flour (all purpose flour)',
			'2 tablespoons vanilla sugar',
			'175 g (about ¾ cup/ 6.2 oz) butter soft',
			'100 g (½ cup/ 3 ½ oz) sugar',
			'You will also need:',
			'550 g (1.2 lbs) gooseberries washed and stems and brown appendage removed OR',
			'550 g (1.2 lbs) raspberries'
		],
		name: 'Gooseberry cake with vanilla cream and crumble',
		prepTime: '30 min',
		recipeInstructions: [
			'Combine the flour, butter, sugar and eggs in a bowl and beat with a whisk until you have a smooth dough. Transfer the batter to a 26 cm(10 inch) spring-form (or cake tin with removable base) lined with a parchment paper at the bottom and greased on the side. Smooth with a spoon or spatula and set aside.',
			"In the same bowl that you've used to make the cake base combine sugar, butter and flour. Using your hands mix all the ingredients together until small crumbles start to form. Set aside as well. Then preheat the oven to 180 ° C (356 °F), with both top and bottom heat.",
			'Now in a small pot combine milk, sugar and cornstarch (corn flour). Keep stirring constantly until it starts to bubble and has thickened. Remove from the heat and let cool for 2 to 3 minutes. In the meantime scatter gooseberries over the base. Add sour cream to the cream that you previously made and whisk. Spread the vanilla cream on top of the gooseberries and sprinkle the crumble evenly over the top and bake for 45 minutes or until the crumbles are lightly golden brown. Remove from the oven and let cool for few minutes. Serve it with whipped cream and enjoy!'
		],
		recipeYield: '12 servings',
		rating: 5
	},
	{
		author: 'AllRecipes',
		url: 'https://www.allrecipes.com/recipe/12409/apple-crisp-ii/',
		isBasedOn: '',
		cookTime: '45min',
		datePublished: '2023-10-10',
		tags: ['dessert'],
		description:
			"This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
		image: './images/apple-crisp.jpg',
		recipeIngredient: [
			'10 C apples, cored and sliced',
			'1 C white sugar',
			'1 Tbsp white flour',
			'1 tsp ground cinnamon',
			'3 Tbsp water',
			'1 C rolled oats',
			'1 C Flour',
			'1 C Brown sugar',
			'1/4 tsp baking powder',
			'1/4 tsp baking soda',
			'1/2 C butter, melted'
		],
		name: 'Apple Crisp',
		prepTime: '30 min',
		recipeInstructions: [
			'Preheat the oven to 350 degrees F (175 degrees C).',
			'Place sliced apples in a 9x13-inch baking dish. Mix white sugar, 1 tablespoon flour, and cinnamon together; sprinkle over apples. Pour water evenly over apples.',
			'Combine oats, 1 cup flour, brown sugar, baking powder, and baking soda in a large bowl. Add melted butter and mix with a fork until crumbly; sprinkle evenly over apple mixture.',
			'Bake in the preheated oven until top is golden brown and apples are bubbling around the edges, about 45 minutes.'
		],
		recipeYield: '12 servings',
		rating: 4
	}
]

function randomNum (num){
	return Math.floor(Math.random()*num);
}

function randomRecipe(list){
	const number = randomNum(list.length);
	return list[number];
}

//console.log(randomRecipe(recipes)); //for testing

function recipeTemplate(recipe) {
	return `<div class="recipe">
	<img id="recipe-image" src="${recipe[0].image}" alt="">
	<div id="recipe-text">
		<ul class="tags">
			${tagsTemplate(recipe[0].tags || [])}
		</ul>
		<h2 id="recipe-name"><a href="#">${recipe[0].name}</a></h2>
		<p class="recipe__ratings">
			${ratingTemplate(recipe[0].rating)}
		</p>
		<p class="description">
			${recipe[0].description}
		</p>
	</div>
</div>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
	//console.log(tags); // Check if tags is an array
	let html = '';
	tags.forEach(element => {
		html += `<li class="tag">${element}</li>`
	});
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star
	for (let i = 1; i <= 5; i++){
		if (i <= rating){
			html += '<span aria-hidden="true" class="icon-star">⭐</span>';
		}
		else{
			html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
		}
	}

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

//for testing
//const recipe = getRandomListEntry(recipes);
//console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	const recipeHTML = document.querySelector(".recipe");

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
	const html = recipeTemplate(recipeList);

	// Set the HTML strings as the innerHTML of our output element.
	recipeHTML.innerHTML = html;

}

function init() {
  // get a random recipe
  const recipe = randomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);// I removed the brackets here and everything went from undefined to normal on init, but things are undefined for the search.
}
init();

document.querySelector("button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault();
	searchHandler();
});

function searchHandler(){
	const searchQuery = document.querySelector("input[type='text']").value.toLowerCase();
	const filteredRecipes = filterRecipes(searchQuery);
	renderRecipes(filteredRecipes);//do I need brackets around this like with init()
}

function filterRecipes(query){
	const recipeResults = recipes.filter(recipe => {return recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query) || recipe.tags.find(tag => tag.toLowerCase().includes(query)) || recipe.tags.find(recipeIngredient => recipeIngredient.toLowerCase().includes(query))});
	const recipeSorted = recipeResults.sort((a, b) => a.name.localeCompare(b.name));
	return recipeSorted;
}

// The main problem I was having was that I was grabbing the name and stuff from recipe,
// but the recipe that my template was receiving was an array that had one or more lists inside of it.
// I solved this by grabbing teh first element of the recipe array in my template.