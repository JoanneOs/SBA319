document.getElementById('deliveryForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const delivery = {
        item: document.getElementById('item').value,
        destination: document.getElementById('destination').value,
        deliveryDate: document.getElementById('deliveryDate').value
    };

    await fetch('/deliveries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(delivery)
    });

    // Clear form inputs after submission
    document.getElementById('deliveryForm').reset();
    
    // Fetch and display the updated deliveries
    displayDeliveries();
});

async function displayDeliveries() {
    const res = await fetch('/deliveries');
    const deliveries = await res.json();
    
    const deliveriesList = document.getElementById('deliveriesList');
    deliveriesList.innerHTML = '';  // Clear previous list

    deliveries.forEach(delivery => {
        const deliveryItem = document.createElement('p');
        deliveryItem.textContent = `${delivery.item} to ${delivery.destination} on ${new Date(delivery.deliveryDate).toLocaleDateString()}`;
        deliveriesList.appendChild(deliveryItem);
    });
}

// Display deliveries when the page loads
displayDeliveries();
