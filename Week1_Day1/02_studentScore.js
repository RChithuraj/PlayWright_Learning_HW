
function calculateGrade(mark){
    switch (true) {
        case (mark==100):
            return "Grade A"
        case mark>=50:
            return "Grade B"
        case mark<50:
            return "Grade C"
        default:
            return "Below Grade"
    }

}

var result=calculateGrade(90)
console.log(result)
