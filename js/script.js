const menuBox = document.querySelector(".menu-item");
const navOpenBtn = document.querySelector(".nav-open");
const closeBtn = document.querySelector(".close-btn");

navOpenBtn.addEventListener("click", () => {
  menuBox.style.left = "0px";
  navOpenBtn.style.opacity = "0";
});

closeBtn.addEventListener("click", () => {
  menuBox.style.left = "-100%";
  navOpenBtn.style.opacity = "1";
});

// menu tabs work
const tabBtn = document.querySelectorAll(".menu_tab_btn");
const tabContent = document.querySelectorAll(".menu_tab_content");

tabBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabBtn.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    tabContent.forEach((content) => content.classList.remove("active"));
    tabContent[index].classList.add("active");
  });
});

// back to top btn

//Get the button:
mybutton = document.getElementById("bt-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
    mybutton.style.zIndex = 100;
  } else {
    mybutton.style.display = "none";
  }
}
