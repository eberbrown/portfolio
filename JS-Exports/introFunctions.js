const industrialEl = document.querySelector(".industrial");
const engineerEl = document.querySelector(".engineer");
const andAndEl = document.querySelector(".and-and");
const frontEndEl = document.querySelector(".front-end");
const developerEl = document.querySelector(".developer");

const introEls = [industrialEl, engineerEl, andAndEl, frontEndEl, developerEl];

function skewTranslate (el) {
  el.style.transform = "skew(5deg) translateX(90px)";
  el.style.webkittransform = "skew(5deg) translateX(90px)";
  el.style.Moxtransform = "skew(5deg) translateX(90px)";
  el.style.Otransform = "skew(5deg) translateX(90px)";
  el.style.mstransform = "skew(5deg) translateX(90px)";
}

function skewEl(el) {
  el.style.transform = "skew(5deg)";
  el.style.webkittransform = "skew(5deg)";
  el.style.Moxtransform = "skew(5deg)";
  el.style.Otransform = "skew(5deg)";
  el.style.mstransform = "skew(5deg)";
}

function translateMinusEl(el) {
  el.style.transform = "translateX(-90px)";
  el.style.webkittransform = "translateX(-90px)";
  el.style.Moxtransform = "translateX(-90px)";
  el.style.Otransform = "translateX(-90px)";
  el.style.mstransform = "translateX(-90px)";
}

function styleColorYellow(el) {
  el.style.color = "#d6ae5d"; 
}

function styleColorRed(el) {
  el.style.color = "#991a10"; 
}

function inheritEl(el) {
  el.style.color = "inherit";
  el.style.transform = "inherit"
}

function industrialElAnimation(industrialEl) {
  industrialEl.addEventListener("mouseover", () => {
    skewEl(industrialEl);
    styleColorRed(engineerEl);
    styleColorRed(andAndEl);
    translateMinusEl(andAndEl);
    translateMinusEl(frontEndEl);
    styleColorYellow(developerEl);
    skewTranslate(developerEl);
  });
  
  industrialEl.addEventListener("mouseout", () => {
    introEls.forEach(el => {
      inheritEl(el);
    });
  });
}

function engineerElAnimation(engineerEl) {
  engineerEl.addEventListener("mouseover", () => {
    styleColorRed(engineerEl);
    skewEl(engineerEl);
    skewTranslate(developerEl);
    styleColorYellow(developerEl);
    translateMinusEl(andAndEl);
    styleColorRed(andAndEl);
    translateMinusEl(frontEndEl);
  });
  
  engineerEl.addEventListener("mouseout", () => {
    introEls.forEach(el => {
      inheritEl(el);
    });
  });
}

function andAndElAnimation(andAndEl) {
  andAndEl.addEventListener("mouseover", () => {
    styleColorRed(engineerEl);
    styleColorRed(andAndEl);
    skewEl(andAndEl);
    styleColorYellow(developerEl);
  });
  
  andAndEl.addEventListener("mouseout", () => {
    introEls.forEach(el => {
      inheritEl(el);
    });
  });
}

function frontEndElAnimation(frontEndEl) {
  frontEndEl.addEventListener("mouseover", () => {
    styleColorRed(engineerEl);
    styleColorRed(andAndEl);
    translateMinusEl(andAndEl);
    translateMinusEl(frontEndEl);
    styleColorYellow(developerEl);
  });
  
  frontEndEl.addEventListener("mouseout", () => {
    introEls.forEach(el => {
      inheritEl(el);
    });
  });
}

function developerElAnimation(developerEl) {
  developerEl.addEventListener("mouseover", () => {
    styleColorYellow(developerEl);
    skewEl(industrialEl);
    translateMinusEl(andAndEl);
    styleColorRed(andAndEl);
    styleColorRed(engineerEl);
    skewEl(frontEndEl);
  });
  
  developerEl.addEventListener("mouseout", () => {
    introEls.forEach(el => {
      inheritEl(el);
    });
  });
}

export { industrialElAnimation, engineerElAnimation, andAndElAnimation, frontEndElAnimation, developerElAnimation }

