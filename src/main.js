import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector(".search-input");
const submitBtn = document.querySelector(".submit-btn");

const options = {
    key: "40945002-e125ab8d3394997b1a8dc0871",
    q: input.value,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
}

