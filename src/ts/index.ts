const email = "/?email=a.rubtsov@innopolis.university";
const apiUrl = "https://fwd.innopolis.app/api/hw2";
const apiImg = "https://getxkcd.vercel.app/api/comic?num=";

const btn = document.getElementById("joke-btn") as HTMLButtonElement;

const jokeContainer = document.getElementById("joke-container") as HTMLFormElement;
const jokeImg = document.getElementById("joke-img") as HTMLImageElement;
const jokeImgTitle = document.getElementById("joke-img-title") as HTMLTitleElement;
const jokeImgDate = document.getElementById("joke-img-date") as HTMLTitleElement;

//I will leave the button for myself, because it looks great

btn.style.display = "none";
jokeImg.style.display = "none";
jokeImgTitle.style.display = "none";
jokeImgDate.style.display = "none";

btn.addEventListener("click", getImage);

document.addEventListener("DOMContentLoaded", getImage);

interface Joke {
  alt: string;
  day: string;
  img: string;
  link: string;
  month: string;
  news: string;
  num: number;
  safe_title: string;
  title: string;
  transript: string;
  year: string;
}

async function getId() {
  const res: Response = await fetch(apiUrl+email);
  let data: number = await res.json();
  return data;
};

async function getImage() {
  let returnedId: number = await getId();
  const res: Response = await fetch(apiImg+returnedId);
  const data: Joke = await res.json();
  
  jokeImg.style.display = "block";
  jokeImgTitle.style.display = "block";
  jokeImgDate.style.display = "block";
  
  jokeContainer.style.height = "100%";
  
  jokeImg.src = data.img;
  jokeImg.alt = data.alt;
  jokeImgTitle.innerText = data.title;
  
  let date = new Date(Number(data.year), Number(data.month)-1, Number(data.day));
  jokeImgDate.innerText = date.toLocaleDateString();
};