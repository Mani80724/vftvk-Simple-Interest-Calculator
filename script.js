function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        var interest = principal * years * rate / 100;
        var year_count = new Date().getFullYear() + parseInt(years);

        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
            "at an interest rate of <mark>" + rate + "%</mark>,<br/>" +
            "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
            "in the year <mark>" + year_count + "</mark>";
    }
}

function getrange(x) {
    document.getElementById("slider_value").innerHTML = x + "%";
}