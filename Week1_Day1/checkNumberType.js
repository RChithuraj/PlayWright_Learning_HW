
var result=(checkNumberType(-1))
console.log(result);

function checkNumberType(inputNum){
    if(inputNum>0){
        return "Entered number is Greater than 0";
    }
    else if(inputNum<0){
        return "Entered number is Smaller than 0"
    }else{
        return "Number is not smaller or greater than 0"
    }
}