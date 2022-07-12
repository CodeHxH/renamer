// Obteniendo los archivos dentro de la ruta seleccionada
const myChilds = document.getElementById('list').children;

// Asignando un nombre dependiendo de su posición
function sort() {
	for (let i = 0; i < myChilds.length - 1; i++) {
		const child = myChilds[i];
		child.name = String(i);
	}
}

sort();
addEventListener('mouseup', sort);

// Rename check
