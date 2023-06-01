function elementScroll(listOne, listTwo) {
    window.addEventListener("scroll", function () {

        const windowYOffset = window.pageYOffset;
        console.log(windowYOffset);
      
        function translateAmount() {
          const amount = (Math.round(listOne.offsetTop-windowYOffset)) / 4;
          return amount;
        }
      
        if (windowYOffset >= 1950 && windowYOffset <= 3500) {
          listOne.style.transform = "translatex(" + translateAmount() + "px)";
          listTwo.style.transform = "translatex(" + -translateAmount() + "px)";
        }
      });
}

export { elementScroll }