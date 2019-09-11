(function() {

  if (process.browser) {

    let lastScrollY = 0;
    let ticking = !1;

    scrollSwag = function() {
      lastScrollY = window.pageYOffset, requestTick()
    },

    requestTick = function() {
      ticking || (window.requestAnimationFrame(updatePosition), ticking = !0)
    },

    updateNav = function(e) {
      Array.prototype.forEach.call(document.querySelectorAll("nav > a"), function(e) {
        e.classList.remove("active")
      }), e.classList.add("active")
    },

    lup = function(linkArray){
      Array.prototype.forEach.call(linkArray, function(nameId) {
        100 * Math.ceil((document.querySelectorAll("#" + nameId)[0].offsetTop - 200) / 100) === 100 * Math.ceil(lastScrollY / 100) && updateNav(document.querySelectorAll(".l" + nameId)[0]);
      })
    },

    updatePosition = function() {
      let link = ['phone', 'location', 'hours', 'pizza', 'specialty', 'toppings', 'hoagies', 'wings', 'salads', 'calzones']
      lup(link)
      ticking = !1;
    },

    trans = function(e) {
      Array.prototype.forEach.call(document.querySelectorAll("nav > a"), function(e) {
        e.classList.remove("active")
      }),
      e.target.classList.add("active")

      if(!e.target.classList.contains("menu")){
        console.log(document.querySelectorAll(".menu"))
        document.querySelectorAll(".menu")[0].text = "menu"
        document.querySelectorAll("nav")[0].classList.toggle("flip")
      }else{
        console.log("do nothing");
      }

    };

    document.querySelectorAll(".menu")[0].addEventListener("click", function(e) {
      e.preventDefault(),
      e.target.text =
        document.querySelectorAll("nav")[0].classList.contains("flip")
          ? "menu"
          : "close menu",
        document.querySelectorAll("nav")[0].classList.toggle("flip")
    }),

    window.addEventListener("scroll", scrollSwag, !1),

    document.querySelectorAll("nav")[0].addEventListener("click", trans, !1)
  }
})();
