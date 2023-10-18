const API_KEY = "69289fc370f241aa9f391c43074ca0d7";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));



async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone,article){
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#source");
    const newsDesc= cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    
    const date = new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
   
    newsSource.innerHTML = `${article.source.name} / ${date}`;

    cardClone.firstElementChild.addEventListener("click",() => {window.open(article.url,"_blank" )})
}
let curActiveNav = null;
function onNavItemClick(id){
    fetchNews(id); //fetching and binding data
    const navItem = document.getElementById(id);
    curActiveNav?.classList.remove('active');
    curActiveNav = navItem;
    curActiveNav.classList.add('active');

}

const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("news-input");

searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    if(!query) return;
    fetchNews(query);
    curActiveNav?.classList.remove('active');
    curActiveNav = null;

});