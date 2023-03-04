"use strict";
const email = "/?email=a.rubtsov@innopolis.university";
const apiUrl = "https://fwd.innopolis.app/api/hw2";
const apiImg = "https://getxkcd.vercel.app/api/comic?num=";
const btn = document.getElementById("joke-btn");
const jokeContainer = document.getElementById("joke-container");
const jokeImg = document.getElementById("joke-img");
const jokeImgTitle = document.getElementById("joke-img-title");
const jokeImgDate = document.getElementById("joke-img-date");
//I will leave the button for myself, because it looks great
btn.style.display = "none";
jokeImg.style.display = "none";
jokeImgTitle.style.display = "none";
jokeImgDate.style.display = "none";
btn.addEventListener("click", getImage);
document.addEventListener("DOMContentLoaded", getImage);
async function getId() {
    const res = await fetch(apiUrl + email);
    let data = await res.json();
    return data;
}
;
async function getImage() {
    let returnedId = await getId();
    const res = await fetch(apiImg + returnedId);
    const data = await res.json();
    jokeImg.style.display = "block";
    jokeImgTitle.style.display = "block";
    jokeImgDate.style.display = "block";
    jokeContainer.style.height = "100%";
    jokeImg.src = data.img;
    jokeImg.alt = data.alt;
    jokeImgTitle.innerText = data.title;
    let date = new Date(data.year, data.month - 1, data.day);
    jokeImgDate.innerText = date.toLocaleDateString();
}
;
