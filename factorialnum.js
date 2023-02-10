const a = parseInt(prompt('enter a value'));

if (a < 0){
    console.log('Error');
}
else if ( a === 1){
    console.log('1');
}
else {
    let Fact = 1;
    for (i=1; i<=a; i++ ){
        Fact *= i;
    }
    console.log(Fact);
}   