let N;
do{
    N = +prompt('Enter the first number:', 0);
}while(!Number.isInteger(N));
console.log(N);

let M;
do{
    M = +prompt('Enter the second number:', 0);
}while(!Number.isInteger(M) || M < N);
console.log(M);

const isSkipNeeded = confirm('Do you want to skip even numbers?');

let sum = 0;
for(let i = N; i <= M; i++){
    if (isSkipNeeded && (i % 2 == 0)){
        continue;
    }
    sum += i; 
}

console.log('sum: ' + sum);