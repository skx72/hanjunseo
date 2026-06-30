/* ========================= */
/* HanJunSeo Portfolio */
/* ========================= */

const darkButton = document.getElementById("darkmode");

if (darkButton) {

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = darkButton.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.className = "fa-solid fa-sun";

        } else {

            icon.className = "fa-solid fa-moon";

        }

    });

}

/* ========================= */
/* Fade Up Animation */
/* ========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("fade-up");

    observer.observe(section);

});

/* ========================= */
/* Skill Animation */
/* ========================= */

const skills = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

        }

    });

});

skills.forEach((skill)=>{

    skillObserver.observe(skill);

});

/* ========================= */
/* Header Shadow */
/* ========================= */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        header.style.boxShadow="0 20px 50px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 20px 50px rgba(0,0,0,.08)";

    }

});

/* ========================= */
/* Button Ripple */
/* ========================= */

document.querySelectorAll(".btn,.btn2,.project-btn").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ========================= */
/* Mouse Glow */
/* ========================= */

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ========================= */
/* Scroll To Top */
/* ========================= */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

/* ========================= */
/* Console */
/* ========================= */

console.log("HanJunSeo Portfolio Loaded 🚀");
