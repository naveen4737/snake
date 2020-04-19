let box = new Array(50, 50);
let container = document.getElementById('container');
for(let i1=0;i1<50;i1++){
    let div_row = document.createElement('div');
    div_row.style.display = 'flex';
    for(let j1=0;j1<50;j1++){
        let div_boxes = document.createElement('div');
        div_boxes.setAttribute('id',`${i1}_${j1}`);
        div_boxes.setAttribute('class',`row-${i1}`);
        div_boxes.setAttribute('class',`small-boxes`);

        div_boxes.style.width = '15px';
        div_boxes.style.height = '15px';
        div_boxes.style.backgroundColor = 'maroon';
        div_boxes.style.border = '1px solid black';

        div_row.appendChild(div_boxes);
    }
    container.appendChild(div_row);
}

createSnake();
placeFood();

let lengthOfSnake = 13;
let iCoordinateOf1 = 0;
let jCoordinateOf1 = 12;
// movementLeft(iCoordinateOf1, jCoordinateOf1)
// console.log(`${iCoordinateOf1} & ${jCoordinateOf1} 845`)
// movementLeft(iCoordinateOf1, jCoordinateOf1)
// console.log(`${iCoordinateOf1} & ${jCoordinateOf1} 845`)

function createSnake(){
    document.getElementById('0_0').innerHTML = '13';
    document.getElementById('0_0').style.backgroundColor = 'white';
    document.getElementById('0_1').innerHTML = '12';
    document.getElementById('0_1').style.backgroundColor = 'white';
    document.getElementById('0_2').innerHTML = '11';
    document.getElementById('0_2').style.backgroundColor = 'white';
    document.getElementById('0_3').innerHTML = '10';
    document.getElementById('0_3').style.backgroundColor = 'white';
    document.getElementById('0_4').innerHTML = '9';
    document.getElementById('0_4').style.backgroundColor = 'white';
    document.getElementById('0_5').innerHTML = '8';
    document.getElementById('0_5').style.backgroundColor = 'white';
    document.getElementById('0_6').innerHTML = '7';
    document.getElementById('0_6').style.backgroundColor = 'white';
    document.getElementById('0_7').innerHTML = '6';
    document.getElementById('0_7').style.backgroundColor = 'white';
    document.getElementById('0_8').innerHTML = '5';
    document.getElementById('0_8').style.backgroundColor = 'white';
    document.getElementById('0_9').innerHTML = '4';
    document.getElementById('0_9').style.backgroundColor = 'white';
    document.getElementById('0_10').innerHTML = '3';
    document.getElementById('0_10').style.backgroundColor = 'white';
    document.getElementById('0_11').innerHTML = '2';
    document.getElementById('0_11').style.backgroundColor = 'white';
    document.getElementById('0_12').innerHTML = '1';
    document.getElementById('0_12').style.backgroundColor = 'white' ;
}
var previous = 'none';
var intervalUp;
var intervalDown;
var intervalLeft;
var intervalRight;

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if(!((previous=='up' && e.keyCode=='40')||(previous=='down' && e.keyCode=='38')||(previous=='left' && e.keyCode=='39')||(previous=='right' && e.keyCode=='37'))){
        
        if(previous == 'down'){
            clearInterval(intervalDown)
        }else if(previous == 'up'){
        clearInterval(intervalUp)
        }else if(previous == 'left'){
            clearInterval(intervalLeft)
        }else if(previous == 'right'){
            clearInterval(intervalRight)
        }

        if (e.keyCode == '38') {
            // up arrow
            // clearInterval(intervalDown)
            // clearInterval(intervalLeft)
            // clearInterval(intervalRight)
            intervalUp = setInterval(up, 100);
            previous = 'up';
        }
        else if (e.keyCode == '40') {
            // down arrow
            console.log('DOWN')
            //    clearInterval(intervalUp)
            //    clearInterval(intervalLeft)
            // clearInterval(intervalRight)
            intervalDown = setInterval(down, 100);
            previous = 'down';
        }
        else if (e.keyCode == '37') {
            // left arrow
            //    clearInterval(intervalUp)
            //    clearInterval(intervalDown)
            //    clearInterval(intervalRight)
            intervalLeft = setInterval(left, 100);
            previous = 'left';
        }
        else if (e.keyCode == '39') {
            // right arrow
            console.log('RIGHT')
            //    clearInterval(intervalUp)
            //    clearInterval(intervalDown)
            //    clearInterval(intervalLeft)
            intervalRight = setInterval(right, 100);
            previous = 'right';
        }
        
    }
}

function up(){
    movementUp(iCoordinateOf1, jCoordinateOf1);
}

