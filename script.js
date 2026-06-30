/* ========================= */
/* HanJunSeo Portfolio */
/* script.js */
/* ========================= */

/* 다크모드 */

const darkBtn = document.getElementById("darkmode");

let dark = false;

darkBtn.addEventListener("click", () => {

    dark = !dark;

    if(dark){

        document.body.style.background = "#0f172a";
        document.body.style.color = "white";

        darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }else{

        document.body.style.background = "#f8fafc";
        document.body.style.color = "#1e293b";

        darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});


/* 프로젝트 준비중 */

function comingSoon(event){

    event.preventDefault();

    alert("🚧 아직 준비중입니다!");

}


/* 스크롤 애니메이션 */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition=".8s";

    observer.observe(section);

});


/* 부드러운 스크롤 */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
