let texts = ["Great Team with great experience, i would reguler recommended to all that eou will get better support by working with this awesome team and their expert members :)",
    "Wonderful!",
    "That's what I was looking for!"
];

let names = ["Sourabh B.",
    "Max O.",
    "Vasya P."
];

let titles = ["Co Founder of Mew",
    "Trainee",
    "Myth"
]

let state = 0;

function next() {
    if (state == 2) {
        state = 0;
    } else {
        state++;
    }
    document.getElementById("text").innerText = texts[state];
    document.getElementById("name").innerText = names[state];
    document.getElementById("title").innerText = titles[state];
}

function prev() {
    if (state == 0) {
        state = 2;
    } else {
        state--;
    }
    document.getElementById("text").innerText = texts[state];
    document.getElementById("name").innerText = names[state];
    document.getElementById("title").innerText = titles[state];
}