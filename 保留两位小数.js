function oninputs(obj, type) {
    typeof obj === 'string' ? obj : obj = String(obj)
    let num = obj;
    if (num == ".") {
        num = "";
    }
    num = num.replace(/[^\d.]/g, "");
    num = num.replace(/\.{2,}/g, ".");
    num = num.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    num = num.replace(/^(-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
    if (num.indexOf(".") < 0 && num !== "") {
        num = parseFloat(num);
    }
}