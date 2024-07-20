
let t=gsap.timeline()

t.from(".name, li",{
    y:-30,
    opacity:0,
    // delay:2,
    duration:1,
    stagger:0.2
})   

t.from(".msg, h1",{
    y:-30,
    // x:-500,
    opacity:0,
    // delay:2,
    duration:1,
})   


t.from("img",{
    rotate:0,
    opacity:0,
    duration:1,
    // zIndex:4
})
t.from(".title h3",{
    opcaity:0,
    y:100
})

t.to("footer img",{
    rotate:-10,
    duration:0.25,
    // zIndex:4
})
t.to("footer img",{
    rotate:40,
    duration:0.25,
    // zIndex:4
})



const icon=document.querySelector(".icon");
const contact=document.querySelector(".contact");
const cards=document.querySelectorAll(".image");
icon.addEventListener("mouseover",()=>{
    t1=gsap.timeline();
    t1.to("footer img",{
        rotate:-20,
        duration:0.5,
        // stagger:1    
        // zIndex:4
    })
    t1.to("footer img",{
        rotate:20,
        duration:0.5,
        // stagger:1

        // zIndex:4
    })
});
icon.addEventListener("click",()=>{
    contact.classList.toggle("hidden");
    t1=gsap.timeline();
    t1.to("footer img",{
        rotate:-20,
        duration:0.5,
        // zIndex:4
    })
    t1.to("footer img",{
        rotate:20,
        duration:0.5,
        // zIndex:4
    })
    gsap.from(".contact",{
        x:75,
        opacity:0,
        duration:0.5
    })
})

cards.forEach(card => {
    const card_index=card.style.zIndex;
    card.addEventListener("mouseover", (event) => {
        card.style.zIndex="7";
    });
    card.addEventListener("mouseout", (event) => {
        card.style.zIndex= card_index;
        });
});

   
// t.from(".img2",{
//     rotate:0,
//     opacity:0,
//     duration:1,
//     zIndex:2
// })
// t.from(".img3",{
//     rotate:0,
//     opacity:0,
//     duration:1,
//     zIndex:2
// })
// t.from(".img4",{
//     rotate:0,
//     opacity:0,
//     duration:1,
//     zIndex:1
// })

   // gsap.to(".box",{
    //     x:250,
    //     rotate:360,
    //     backgroundImage:"linear-gradient(to bottom right, #ff8f8f, #ffe699)",
    //     duration:2,
    //     delay:0.5
    // })
    // gsap.from(".box",{
    //     x:250,
    //     rotate:360,
    //     backgroundImage:"linear-gradient(to bottom right, #e34949, #edd142)",
    //     duration:2,
    //     delay:0.5
    // })

    //----------------------------

    // let t=gsap.timeline()
    // t.to(".box1",{
    //     x:300,
    //     rotate:180,
    //     duration:1,
    //     scale:0.5
    // })
    // t.to(".box2",{
    //     x:300,
    //     rotate:180,
    //     duration:1,
    //     scale:0.5
    // })
    // t.to(".box3",{
    //     x:300,
    //     rotate:180,
    //     duration:1,
    //     scale:0.5
    // })

    //--------------------------------
