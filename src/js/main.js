import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("form");
const [searchInput] = form.elements;
const gallery = document.querySelector(".gallery");

// Створення елементів бібліотек
iziToast.settings({
    message: "Sorry, there are no images matching your search query. Please try again!",
    position: "topRight",
    messageSize: "16px",
    displayMode: 2,
});
const simpleGallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
const loader = document.createElement("span");
loader.classList.add("loader");



const searchParams = new URLSearchParams({
    key: "40945002-e125ab8d3394997b1a8dc0871",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    gallery.innerHTML = "";
    gallery.append(loader)
    const data = await imgRequest(`https://pixabay.com/api/?${searchParams}&q=${searchInput.value}`);
    const items = buildGallery(data);
    gallery.insertAdjacentHTML("beforeend", items.join(" "));
    simpleGallery.refresh();
    loader.remove();
});

function imgRequest(url) {
    return  fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                return iziToast.error();
            } else {
                gallery.innerHTML = "";
                gallery.append(loader);
                return data.hits;
            }
        })
        .catch(err => console.log(err));
}

function buildGallery(data) {
    return data.map(img => {
        const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = img;
        return `<li class="gallery-item">
            <div class="img-wrapper">
              <a href="${largeImageURL}">
                  <img
                    class="gallery-img"
                    src="${webformatURL}" 
                    alt="${tags}"
                    width="360"
                    height="200">
              </a> 
            </div>
            <div class="text-wrapper">
              <ul class="img-info-list">
                <li class="info-item">
                  <h3 class="info-title">likes</h3>
                  <p class="info-text">${likes}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">views</h3>
                  <p class="info-text">${views}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">comments</h3>
                  <p class="info-text">${comments}</p>
                </li>
                <li class="info-item">
                  <h3 class="info-title">downloads</h3>
                  <p class="info-text">${downloads}</p>
                </li>
              </ul>
            </div>
        </li>`
    })
}





