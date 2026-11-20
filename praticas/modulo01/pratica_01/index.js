
function calc() {
    const price = Number(document.getElementById('price').value);
    let quantity = Number(document.getElementById('quantity').value);
    const result = document.getElementById("result");

    if (price <= 0 ) {
        return;
    }

    quantity = (quantity <= 0) ? 1 : quantity;

    const total = price * Number(quantity.toFixed(0));

    result.textContent = `total: R$ ${total.toFixed(2)}`;
}