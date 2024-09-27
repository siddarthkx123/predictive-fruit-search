const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = []

	// TODO

	for(let i =0 ; i < fruit.length; i++){
		console.log(str)
	
		console.log(fruit[i].includes(str))
		if(fruit[i].includes(str) && str != ""){
			console.log("hi")
			results.push(fruit[i])
		}
	}

	console.log("RESULTS")
	console.log(results)

	return results;
}

function searchHandler(e) {
	// TODO
	var value1 = input.value
	console.log(value1)
	results = search(value1)
	console.log(results)
	showSuggestions(results,value1)

	
}

function showSuggestions(results, inputVal) {

	// TODO

	suggestions.innerHTML = ""
	
	
	for(let i =0 ; i < results.length; i++){
		var li = document.createElement("li")
		li.innerHTML = results[i]
		suggestions.appendChild(li)

		
	}
	
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);