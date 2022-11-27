const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// document.addEventListener("scroll", () => {
//   var scroll_position = window.scrollY;
//   if (scroll_position > 1) {
//     header.style.backgroundColor = "#fff";
//     header.style.transition = ".25s ease .1s";
//     header.style.transform = "translateY(-100%)";
//   } else {
//     header.style.backgroundColor = "#fff";
//     header.style.transform = "translateY(0%)";
//   }
// });

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.transform = "translateY(0%)";
    header.style.transition = ".25s ease .1s";
  } else {
    header.style.transform = "translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;
};

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

new Vue({
  el: "#app",
  data: {
    xChild: 0,
    yChild: 0,
    xParent: 0,
    yParent: 0,
    hover: false,
    hideCursor: true,
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${
        this.yChild - 3
      }px) translateZ(0) translate3d(0, 0, 0);`;
    },
  },
  methods: {
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 15;
        this.yParent = e.clientY - 15;
      }, 100);
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", (e) => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", (e) => {
      this.hideCursor = false;
    });
  },
});

function changePath() {
  const pathCon = document.querySelector(".pathcon");
  const vid = document.getElementById("fifa");
  if (pathCon.getAttribute("d") == "M19 14H17V30H19V14ZM27 14H25V30H27V14Z") {
    pathCon.setAttribute(
      "d",
      "M30 22L16.5 13.3397V30.6603L30 22ZM26.2959 22L18.5 16.9989V27.0011L26.2959 22Z"
    );
    pathCon.setAttribute("data-id", "play");
    vid.pause();
  } else {
    pathCon.setAttribute("d", "M19 14H17V30H19V14ZM27 14H25V30H27V14Z");
    pathCon.setAttribute("data-id", "pause");
    vid.play();
  }
}
