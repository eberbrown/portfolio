
  
  function displayWorkImg(el, elImg) {
    el.addEventListener("mouseover", () => {
      elImg.classList.add("seen");
    })
    
    el.addEventListener("mouseout", () => {
      elImg.classList.remove("seen");
    })
  }

  function workSeenImg(el, elImg) {
    el.addEventListener("mouseover", () => {
        elImg.classList.remove("seen");
    }) 
    
    el.addEventListener("mouseout", () => {
      elImg.classList.add("seen");
    })
  }

  export { workSeenImg, displayWorkImg }