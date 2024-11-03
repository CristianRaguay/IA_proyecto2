# Manual Usuario para Proyecto de Machine Learning con tytus.js

### Requisitos del sistema

- **Navegador web**: Es compatible con los navegadores Chrome, Firefox o Edge en sus últimas versiones. Asegúrate de que esté habilitado JavaScript.
- **Conexión a Internet**: Necesaria para cargar la biblioteca de gráficos de Google Charts y `tytus.js`.
- **Archivo CSV**: Debe incluir una fila de encabezado con los nombres de las columnas y datos numéricos donde corresponda, especialmente para modelos que requieren variables numéricas.

### Descripción del sistema

Este proyecto es una aplicación de Machine Learning que permite al usuario entrenar y visualizar modelos simples utilizando datos cargados desde archivos CSV. Actualmente, soporta los siguientes algoritmos:

![Texto alternativo](./img/Captura%20de%20pantalla%202024-11-02%20192456.png)

1. **Regresión Lineal**: Para analizar relaciones lineales entre dos variables.
![Texto alternativo](./img/Captura%20de%20pantalla%202024-11-02%20192205.png)

2. **Regresión Polinómica**: Para analizar relaciones no lineales entre dos variables, mediante la especificación de un grado.
![Texto alternativo](./img/Captura%20de%20pantalla%202024-11-02%20192256.png)
3. **KMeans**: Algoritmo de agrupamiento que segmenta los datos en grupos (clusters) basados en su cercanía.
![Texto alternativo](./img/Captura%20de%20pantalla%202024-11-02%20192849.png)
### Características principales

- **Carga de archivos CSV**: El usuario puede cargar archivos CSV para análisis y visualización.
![Texto alternativo](./img/Captura%20de%20pantalla%202024-11-02%20192456.png)
- **Selección de modelo**: Interfaz amigable para seleccionar el modelo de aprendizaje.
![Texto alternativo](./img/Captura%20de%20pantalla%202024-11-02%20192134.png)
- **Parametrización**: Campos interactivos para ajustar parámetros específicos de cada modelo.
- **Gráficos dinámicos**: Utiliza Google Charts para mostrar gráficos interactivos y visuales de los resultados.

- **Mensajes de error**: Verifica la estructura y calidad de los datos, mostrando advertencias si el archivo CSV no cumple con los requisitos.

### Instrucciones de uso

1. **Cargar el archivo CSV**:
    - Haz clic en el botón "Seleccionar archivo" y selecciona el archivo CSV.
    - Confirma que el archivo cargado aparece en el campo correspondiente.

2. **Seleccionar el modelo**:
    - Elige el modelo de Machine Learning deseado en el menú desplegable.
    - Se mostrarán campos de parametrización adicionales, específicos para cada modelo:
        - **Regresión Polinómica**: Especifica el grado.
        - **KMeans**: Define el número de clusters y el número de iteraciones para optimizar la agrupación.

3. **Entrenar el modelo**:
    - Una vez seleccionadas las variables y configurados los parámetros, haz clic en "Entrenar".
    - El modelo se entrenará utilizando los datos cargados, y se mostrará un mensaje de confirmación.

4. **Realizar predicciones**:
    - Haz clic en "Predecir" para ejecutar predicciones o generar agrupaciones en el caso de KMeans.

5. **Visualización de los resultados**:
    - Los resultados se muestran en una gráfica que aparece en la sección de visualización. Los puntos se organizan y colorean en función del modelo de aprendizaje utilizado.

6. **Visualización del gráfico**:
    - Los gráficos muestran relaciones entre las variables en el caso de regresiones y la agrupación en clusters para el modelo KMeans.

### Flujo de trabajo

1. **Cargar el archivo CSV**.
2. **Seleccionar el modelo de aprendizaje**.
3. **Configurar los parámetros** específicos del modelo.
4. **Ejecutar el entrenamiento**.
5. **Realizar predicciones** y visualizar los resultados.

