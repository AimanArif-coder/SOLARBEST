document.getElementById("maintenance-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let technician = document.querySelector("[name='technician']").value;
    let site = document.querySelector("[name='site']").value;
    let condition = document.querySelector("[name='inverter-condition']").value;

    if (!technician || !site || !condition) {
        alert("Please fill in all required fields!");
        return;
    }

    alert("Checklist submitted successfully!");
});
