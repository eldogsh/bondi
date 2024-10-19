document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav-link");
    var sections = document.querySelectorAll("section"); // أو استخدام divs بمعرفات
  
    // التحكم بإضافة فئة active عند التنقل عبر الأقسام المختلفة
    window.addEventListener("scroll", function() {
      const scrollY = window.scrollY;
  
      sections.forEach((section) => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          let currentId = section.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentId}`) {
              link.classList.add("active");
            }
          })
        }
      })

        // إغلاق القائمة تلقائيًا بعد النقر على أي رابط في الموبايل
    const navtoogle=document.querySelector(".navbar-toggler");
    const navcoolpase=document.querySelector(".navbar-collapse");
    navLinks.forEach((link)=>{
        link.addEventListener('click',function(){
            navcoolpase.classList.remove("show")
        });
    })
    })
  });
