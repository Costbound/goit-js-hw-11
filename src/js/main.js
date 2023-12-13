import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");
const [searchInput, searchBtn] = form.elements;
const gallery = document.querySelector(".gallery");

const searchParams = new URLSearchParams({
    key: "40945002-e125ab8d3394997b1a8dc0871",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
});

form.onsubmit = async (e) => {
    e.preventDefault();
    fetch(`https://pixabay.com/api/?${searchParams}&q=${searchInput.value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error();
            }
        })
        .catch(err => {
            console.log(err);
        });
}

iziToast.settings({
    message: "Sorry, there are no images matching your search query. Please try again!",
    position: "topRight",
    messageSize: "16px",
    displayMode: 2,
})

