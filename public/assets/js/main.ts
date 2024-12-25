/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/

const scrollup = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 351
    ? scrollUp?.classList.add("show-scroll")
    : scrollUp?.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollup);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
