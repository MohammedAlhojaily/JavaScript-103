function replace() {
let searchText = document.getElementById('search').value;
let replaceText = document.getElementById('replace').value;
let text = document.getElementById('text').innerHTML;
let newText = document.getElementById('text').value;
let reg = new RegExp(searchText, 'gi')
newText.innerHTML = text
}