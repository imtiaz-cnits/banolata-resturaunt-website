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
const mobileTabBtn = document.querySelectorAll(".mobile_menu_tab_btn");
const tabContent = document.querySelectorAll(".menu_tab_content");

tabBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabBtn.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    tabContent.forEach((content) => content.classList.remove("active"));
    tabContent[index].classList.add("active");
  });
});

mobileTabBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    mobileTabBtn.forEach((tab) => tab.classList.remove("active"));
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

// scrollable tabs work
const tabBox = document.querySelector(".mobile_menu_item_tab"),
  arrowIcons = document.querySelectorAll(".tab_icons i");

const handleIcons = () => {
  let scrollVal = Math.round(tabBox.scrollLeft);
  let maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth > scrollVal ? "flex" : "none";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabBox.scrollLeft += icon.id === "left" ? -200 : 200;
    setTimeout(() => handleIcons(), 50);
  });
});

let isDragging = false;
const dragging = (e) => {
  if (!isDragging) return;
  tabBox.classList.add("dragging");
  tabBox.scrollLeft -= e.movementX;
  setTimeout(() => handleIcons(), 50);
};

const dragStop = () => {
  tabBox.classList.remove("dragging");
  isDragging = false;
};

tabBox.addEventListener("mousedown", () => (isDragging = true));
tabBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
