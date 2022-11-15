const argument = process.argv.slice(2).map(item => parseFloat(item));

function circleArea(r) {
    return 3.14*(r)**2;
}
console.log(circleArea(argument[0]));