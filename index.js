

function calculator() {
    let x = parseInt(document.getElementById("x").value)
    let y = parseInt(document.getElementById("y").value)
    let op = document.getElementById("operation").value
    let ans
    if (Number.isNaN(x) || Number.isNaN(y)) {
    document.getElementById("result").textContent = "result: ใส่เลขให้ครบ";
    return;
    }
    if (op == "add") {
        ans = x + y
    }else if (op == "subtract" ) {
        ans = x - y
    }else if (op == "multiply") {
        ans = x * y
    }else if (op == "divide") {
        ans = x / y
    }else {
        ans = x % y
    }
    document.getElementById("result").innerText = "result:" +ans

}
