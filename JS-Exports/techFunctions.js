function elementScroll(listOne, listTwo) {
    window.addEventListener("scroll", function () {

        const windowYOffset = window.pageYOffset;
        const windowWidth = window.innerWidth;
        //console.log(windowYOffset);
      
        function translateAmount() {
          const amount = (Math.round(listOne.offsetTop-windowYOffset)) / 4;
          return amount;
        }
      
        
        if (windowWidth < 480) {
          if (windowYOffset >= 1350 && windowYOffset <= 3500) {
            listOne.style.transform = "translatex(" + translateAmount() + "px)";
            listTwo.style.transform = "translatex(" + -translateAmount() + "px)";
          }

        } else {
          if (windowYOffset >= 1950 && windowYOffset <= 3500) {
            listOne.style.transform = "translatex(" + translateAmount() + "px)";
            listTwo.style.transform = "translatex(" + -translateAmount() + "px)";
          }
        }
      });
}

export { elementScroll }