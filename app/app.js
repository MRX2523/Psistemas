function calcularEdad() {
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    if (fechaNacimiento) {
        const fechaNac = new Date(fechaNacimiento);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
            edad--;
        }
        document.getElementById('resultado-edad').textContent = `Su edad es: ${edad} años`;
    } else {
        document.getElementById('resultado-edad').textContent = 'Por favor, ingrese una fecha válida.';
    }
}

function calcularSalarioNeto() {
    const horasTrabajadas = parseFloat(document.getElementById('horas-trabajadas').value);
    const pagoPorHora = parseFloat(document.getElementById('pago-por-hora').value);
    
    if (horasTrabajadas && pagoPorHora) {
        const salarioBruto = horasTrabajadas * pagoPorHora;
        const descuento = salarioBruto * 0.2;
        const salarioNeto = salarioBruto - descuento;
        document.getElementById('resultado-salario').textContent = `Salario Neto: S/. ${salarioNeto.toFixed(2)}`;
    } else {
        document.getElementById('resultado-salario').textContent = 'Por favor, ingrese valores válidos para horas y pago por hora.';
    }
}
