document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pizza-order-form');
    const totalCost = document.getElementById('total-cost');
    const sizeRadios = document.querySelectorAll('input[name="size"]');
    const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]');
    const deliverySelect = document.getElementById('delivery');

    function calculateTotalCost() {
        let basePrice = 0;
        let toppingsPrice = 0;
        let deliveryPrice = 0;

        // Calculate base price based on selected pizza size
        for (const radio of sizeRadios) {
            if (radio.checked) {
                basePrice = parseFloat(radio.getAttribute('data-price'));
                break;
            }
        }

        // Calculate toppings price (first 4 toppings are free)
        let selectedToppings = Array.from(toppingsCheckboxes).filter(checkbox => checkbox.checked);
        if (selectedToppings.length > 4) {
            toppingsPrice = (selectedToppings.length - 4) * 0.50;
        }

        // Calculate delivery price
        deliveryPrice = parseFloat(deliverySelect.options[deliverySelect.selectedIndex].getAttribute('data-price'));

        // Calculate total cost
        const total = basePrice + toppingsPrice + deliveryPrice;
        totalCost.textContent = '€ ' + total.toFixed(2) ;
    }

    // Attach event listeners to form elements
    sizeRadios.forEach(radio => {
        radio.addEventListener('change', calculateTotalCost);
    });

    toppingsCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotalCost);
    });

    deliverySelect.addEventListener('change', calculateTotalCost);

    // Calculate initial total cost
    calculateTotalCost();

    // Prevent form submission 
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Order Placed! Total Cost: ' + totalCost.textContent);
    });
});