function down(){
    // clearInterval(intervalRight)
    movementDown(iCoordinateOf1, jCoordinateOf1);
}

function left(){
    movementLeft(iCoordinateOf1, jCoordinateOf1);
}

function right(){
    movementRight(iCoordinateOf1, jCoordinateOf1);
}

function movementUp(i, j){

    let jCoordinateOf1_new;
    let iCoordinateOf1_new;

    if( iCoordinateOf1 == 0 ){
        iCoordinateOf1_new = 49;
    } else{
        iCoordinateOf1_new = i - 1;
    }
    jCoordinateOf1_new = jCoordinateOf1;
    
    if( document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML == '*'){

        console.log(`length of snake is ${lengthOfSnake}`)
        lengthOfSnake++;
        console.log(`length of after snake is ${lengthOfSnake}`)
        increaseLength(iCoordinateOf1_new, jCoordinateOf1_new, i, j);
        placeFood();
    }else if(document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML == ''){
        document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML = document.getElementById(`${i}_${j}`).innerHTML;
        document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).style.backgroundColor = document.getElementById(`${i}_${j}`).style.backgroundColor;
        
        document.getElementById(`${i}_${j}`).innerHTML = '';
        document.getElementById(`${i}_${j}`).style.backgroundColor = 'maroon';
        follow(iCoordinateOf1_new, jCoordinateOf1_new, i, j);
        
        iCoordinateOf1 = iCoordinateOf1_new;   
        jCoordinateOf1 = jCoordinateOf1_new;
    }else{
        console.log(previous)
        console.log('41845')
        console.log('41845')
        console.log('41845')
        gameOver(previous);
    }
}


function movementDown(i, j){
    
    console.log('down')
    let jCoordinateOf1_new;
    let iCoordinateOf1_new;
    
    if( iCoordinateOf1 == 49 ){
        iCoordinateOf1_new = 0;
    } else{
        iCoordinateOf1_new = i + 1;
    }
    jCoordinateOf1_new = jCoordinateOf1;

    if( document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML == '*'){
        console.log(`length of snake is ${lengthOfSnake}`)
        lengthOfSnake++;
        console.log(`length of after snake is ${lengthOfSnake}`)
        increaseLength(iCoordinateOf1_new, jCoordinateOf1_new, i, j);
        placeFood();
    }else if(document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML == ''){
        document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML = document.getElementById(`${i}_${j}`).innerHTML;
        document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).style.backgroundColor = document.getElementById(`${i}_${j}`).style.backgroundColor;
        
        document.getElementById(`${i}_${j}`).innerHTML = '';
        document.getElementById(`${i}_${j}`).style.backgroundColor = 'maroon';
        follow(iCoordinateOf1_new, jCoordinateOf1_new, i, j);
        
        iCoordinateOf1 = iCoordinateOf1_new;   
        jCoordinateOf1 = jCoordinateOf1_new;
    }else{
        console.log(previous)
        console.log('41845')
        console.log('41845')
        console.log('41845')
        gameOver();
    }
}

function movementLeft(i, j){
    console.log('left')
    let jCoordinateOf1_new;
    let iCoordinateOf1_new;
    
    if( jCoordinateOf1 == 0 ){
        jCoordinateOf1_new = 49;
    } else{
        jCoordinateOf1_new = j - 1;
    }
    iCoordinateOf1_new = iCoordinateOf1;
    
    if( document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML == '*'){
        console.log(`length of snake is ${lengthOfSnake}`)
        lengthOfSnake++;
        console.log(`length of after snake is ${lengthOfSnake}`)
        increaseLength(iCoordinateOf1_new, jCoordinateOf1_new, i, j);
        placeFood();
    }else if(document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML == ''){
        document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML = document.getElementById(`${i}_${j}`).innerHTML;
        document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).style.backgroundColor = document.getElementById(`${i}_${j}`).style.backgroundColor;
        
        document.getElementById(`${i}_${j}`).innerHTML = '';
        document.getElementById(`${i}_${j}`).style.backgroundColor = 'maroon';
        follow(iCoordinateOf1_new, jCoordinateOf1_new, i, j);
        
        iCoordinateOf1 = iCoordinateOf1_new;   
        jCoordinateOf1 = jCoordinateOf1_new;
    }else{
        console.log(previous)
        console.log('41845')
        console.log('41845')
        console.log('41845')
        gameOver();
    }
}

