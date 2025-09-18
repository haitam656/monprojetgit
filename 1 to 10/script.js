let H = ["C2","C1","C4","C1","C7","C3","C1"];
let calc  = {};
for(let i = 0; i < H.length;i++) {
let code = H[i]
if (calc[code]){
  calc[code]++;
} else {
  calc[code]=1;
}
console.log(calc);

}