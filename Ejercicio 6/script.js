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
        const aqua = parseInt(aquaInput.value);
        const emocion = parseInt(emocionInput.value);
        const alegria = parseInt(alegriaInput.value);
        const frescura = parseInt(frescuraInput.value);

        // Calcular las ventas totales
        const precioAqua = 200;
        const precioEmocion = 180;
        const precioAlegria = 160;
        const precioFrescura = 150;

        const ventasTotales = (aqua * precioAqua) + (emocion * precioEmocion) + (alegria * precioAlegria) + (frescura * precioFrescura);

        // Encontrar la fila correspondiente al empleado
        const empleadoRow = Array.from(datosTabla.rows).find(row => row.cells[0].textContent === empleado);

        if (empleadoRow) {
            // Actualizar los valores existentes en la fila
            const ventasAqua = parseInt(empleadoRow.cells[1].textContent);
            const ventasEmocion = parseInt(empleadoRow.cells[2].textContent);
            const ventasAlegria = parseInt(empleadoRow.cells[3].textContent);
            const ventasFrescura = parseInt(empleadoRow.cells[4].textContent);

            empleadoRow.cells[1].textContent = ventasAqua + aqua;
            empleadoRow.cells[2].textContent = ventasEmocion + emocion;
            empleadoRow.cells[3].textContent = ventasAlegria + alegria;
            empleadoRow.cells[4].textContent = ventasFrescura + frescura;
            empleadoRow.cells[5].textContent = (ventasAqua + aqua) * precioAqua + (ventasEmocion + emocion) * precioEmocion + (ventasAlegria + alegria) * precioAlegria + (ventasFrescura + frescura) * precioFrescura + " USD";
        } else {
            // Si el empleado no existe en la tabla, crea una nueva fila
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${empleado}</td>
                <td>${aqua}</td>
                <td>${emocion}</td>
                <td>${alegria}</td>
                <td>${frescura}</td>
                <td>${ventasTotales} USD</td>
            `;
            datosTabla.appendChild(newRow);
        }

        // Limpiar los campos de entrada
        empleadoSelect.value = "";
        aquaInput.value = "0";
        emocionInput.value = "0";
        alegriaInput.value = "0";
        frescuraInput.value = "0";
    });
});
