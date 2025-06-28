function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5,6);
// const sum = add(5);
// const sum = add();



// default  --> if value is not provided, take this as a default.

function add2(num3 = 0, num4=1){
    const result = num3 + num4;
    console.log(num3, num4, result);
    return result;
}

// const sum2 = add2(5,6);
// const sum3 = add2(5);
// const sum4 = add2();


function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full;
}


function friends(numbs = []){

}

function person(human ={}){
    
}




