
lastWorldLen("Hello word ");

function lastWorldLen(myString){
    var stringArray=myString.trim().split(" ");
    var stringArrayLen=stringArray.length;
    var lastWordLen=stringArray[stringArrayLen-1].length;
    console.log(`The last word length is ${lastWordLen}`)
}

isAnagram("listen","silent")
function isAnagram(myString,anotherString){
    var sortString1=myString.split("").sort().join("");
    var sortString2=anotherString.split("").sort().join("");
    if(sortString1==sortString2){
        console.log(`Both ${myString} and ${anotherString} are a Anagram`)
    }else{
        console.log(`Both ${myString} and ${anotherString} are  not a Anagram`)
    }
}