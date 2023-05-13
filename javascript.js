/*
CONCEPT
j'ai 4 variables : num1 (num1-string & num1-float), num2(num2-string & num2-float), ope (string), res-float 
j'ai aussi un indicateur (indic_ope) qui me dit si l'operateur a ete rentre (true or false)
j'ai aussi un indicateur (indic_res) qui me dit s'il y a un resultat precedent a utiliser (true or false)
Cote utilisateur, il peut cliquer sur X types de bouttons : 
- les nombres (
    si indic_ope=true, le nombre va dans la variable num2-string a la fin de la string, 
    sinon, si indic_res=true, 
        met num1-float a 0, num1-string='' 
        puis le nombre va dans num1-string, 
        indic_res passe a false, 
        met res-float a 0
    si indic_ope=indic_res=false, le nombre va dans la variable num1-string a la fin de la string
- les operateurs (
    va dans la variable operateur 
    ensuite change l'indic_ope en true - pas de check de false
- le signe egal (
    si indic_ope= true
        converti num1 et num2 en float
        fait le calcul et update la valeur de res-float
        affiche res-float dans la zone result
        met result dans num1, met num2 a 0, met l'indic_ope a false
        met indic_res a true
    si indic_ope=false ouvre une fenetre (alert) disant qu'il manque un operateur, l'operation n'est pas complete
- clear (
    met zero dans num1, num2 et resultat, 
    efface la zone result 
    met l'indic_op et indic_res a false)
- back retour a la combinaison de variables du step precedent -> sauvegarde de deux jeux, celui actuel et le precedent
affichage de result : change le text dans la zone result, qui n'est pas un button mais un champ
*/

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

// Main function
let calculator = function(){
    // variable declaration
    var num1_float=0;
    var num1_string='';
    var num2_float=0;
    var num2_string='';
    var res_float=0;
    var ope='';
    var indic_ope=false;
    var indic_res=false;
    let operatorSymbolList=['a','s','m','d'];
    let currentState = {
        num1_float:num1_float,
        num1_string:num1_string,
        num2_float:num2_float,
        num2_string:num2_string,
        res_float:res_float,
        ope:ope,
        indic_ope:indic_ope,
        indic_res:indic_res
    };
    let oldState=Object.assign({},currentState);
    // result zone access
    const resultZone=document.querySelector('.result');
    // recuperation of operator buttons in a list
    for (let j=0;j<operatorSymbolList.length;j++){
        let button=document.querySelector('.'+operatorSymbolList[j]);
        // click event on operator buttons
        button.addEventListener('click',()=>{
            oldState=Object.assign({},currentState);
            if(currentState.indic_res){
                currentState.num1_float=currentState.res_float;
                currentState.num1_string=parseFloat(currentState.res_float);
                currentState.res_float=0;
                currentState.indic_res=false;
            }
            currentState.ope=operatorSymbolList[j];
            currentState.indic_ope=true;
        });
    }
    // recuperation of number buttons in a list d'objets
    for (let i=0;i<10;i++){
        let button = document.querySelector(".b"+i.toString());
        // click event on number buttons
        button.addEventListener('click',()=>{
            oldState=Object.assign({},currentState);
            if(currentState.indic_ope){
                currentState.num2_string+=i.toString();
                resultZone.textContent=currentState.num2_string;
            } else{
                currentState.num1_string+=i.toString();
                resultZone.textContent=currentState.num1_string;
            };        
        });
    }
    
    // recuperation of special buttons : equal, clear and back
    const equalButton=document.querySelector('.equal');
    const clearButton=document.querySelector('.clear');
    const backButton=document.querySelector('.back');
    // click event on equal
    equalButton.addEventListener('click',()=>{
        oldState=Object.assign({},currentState);
        if (currentState.indic_ope){
            currentState.num1_float=parseFloat(currentState.num1_string);
            currentState.num2_float=parseFloat(currentState.num2_string);
            switch(currentState.ope){
                case 'a':
                    currentState.res_float=add(currentState.num1_float,currentState.num2_float);
                    break;
                case 's':
                    currentState.res_float=sub(currentState.num1_float,currentState.num2_float);
                    break;
                case 'm':
                    currentState.res_float=multiply(currentState.num1_float,currentState.num2_float);
                    break;
                case 'd':
                    currentState.res_float=divide(currentState.num1_float,currentState.num2_float);
                    break;
                default:
                    alert('Nothing has been calculated, sorry mate.');
                    break;
            };
            //affiche res_float dans result
            resultZone.textContent=currentState.res_float.toString();
            // new settings
            currentState.num1_float=currentState.res_float;
            currentState.num1_string='';
            currentState.num2_float=0;
            currentState.num2_string='';
            currentState.indic_ope=false;
            currentState.indic_res=true;
        } else {
            alert('The operation has not been done because the operator is missing.');
        }
        
    })
    // click event on clear

    clearButton.addEventListener('click',()=>{
        oldState=Object.assign({},currentState);
        currentState.num1_float=0;
        currentState.num1_string='';
        currentState.num2_float=0;
        currentState.num2_string='';
        currentState.ope='';
        currentState.res_float=0;
        currentState.indic_ope=false;
        currentState.indic_res=false;
        // erase the result zone
        resultZone.textContent='0';
    });    
    // click event on back
    backButton.addEventListener('click',()=>{
        currentState=Object.assign({},oldState);
        // display
        console.log(currentState);
        if(currentState.indic_ope && !(currentState.num2_string=="")){
            console.log('ici');
            console.log(currentState.num2_string);
            resultZone.textContent=currentState.num2_string;
        } else {
            console.log(currentState.num1_string);
            resultZone.textContent=currentState.num1_string;
        }
        
    }); 
}
calculator();