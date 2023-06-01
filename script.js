import {
  industrialElAnimation,
  engineerElAnimation,
  andAndElAnimation,
  frontEndElAnimation,
  developerElAnimation,
} from "./JS-Exports/introFunctions.js";

import { displayImg } from "./JS-Exports/aboutMeFunctions.js";

import { workSeenImg, displayWorkImg } from "./JS-Exports/workFunctions.js";

import { elementScroll } from "./JS-Exports/techFunctions.js";

const introSectionEl = document.querySelector(".intro");
const industrialEl = document.querySelector(".industrial");
const engineerEl = document.querySelector(".engineer");
const andAndEl = document.querySelector(".and-and");
const frontEndEl = document.querySelector(".front-end");
const developerEl = document.querySelector(".developer");

const aboutMeSectionEl = document.querySelector(".about-me");

const aboutMeTextEl = document.querySelector(".about-me-text");
const aboutMeButtonEl = document.querySelector(".about-me button");
const workSectionEl = document.querySelector(".work");

const profileImg = document.querySelector(".profile-img");
const indEngImg = document.querySelector(".ind-eng-img");
const BarcelonaImg = document.querySelector(".barcelona-img");
const CostaRicaImg = document.querySelector(".costa-rica-img");
const softwareImg = document.querySelector(".software-img");
const societyImg = document.querySelector(".society-img");

const eberSpan = document.querySelector(".eber-span");
const indEngSpan = document.querySelector(".ind-eng-span");
const BarcelonaSpan = document.querySelector(".barcelona-span");
const CostaRicaSpan = document.querySelector(".costa-rica-span");
const softwareSpan = document.querySelector(".software-span");
const societySpan = document.querySelector(".society-span");

const workCardContainerEl = document.querySelector(".work-card-container");
const countdownImg = document.querySelector(".countdown-app-img");
const githubImg = document.querySelector(".github-app-img");
const movieImg = document.querySelector(".movie-app-img");
const drawingImg = document.querySelector(".drawing-app-img");
const notesImg = document.querySelector(".notes-app-img");
const passwordImg = document.querySelector(".password-app-img");
const quizImg = document.querySelector(".quiz-app-img");
const recipeImg = document.querySelector(".recipe-app-img");
const todoImg = document.querySelector(".todo-app-img");
const weatherImg = document.querySelector(".weather-app-img");
const weatherTwoImg = document.querySelector(".weather-two-app-img");

const workListEL = document.querySelector(".work-list");
const CountdownEL = document.querySelector(".Countdown");
const GithubEL = document.querySelector(".Github-Profile");
const FilmEL = document.querySelector(".Film-App");
const DrawingEL = document.querySelector(".Drawing-App");
const NotesEL = document.querySelector(".Notes-App");
const PasswordEL = document.querySelector(".Password-Generator");
const QuizEL = document.querySelector(".Quiz-Game");
const RecipeEL = document.querySelector(".Recipe-App");
const ToDoEL = document.querySelector(".ToDo-List");
const WeatherEL = document.querySelector(".Weather-App");

const techListOne = document.querySelector(".ulOne");
const techListTwo = document.querySelector(".ulTwo");

window.addEventListener("scroll", function () {
  const scrollFromTop = window.pageYOffset;

  function sectionInheritStyle(el) {
    el.style.backgroundColor = "inherit";
    el.style.color = "inherit";
    el.style.opacity = 1;
  }

  if (scrollFromTop <= frontEndEl.offsetTop) {
    sectionInheritStyle(introSectionEl);
    sectionInheritStyle(aboutMeSectionEl);
    sectionInheritStyle(workSectionEl);
  } else if (scrollFromTop <= aboutMeButtonEl.offsetTop) {
    introSectionEl.style.backgroundColor = "#0e0e0e";
    aboutMeSectionEl.style.backgroundColor = "#0e0e0e";
    aboutMeSectionEl.style.color = "#e5e5e5";
    workSectionEl.style.backgroundColor = "#0e0e0e";
  } else {
    sectionInheritStyle(introSectionEl);
    sectionInheritStyle(aboutMeSectionEl);
    sectionInheritStyle(workSectionEl);
  }
});

industrialElAnimation(industrialEl);
engineerElAnimation(engineerEl);
andAndElAnimation(andAndEl);
frontEndElAnimation(frontEndEl);
developerElAnimation(developerEl);

displayImg(eberSpan, profileImg);
displayImg(indEngSpan, indEngImg);
displayImg(BarcelonaSpan, BarcelonaImg);
displayImg(CostaRicaSpan, CostaRicaImg);
displayImg(softwareSpan, softwareImg);
displayImg(societySpan, societyImg);

workSeenImg(workListEL, weatherTwoImg);

displayWorkImg(CountdownEL, countdownImg);
displayWorkImg(GithubEL, githubImg);
displayWorkImg(FilmEL, movieImg);
displayWorkImg(DrawingEL, drawingImg);
displayWorkImg(NotesEL, notesImg);
displayWorkImg(PasswordEL, passwordImg);
displayWorkImg(QuizEL, quizImg);
displayWorkImg(RecipeEL, recipeImg);
displayWorkImg(ToDoEL, todoImg);
displayWorkImg(WeatherEL, weatherImg);

elementScroll(techListOne, techListTwo);
