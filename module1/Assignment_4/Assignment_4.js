//module 1
let hogwordsclass = Math.floor(Math.random()*4) + 1;
let children = prompt('Name: ');
if (hogwordsclass === 1){
    document.write(children + ', you are Gryffindor')
} else if(hogwordsclass === 2){
    document.write(children + ', you are Slytherin')
}else if(hogwordsclass === 3){
    document.write(children + ', you are Hufflepuff')
}else if(hogwordsclass === 4){
    document.write(children + ', you are Ravenclaw')
}