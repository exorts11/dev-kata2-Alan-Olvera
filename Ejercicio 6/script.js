document.addEventListener("DOMContentLoaded", function() {
    const empleadoSelect = document.getElementById("empleado");
    const aquaInput = document.getElementById("aqua");
    const emocionInput = document.getElementById("emocion");
    const alegriaInput = document.getElementById("alegria");
    const frescuraInput = document.getElementById("frescura");
    const ingresarDatosBtn = document.getElementById("ingresarDatos");
    const datosTabla = document.getElementById("datosTabla");

    ingresarDatosBtn.addEventListener("click", function() {
        // Obtener los valores de los campos
        const empleado = empleadoSelect.value;
        const aqua = aquaInput.value;
        const emocion = emocionInput.value;
        const alegria = alegriaInput.value;
        const frescura = frescuraInput.value;

        // Crear una nueva fila en la tabla con los datos ingresados
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${empleado}</td>
            <td>${aqua}</td>
            <td>${emocion}</td>
            <td>${alegria}</td>
            <td>${frescura}</td>
        `;

        // Agregar la nueva fila a la tabla
        datosTabla.appendChild(newRow);

        // Limpiar los campos de entrada
        empleadoSelect.value = "";
        aquaInput.value = "";
        emocionInput.value = "";
        alegriaInput.value = "";
        frescuraInput.value = "";
    });
});
