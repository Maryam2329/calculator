const container = document.querySelector('body');
container.style.display='flex';
container.style.flexDirection='column';

// test of object creation
/*
let objecttest = {
    symbol: symbol,
    button : button
}*/

// BUTTONS CREATION

// all number button creations
let numberButtonList =[];
for (i=1;i<10;i++){
    const button= document.createElement('button');
    button.style.width='70px';
    button.style.height='70px';
    button.textContent = i.toString();
    button.style.fontSize='30px';
    button.style.border="2px solid darkblue";
    if(i % 2 == 0){
        button.style.backgroundColor='darkgreen';
    } else {
        button.style.backgroundColor='lightpink';
    }
    button.style.color='black';
    button.style.borderRadius='50%';
    button.style.margin='15px'; 
    let buttonObject = {
        symbol : i,
        button : button
    };
    numberButtonList.push(buttonObject);
    //container.appendChild(buttonObject.button);
}
/*
for (i=0;i<numberButtonList.length;i++){
    console.log('yo'+i);
    container.appendChild(numberButtonList[i].button);
}*/

// defining the operator button
let operatorButtonList=[];
for (i in operator=['+','-','*','%']){
    const button= document.createElement('button');
    button.style.width='70px';
    button.style.height='70px';
    button.textContent = operator[i].toString();
    button.style.fontSize='30px';
    button.style.border="2px solid darkblue";
    button.style.backgroundColor='yellow';
    button.style.color='black';
    button.style.borderRadius='50%';
    button.style.margin='15px';
    let buttonObject = {
        symbol : operator[i].toString(),
        button : button
    };
    operatorButtonList.push(buttonObject);
    //container.appendChild(buttonObject.button);
}

// defining button 0 and =
let zeroAndEqualButtonList =[];
for (i in operator=['0','=']){
    const button= document.createElement('button');
    button.style.width='170px';
    button.style.height='70px';
    button.textContent = operator[i].toString();
    button.style.fontSize='30px';
    button.style.border="2px solid darkblue";
    if (i==0){
        button.style.backgroundColor='darkgreen';
    } else {
        button.style.backgroundColor='orange';
    }
    button.style.color='black';
    button.style.borderRadius='50%';
    button.style.margin='15px';
    let buttonObject = {
        symbol : operator[i].toString(),
        button : button
    };
    zeroAndEqualButtonList.push(buttonObject);
    //container.appendChild(buttonObject.button);
}

// result button
const resultButton= document.createElement('button');
resultButton.style.width='270px';
resultButton.style.height='70px';
resultButton.textContent = 'Here is your operation';
resultButton.style.fontSize='30px';
resultButton.style.border="2px solid darkblue";
resultButton.style.backgroundColor='orange';
resultButton.style.color='black';
resultButton.style.borderRadius='15%';
resultButton.style.margin='15px';
let resultButtonObject = {
    symbol : 'Here is your operation',
    button : resultButton
};
//container.appendChild(resultButtonObject.button);

// create 3 divs for the three parts (each one is a flex box), 
//and construct them one by one NB : the middle div might need a flex1

// SUBCONTAINER 3
const subcontainer3 = document.createElement('div');
subcontainer3.style.display='flex';
subcontainer3.appendChild(resultButtonObject.button);
subcontainer3.appendChild(operatorButtonList[operatorButtonList.length-1].button);
container.appendChild(subcontainer3);

// SUBCONTAINER 2 and childs
let subcontainer2array =[];
for (i=2;i>-1;i--){
    subcontainer2array[i] = document.createElement('div');
    subcontainer2array[i].style.display='flex';
    let jstart =(numberButtonList.length-1)-3*(2-i);
    let jend=(numberButtonList.length-1)-3*(3-i); // 3 is in fact operatorButtonList.length-2 but im lazy
    for (j=jstart;j>jend;j--){ 
        console.log('test');
        subcontainer2array[i].appendChild(numberButtonList[j].button);
        console.log('testpasse');
    }
    subcontainer2array[i].appendChild(operatorButtonList[i].button);
    container.appendChild(subcontainer2array[i]);
}

// SUBCONTAINER 1
const subcontainer1 = document.createElement('div');
subcontainer1.style.display='flex';
for (i=0;i<zeroAndEqualButtonList.length;i++){
    subcontainer1.appendChild(zeroAndEqualButtonList[i].button);
}
container.appendChild(subcontainer1);

// functions add, sub, multiply, divide
let add = function (number1,number2){
    return number1+number2;
};

let sub = function (number1,number2){
    return number1-number2;
};

let multiply = function (number1,number2){
    return number1*number2;
};

let divide = function (number1,number2){
    return number1/number2;
};

// click events and actual calculation
let calculator = function (){
    let firstOperand=0;
    let secondOperand=0;
    let Operator='';
    // pour les clicks sur numeros, je sais pas trop comment faire pour l'ordre
    // rajouter un clear button
    for (i=0;i<operatorButtonList.length;i++){
        operatorButtonList[i].button.addEventListener('click',()=>{
            // transformer les list de button numeros/operator/etc en listes d'objects, avec 2 clés : le character affiché et l'objet
        });
    }
}