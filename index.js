var video_mobile = document.getElementById("videoMobile")
    var video_desktop = document.getElementById("videoDesktop")
    var footerBar = document.getElementById("footer-bar")
    var contact_close = document.querySelector(".contact-close")
    var container_menu = document.querySelector(".container-menu")
    var contact_text = document.querySelector(".contact-text")
    var ohgreen = document.getElementById("ohgreen")

    footerBar.addEventListener("mouseover", function(){
      ohgreen.style.color = "green"
    })

    footerBar.addEventListener("mouseout", function(){
      ohgreen.style.color = "white"
    })


    footerBar.addEventListener("click", function(){

      if( !footerBar.classList.contains("openedBar") ){
        footerBar.classList.add("openedBar")
        contact_close.style.opacity = 1;
      }
      
    })

    contact_close.addEventListener("click", function(e){
      e.stopPropagation()
      footerBar.classList.remove("openedBar")
      contact_close.style.opacity = 0;
    })