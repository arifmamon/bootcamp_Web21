

function fizzbuzz(n) {
for(i=0;i<=n;i++){
    let str= '';
    if(i%3 === 0 ){
        str += 'fizz';
    }
    if ( i % 5 === 0) {
        str += 'buzz';
    }
    if(str=''){
        str += i;
    }
    console.log(str);
}
}

fizzbuzz(10)