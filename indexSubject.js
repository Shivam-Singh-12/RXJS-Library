import {Subject, of, from, combineLatest, map, merge, concat, forkJoin, zip, mergeMap} from 'rxjs'
// import { map, filter, reduce } from "rxjs/operators"

const subject = new Subject();
// subject.next("Welcome first!") - observable are unicast and subscript are multicast
const s1 = subject.subscribe(res=>console.log("Data : Hello1 " + res));
subject.next("Welcome")
const s2 = subject.subscribe(res=>console.log("Data : Hello2 " + res.toUpperCase()));
const s3 = subject.subscribe(res=>console.log(`${"Data : Hello3 " + res.toUpperCase()}`));
subject.next('Shivam Singh')

// of & combineLatest
const volts = of(100, 200, 300, 400, 500);
const watts = combineLatest([volts]).pipe(map(([v])=> v));
watts.subscribe(watts=>console.log("Watts : "+ watts));

// of & merged
const voltss = of(100, 200, 300, 400, 500);
const amps = of(1, 2, 3, 5)
const merged = merge(voltss, amps)
merged.subscribe(merged=>console.log({merged}));

// of & concat
const voltsss = of(100, 200, 300, 400, 500);
const ampss = of(1, 2, 3, 5)
const concated = concat(voltsss, ampss)
concated.subscribe(concate=>console.log({concate}));

// of & forkJoin
const voltssss = of(100, 200, 300, 400, 500, 600);
const ampsss = of(1, 2, 3, 5, 6)
const forkJoined = forkJoin({voltssss, ampsss})
forkJoined.subscribe(forkJoined=>console.log({forkJoined}));

// of & zip
const voltzip = of(100, 200, 300, 400, 500, 600);
const ampssss = of(1, 2, 3, 4, 5)
const zipped = zip(voltzip, ampssss)
zipped.subscribe(zipped=>console.log({zipped}));

// of & mergemap
const voltMergeMap = of(100, 200, 300, 400, 500, 600);
const amp5 = of(2, 3, 4, 5);
const wattNext = voltMergeMap.pipe(mergeMap(v => amp5.pipe(map(i=> v * i))));
wattNext.subscribe(res=>console.log(res))