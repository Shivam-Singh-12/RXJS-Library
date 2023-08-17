import {of,asyncScheduler, observeOn} from "rxjs"

const obsOf = of("Hello", "Shivam", "Singh")
console.log("Before Subscription!");
obsOf.pipe(observeOn(asyncScheduler)).subscribe(res=>console.log(res));
console.log("After Subscription!");


// part 1 : Animations
// const afs = rxjs.animationFrameScheduler;
// const interval = rxjs.interval;
// const take = rxjs.take;

// let pbar = document.getElementById("pbar");

// interval(0).pipe(take(4)).subscribe(data=> console.log(data));
// interval(0, afs).pipe(take(600)).subscribe(data=> pbar.style.width = data +"px");


// part 2 : 
const fromEvent = rxjs.fromEvent;
const startWith = rxjs.startWith;
// refrence each images
const xpic = document.getElementById("dynosaur");
const ypic = document.getElementById("horse");
const zpic = document.getElementById("turtile");
// generic Observable via click
const xpic$ = fromEvent(xpic, 'click', (evt) => evt.target.id);
const ypic$ = fromEvent(ypic, 'click', (evt) => evt.target.id);
const zpic$ = fromEvent(zpic, 'click', (evt) => evt.target.id);
// reference user selection
const aname = document.getElementById("aname");
const bgColour = document.getElementById("bgColour")
// generic observable via check
const pic$ = fromEvent([xpic, ypic, zpic], 'click', (evt)=>evt.target.id);
pic$.subscribe(data=>console.log(data));
// subscribe and log this part will change in boot camp
// xpic$.subscribe(res => console.log(res));
// ypic$.subscribe(res => console.log(res));
// zpic$.subscribe(res => console.log(res));

// generate Oservable via change event
const aname$ = fromEvent(aname, 'change', (evt) => evt.target.value).pipe(startWith("dynosaur"));
const bgColour$ = fromEvent(bgColour, 'change', (evt) => evt.target.value).pipe(startWith("blue"));

// applay combine latest
const choice$ = rxjs.combineLatest([pic$, aname$, bgColour$], (pic, aname, bgColour)=>{
    return `<img src="asset/${pic}.png" 
    style="background-color:${bgColour};"
    title="${aname}"`
});
choice$.subscribe(
    // choiceArray => console.log(choiceArray)
    choiceArray => document.getElementById("choice").innerHTML = choiceArray
    );