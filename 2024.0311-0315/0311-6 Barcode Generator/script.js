let input = document.getElementById("input");
let btn = document.getElementById("btn-barcode-generator");
btn.addEventListener("click", () => {
    JsBarcode("#barcode", input.value, {
        format: "code128",
        displayValye: true,
        fontSize: 24,
        LineColor: "#000",
    });
});

window.onload = (event) => {
    input.value = ";"
};