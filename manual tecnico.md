# Manual Tecnico para Proyecto de Machine Learning con tytus.js

### Estructura del proyecto


### Descripción de los componentes

- **index.html**: Archivo HTML principal, que contiene la estructura de la interfaz de usuario y los elementos de control.
    - **Formulario de carga**: Para seleccionar archivos CSV.
    - **Selectores de modelo**: Menú desplegable para elegir el algoritmo de Machine Learning.
    - **Campos de parametrización**: Entradas dinámicas que aparecen según el modelo seleccionado.
    - **Botones de entrenamiento y predicción**: Ejecutan las acciones de entrenamiento y predicción en los modelos seleccionados.


- **script.js**: Código JavaScript que gestiona la lógica de interacción del usuario y llama a las funciones de `tytus.js`.
    - **parseCSV**: Convierte el contenido de archivos CSV en arrays de datos.
    - **Funciones de entrenamiento y predicción**: Ejemplos: `trainLinearRegression`, `trainPolynomialRegression`, y `trainKMeans`.
    - **Funciones de visualización**: Llama a Google Charts para dibujar los resultados.

- **tytus.js**: Biblioteca de Machine Learning, que implementa algoritmos básicos:
    - **Regresión Lineal**.
    - **Regresión Polinómica**.
    - **KMeans**.

### Algoritmos implementados

1. **Regresión Lineal**: Calcula una línea de mejor ajuste para predecir valores de una variable en función de otra.
    - **Entrenamiento**: Realiza el ajuste usando mínimos cuadrados para obtener la pendiente y la intersección.
    - **Predicción**: Genera predicciones basadas en la ecuación de la línea obtenida.

2. **Regresión Polinómica**: Generaliza la regresión lineal para relaciones no lineales.
    - **Entrenamiento**: Ajusta un polinomio de grado especificado por el usuario.
    - **Predicción**: Genera predicciones con base en el polinomio calculado.

3. **KMeans**: Agrupa datos en clusters en función de su cercanía.
    - **Inicialización**: Elige aleatoriamente los centros de los clusters.
    - **Asignación**: Asigna cada punto al cluster más cercano.
    - **Reajuste**: Recalcula los centros de los clusters hasta que los datos se estabilicen o se alcance el número máximo de iteraciones.

### Funciones principales

- **parseCSV(csv)**: Convierte un archivo CSV en un array de objetos, utilizando los encabezados de la primera fila como nombres de claves.
- **updateVariableSelectors(headers)**: Rellena los selectores de variables en función de los nombres de columnas del CSV.
- **trainLinearRegression(data, inputVar, outputVar)**: Entrena un modelo de Regresión Lineal y calcula los coeficientes de la ecuación de la línea de mejor ajuste.
- **trainPolynomialRegression(data, inputVar, outputVar, degree)**: Entrena un modelo de Regresión Polinómica según el grado especificado.
- **trainKMeans(data, k, iterations)**: Ejecuta KMeans en los datos cargados, dividiendo en clusters especificados.
- **drawChart(clusterized_data)**: Muestra una gráfica de los clusters generados por KMeans.

### Dependencias

1. **Google Charts**: Utilizado para los gráficos de visualización.
   - **Enlace**:
   ```html
   <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
