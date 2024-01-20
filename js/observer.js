
    document.addEventListener("DOMContentLoaded", function () {
            
            const section1 = document.querySelector("#section-2-desktop")
            
            const whiteTouchBtn = document.getElementById("get-in-touch-white")
            var whiteTouchBtnChildren = whiteTouchBtn.querySelector("a");
  
            const navElementWhite = document.getElementById("nav-element")
            const navElementWhiteChildren = navElementWhite.querySelector("svg")
            
            const logoWhite = document.getElementById("homepage-logo-white2")
            const logoWhiteImg = document.querySelector("img")
            
            
            
            const blackTouchBtn = document.getElementById("get-in-touch-black")
            const navElementGreen = document.getElementById("nav-element-green")
            const logoBlack = document.getElementById("homepage-logo-black")
            
            
            
            const navMobileWhite= document.getElementById("nav-element-mobile-white")
            
            const sectionOneOptions = {
                rootMargin: "-100px 0px 0px 0px"
            };


            const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        whiteTouchBtnChildren.style.color="black"
                        whiteTouchBtnChildren.style.borderColor="black"
                        
                        navElementWhiteChildren.style.fill = "#c4d018"
                        logoWhiteImg.src = "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800,h_166/https://butlersigns.uk/wp-content/uploads/2022/06/Butler-Signs-Light-Background-Logo.png"
                        
                        
                        // navElementWhite.style.display ="none"
                        logoWhite.style.display = "block"
                        navElementGreen.style.display = "block"
                        blackTouchBtn.style.display = "block"
                        blackTouchBtn.style.width = "100%"
                        blackTouchBtn.style.top = null
                        
                        logoBlack.style.display = "block"
                        console.log("not")
                    } else {
                        // whiteTouchBtn.style.display = "block"
                        whiteTouchBtnChildren.style.color="white"
                        whiteTouchBtnChildren.style.borderColor="white"
                        navElementWhiteChildren.style.fill = "#fff"
                        logoWhiteImg.src = "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800,h_165/https://butlersigns.uk/wp-content/uploads/2022/06/Butler-logo-white-2-1024x211.png"
                        
                        
                        
                        logoWhite.style.display = "block"
                        logoWhite.style.width = "100%"
                        logoWhite.style.top = null
                        
                        navElementGreen.style.display = "block"
                        blackTouchBtn.style.display = "block"
                        logoBlack.style.display = "block"
                        console.log("yes")
                    }
                })

            },sectionOneOptions)

            sectionObserver.observe(section1)


        });