function movementRight(i, j){
    console.log('right')
    let jCoordinateOf1_new;
    let iCoordinateOf1_new;
    
    if( jCoordinateOf1 == 49 ){
        jCoordinateOf1_new = 0;
    } else{
        jCoordinateOf1_new = j + 1;
    }
    iCoordinateOf1_new = iCoordinateOf1;
    
    if( document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML == '*'){
        console.log(`length of snake is ${lengthOfSnake}`)
        lengthOfSnake++;
        console.log(`length of after snake is ${lengthOfSnake}`)
        increaseLength(iCoordinateOf1_new, jCoordinateOf1_new, i, j);
        placeFood();
    }else if(document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML == ''){
        document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).innerHTML = document.getElementById(`${i}_${j}`).innerHTML;
        document.getElementById(`${iCoordinateOf1_new}_${jCoordinateOf1_new}`).style.backgroundColor = document.getElementById(`${i}_${j}`).style.backgroundColor;
        
        document.getElementById(`${i}_${j}`).innerHTML = '';
        document.getElementById(`${i}_${j}`).style.backgroundColor = 'maroon';
        follow(iCoordinateOf1_new, jCoordinateOf1_new, i, j);
        
        iCoordinateOf1 = iCoordinateOf1_new;   
        jCoordinateOf1 = jCoordinateOf1_new;
    }else{
        console.log(previous)
        console.log('41845')
        console.log('41845')
        console.log('41845')
        gameOver();
    }
}

function follow(current_i, current_j, blank_i, blank_j){
    let upcoming_i;
    let upcoming_j;
    before_part = document.getElementById(`${current_i}_${current_j}`).innerHTML;
    // console.log(before_part)
    if(before_part <= lengthOfSnake-1){
        let found = false;
        let i1;
        let j1;
        for(i1=0; i1<50 ; i1++){
            for(j1=0 ; j1<50 ; j1++){
                if( document.getElementById(`${i1}_${j1}`).innerHTML-1 == (before_part) )
                {
                    found = true;
                    break;
                }
                
            }
            if(found == true){
                break;
            }
        }
        document.getElementById(`${blank_i}_${blank_j}`).innerHTML = document.getElementById(`${i1}_${j1}`).innerHTML;
        document.getElementById(`${blank_i}_${blank_j}`).style.backgroundColor = document.getElementById(`${i1}_${j1}`).style.backgroundColor;
        document.getElementById(`${i1}_${j1}`).innerHTML = '';
        document.getElementById(`${i1}_${j1}`).style.backgroundColor = 'maroon';
        follow(blank_i, blank_j, i1, j1)
    }
}

function placeFood(){
    let onI = Math.floor(Math.random() * 50);
    let onJ = Math.floor(Math.random() * 50);
    if(document.getElementById(`${onI}_${onJ}`).style.backgroundColor == 'white'){
        placeFood();
    }else{
        document.getElementById(`${onI}_${onJ}`).innerHTML = '*';
    }
}

function foodEaten(){
    placeFood();
}

function increaseLength(starI, starJ, headI, headJ){
    document.getElementById(`${starI}_${starJ}`).innerHTML = document.getElementById(`${headI}_${headJ}`).innerHTML;
    document.getElementById(`${starI}_${starJ}`).style.backgroundColor = 'white';
    console.log(`starI is : ${starI}`)
    console.log(`starJ is : ${starJ}`)

    let i1;
    let j1;
    let counter = 1;
    for(i1=0; i1<50 ; i1++){
        for(j1=0 ; j1<50 ; j1++){
            // if(i1!=starI && j1!=starJ && document.getElementById(`${i1}_${j1}`).innerHTML!='' && document.getElementById(`${i1}_${j1}`).innerHTML!='*'){
            // if(i1!=starI && j1!=starJ && Number.isInteger(document.getElementById(`${i1}_${j1}`).innerHTML)){
            if(i1==starI && j1==starJ){
                console.log('starred')
            }else{
                if(document.getElementById(`${i1}_${j1}`).innerHTML == '' || document.getElementById(`${i1}_${j1}`).innerHTML == '*'){

                }else{

                    counter++;
                    console.log('EATING')
                    let num = document.getElementById(`${i1}_${j1}`).innerHTML;
                    console.log(`nums are ${num}`)
                    document.getElementById(`${i1}_${j1}`).innerHTML = ++num;
                    console.log(`new parts are : ${document.getElementById(`${i1}_${j1}`).innerHTML}`)
                }
            }
        }
    }
    iCoordinateOf1 = starI;   
    jCoordinateOf1 = starJ;   

}

function gameOver(){
    if(previous == 'down'){
        clearInterval(intervalDown)
    }else if(previous == 'up'){
    clearInterval(intervalUp)
    }else if(previous == 'left'){
        clearInterval(intervalLeft)
    }else if(previous == 'right'){
        clearInterval(intervalRight)
    }
    alert('snake died')
}