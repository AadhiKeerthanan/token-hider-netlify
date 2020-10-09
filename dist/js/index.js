const searchField = document.querySelector(".search-field");
const searchForm = document.querySelector(".search");

async function getapiResults() {
    const res = await fetch("/.netlify/functions/token-hider" + "?q=" + searchField.value)
    .then(res => res.json())
    .then(data => console.log(data.items))
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getapiResults();
})