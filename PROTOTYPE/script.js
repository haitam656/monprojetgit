let codes = [ "C1","C2","C4","C1","C3","C2","C5","C3","C1","C2","C1","C4"]
let calc = {};
for ( let i = 0 ; i < codes.length;i++) {
let note = codes[i];
if (calc[note]) {
calc[note]++;
} else {
    calc[note] = 1;
}
}
console.log(calc)