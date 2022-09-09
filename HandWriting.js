// hamburger menu 
const menu = document.querySelector(".menuBurger")
const nav = document.querySelector("nav")
menu.addEventListener("click",function(){
    nav.classList.toggle("open")
})
const navbar =Array.from(document.querySelectorAll("nav a"))

navbar.forEach(function(pil){
    pil.addEventListener("click",function(){
        nav.classList.toggle("open")

    })
})




// menu tahun dan bulan
const bulan = document.querySelector(".mounthly")
const tahun = document.querySelector(".yearly")
const kotak = document.querySelector(".btnPilih")
const price=document.querySelector(".pack")

// kalo ditekan
tahun.addEventListener("click",function(){
    bulan.classList.remove("active")
    tahun.classList.add("active")
    price.innerHTML=""
    price.innerHTML=`<div class="offer">
    <h3 class="bronze">Bronze</h3>
    <h1 class="harga">RP 300K </h1>
    <p class="project"> 5 Project</p>
    <p class="words">10.000 word /project</p>
    <p class="">writing/typing</p>     
    <p>12H/5D service</p>
    <p class="revisi">infinty revision</p>
    <p class="btnStart">choose plan</p>
</div>

<div class="offer">
    <h3 class="gold">Gold</h3>
    <h1 class="harga">RP 750K </h1>
    <p class="project">11 Project</p>
    <p class="words">infinty word/project</p>
    <p class="">ALL Service</p>
    <p>12H/7D service</p>
    <p class="revisi">infinty revision</p>
    <p class="btnStart">choose plan</p>
</div>

<div class="offer">
    <h3 class="silver">Silver</h3>
    <h1 class="harga">RP 500K </h1>
    <p class="project">8 Project</p>
    <p class="words">infinty word /project</p>
    <p class="">writing/typing</p>
    <p>24H/7D service</p>
    <p class="revisi">infinty revision</p>
    <p class="btnStart">choose plan</p>
</div>`
    
})
// kalo ditekan bulan
bulan.addEventListener("click",function(){
    tahun.classList.remove("active")
    bulan.classList.add("active")
    price.innerHTML=""
    price.innerHTML=(`
    <div class="offer">
            <h3 class="classPack">Basic</h3>
            <h1 class="harga">RP 100K </h1>
            <p class="project"> 1Project</p>
            <p class="words">10.000 word /project</p>
            <p class="">writing/typing</p>     
            <p>12H/5D service</p>
            <p class="revisi">no revision</p>
            <p class="btnStart">choose plan</p>
        </div>

        <div class="offer">
            <h3 class="classPacks">Regular</h3>
            <h1 class="harga">RP 250K </h1>
            <p class="project">3 Project</p>
            <p class="words">10.000 word /project</p>
            <p class="">writing/typing</p>
            <p>24H/5D service</p>
            <p class="revisi">1 revision</p>
            <p class="btnStart">choose plan</p>
        </div>

        <div class="offer">
            <h3 class="classPack">Regular</h3>
            <h1 class="harga">RP 175K </h1>
            <p class="project">2 Project</p>
            <p class="words">10.000 word /project</p>
            <p class="">writing/typing</p>
            <p>12H/5D service</p>
            <p class="revisi">no revision</p>
            <p class="btnStart">choose plan</p>
        </div>
        
        `)
        // price.classList.remove("animaasi")

})

// about me arrow function
const slide= Array.from(document.querySelectorAll(".slide"))
const Next = document.querySelector(".panahnext")
const prev =document.querySelector(".panahprev")
let i =0

Next.addEventListener("click",function(){
    slide.forEach(e => {
        if(e.className.includes("hidup")){
            e.classList.remove("hidup")
            
        }
        else{
            e.classList.add("hidup")
        }
        Next.classList.remove("hidup")
        prev.classList.add("hidup")
    });
})

prev.addEventListener("click",function(){
    slide.forEach(e => {
        if(e.className.includes("hidup")){
            e.classList.remove("hidup")
            
        }
        else{
            e.classList.add("hidup")
        }
        prev.classList.remove("hidup")
        Next.classList.add("hidup")
    });
})
