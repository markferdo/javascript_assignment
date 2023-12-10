// module1
let year = parseInt(prompt('Enter a year: '));

if (year % 4 === 0){
    if(year % 100 === 0 ){
        if (year% 400 ===0){
            document.write('It is an leap year');
        } else {
            document.write('It is not a leap year');
        }
    }else {
        document.write('It is not a leap year');
    }
} else {
    document.write('It is not a leap year');
}
