# Portfolio personal

# Componente Porfolio:
- Recopila un mock de proyectos, para posibilitar su filtrado. El componente utiliza la función useEffect de React para actualizar el estado de projects1 cada vez que la opción de filtrado cambia. El valor de la opción se guarda en el estado option.
- La función useEffect se ejecuta cada vez que se produce un cambio en la variable option. La función utiliza una promesa para asegurarse de que los datos de los proyectos estén disponibles antes de filtrarlos. Si la opción seleccionada es diferente a "Todos", la función filtra los proyectos según la categoría correspondiente y actualiza el estado de projects1 con los proyectos filtrados. Si la opción seleccionada es "Todos", todos los proyectos se muestran en la lista.
- El componente utiliza un botón desplegable para mostrar las opciones de filtrado. El estado de open controla si el menú desplegable está abierto o cerrado. Cuando se hace clic en una opción de filtrado, la función setOption actualiza el estado de option.
- Finalmente, el componente muestra la lista de proyectos utilizando el componente ProjectsList que recibe como prop el estado projects1 y la opción de filtrado.




