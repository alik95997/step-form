function checkValue(ele) {
    let nameError = document.getElementById("nameError");
    
    if (ele.value.length < 3) {
        nameError.innerHTML = "Name should be more than 3"
        nameError.style.display = "inline-block";
        nameError.style.color = "red";

    }
    else {
        nameError.style.display = "none";
    }
}