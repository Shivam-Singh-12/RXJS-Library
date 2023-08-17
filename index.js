import { Observable, of, from } from "rxjs";
import { map, filter, reduce } from "rxjs/operators"

// 3 - of
const fObs = of("a", "b", "c");
const observer = {next: res=> console.log(" of We got " + res)}
fObs.subscribe(observer);

// 4 - from, .pipe(map(), filter(), reduce((x,y)=> x+y)).subscribe()
const fObsfrom = from([1, 2, 3, 4, 5, 6, 7]);
const observerfrom = { next: res => console.log(" From We got " + res) }

const result = fObsfrom.pipe(
    map(eachVale => eachVale * 3),
    filter(x => x % 2 === 0),
    reduce((startval, currentval) => startval + currentval)
);
result.subscribe(observerfrom);

// const fObsfrom = from(["a", "b", "c"]);
// const observerfrom = {next: res=> console.log(" From We got " + res)}

// fObsfrom.subscribe(observerfrom);


// 1
const observable = new Observable(res=>{
    res.next("Hello Shivam")
})
const observers = {next: data=> console.log("We got observable data " + data)};
observable.subscribe(observers);


// 2
// const inputBox = document.getElementById("sample");
// const myobs = rxjs.fromEvent(inputBox, 'click');
// const mysubs = myobs.subscribe(event=> console.log(event))