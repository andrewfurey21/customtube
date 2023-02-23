
let create = {e: document.getElementById("create"), start: 15, end: 24, days: [1, 5]};
let misc = {e: document.getElementById("misc"), start: 15, end: 24, days: [1, 5]};
let entertainment = {e: document.getElementById("entertainment"), start: 15, end: 24, days: [1, 5]};
let cs = {e: document.getElementById("cs"), start: 0, end: 24, days: [0, 1, 2, 3, 4, 5, 6]};
let f1 = {e: document.getElementById("f1"), start: 0, end: 24, days: [0, 1, 2, 3, 4, 5, 6]};



let sections = [create, misc, entertainment, cs, f1];


let date = new Date();
let day = date.getDay();
console.log(day);
let hour = 1+date.getHours();
let time =
    hour +
    ":" +
    (date.getMinutes() < 10
        ? "0" + date.getMinutes()
        : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10
        ? "0" + date.getSeconds()
        : date.getSeconds());

console.log("The time is: " + time);

for (let i = 0; i < sections.length; i++) {
    let correctDay = false;
    for (let j = 0; j < sections[i].days.length; j++) {
        if (sections[i].days[j] == day) correctDay = true;
    }
    if ((sections[i].start > hour || sections[i].end < hour) || !correctDay) {
        sections[i].e.hidden = true;
    }
}

