const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "kiara mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens ☁️🖤 | late night thinker",
    },
    {
        name: "ananya sharma",
        pic: "https://plus.unsplash.com/premium_photo-1765663371886-2abc505e9165?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "soft heart, sharp mind 🌸 | journaling my way through life",
    },
    {
        name: "riya kapoor",
        pic: "https://images.unsplash.com/photo-1764352104218-2d3a899ce36c?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "a little lost, a little magical ✨ | sunsets & playlists",
    },
    {
        name: "mehak singh",
        pic: "https://plus.unsplash.com/premium_photo-1764501818547-52daac608a44?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "romanticizing life one day at a time 🎧 | slow mornings",
    },
    {
        name: "naina malhotra",
        pic: "https://images.unsplash.com/photo-1764078314427-41f0a05613d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4MHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "chaos with a touch of calm 🌙 | moon gazer",
    },
    {
        name: "pallavi verma",
        pic: "https://images.unsplash.com/photo-1763598363324-cd072a67dc61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyMnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
        bio: "existing, creating, healing 🎨 | art saves",
    }
];
//Task
// sare users show krna
// filer krna har baar input krne pe
// show krna filtered users
// wrapper
const cardsContainer = document.querySelector(".cards");

function showUsers(arr) {
    cardsContainer.innerHTML = "";

    arr.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.className = "bg-img";
        img.src = user.pic;

        const blurredLayer = document.createElement("div");
        blurredLayer.className = "blurred-layer";
        blurredLayer.style.backgroundImage = `url(${user.pic})`;

        const content = document.createElement("div");
        content.className = "content";

        const h3 = document.createElement("h3");
        h3.innerText = user.name;

        const p = document.createElement("p");
        p.innerText = user.bio;

        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        cardsContainer.appendChild(card);
    });
}

// initial render
showUsers(users);


let input = document.querySelector(".inp");
input.addEventListener("input",function(){
    let newUsers = users.filter((user)=>{
        return user.name.startsWith(input.value);
    });
    showUsers(newUsers); 
});
