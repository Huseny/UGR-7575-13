// navigation bar

const navbar = document.querySelector(".header__nav-bar");
const mobile_menu = document.querySelector(".header__mobile-navs");

navbar.addEventListener("click", function () {
  this.classList.toggle("header--active-nav-bar");
  mobile_menu.classList.toggle("header--mobile-navs-active");
});

//#############################################

//index.html
//learn more button
const learn_more = document.querySelector(".description__learn-more");
learn_more.addEventListener("click", function () {
  window.open("About-us.html", "_blank");
});

// see all courses button
const see_courses = document.querySelector(".course-list__see-all-button");
see_courses.addEventListener("click", function () {
  window.open("Login.html", "_blank");
});
