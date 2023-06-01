function displayImg(el, elImg) {
  el.addEventListener("mouseover", () => {
    el.style.cursor = "none";
    elImg.classList.add("visible");
    el.addEventListener("mousemove", (e) => {
      elImg.style.display = "inherit";
      elImg.style.left = e.pageX +110 + "px";
      elImg.style.top = e.pageY+150 + "px";
    })
  })
  
  el.addEventListener("mouseout", () => {
    el.style.cursor = "inherit";
    elImg.classList.remove("visible");
  })
}

export { displayImg }