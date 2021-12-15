import PixabayService from "./js/apiService";

const searchForm = document.querySelector(".js-form");
const picturesContainer = document.querySelector(".js-pictures-container");

const apiService = new PixabayService();

searchForm.addEventListener("submit", onSearch);

function onSearch(event) {
    event.preventDefault();

    apiService.query = event.currentTarget.elements.query.value;
    apiService.resetPage();
    apiService.fetchPictures();


}
