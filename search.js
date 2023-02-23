let input = document.getElementById("search");
let button = document.getElementById("search-button");



button.addEventListener("click", () => {
	search();
});

function checkEnter(event) {
	if (event.keyCode == 13) {
		search();
	}
}

function search() {
	let text = input.value;
	input.value = "";
	let textArray = text.split(" ");
	let link = "";
	link += "https://www.youtube.com/results?search_query=";
	for (let i = 0; i < textArray.length; i++)           {
		link += i == textArray.length - 1 ? textArray[i] + "" : textArray[i] + "+";
	}
	window.open(link);
}
