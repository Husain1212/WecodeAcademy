function details(){
    let first = document.getElementById("Firstname").value
    let fathername = document.getElementById("Fname").value
    let dob = document.getElementById("DOB").value
    let mobile = document.getElementById("Mobile").value
    let course = document.getElementById("Course").value

    if(!first){
        alert("please enter your name")
    } if(!fathername){
        alert("please enter your Father name")
    } if(!dob){
        alert("please enter your date of birth")
    } if(!mobile){
        alert("please enter your mobilr number")
    }
}