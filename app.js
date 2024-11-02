let model; // Define model at the top-level scope

// Función para leer el archivo CSV y convertirlo en un formato utilizable
function readCSV(file, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = event.target.result;
        const parsedData = Papa.parse(data, { header: true });
        callback(parsedData.data);
    };
    reader.readAsText(file);
}

// Función para iniciar el entrenamiento
function trainModel(data) {
    const selectedAlgorithm = document.getElementById('algorithmSelect').value;
    const trainPercentage = document.getElementById('trainPercentage').value / 100;
    const testPercentage = document.getElementById('testPercentage').value / 100;
    const modelArguments = document.getElementById('specificArguments').value;

    // Instancia y entrenamiento del modelo con tytus.js
    model = new tytus.ML[selectedAlgorithm](modelArguments);
    model.train({
        data,
        trainPercentage,
        testPercentage,
        onComplete: (results) => {
            console.log("Entrenamiento completo", results);
            // Mostrar gráficos u otros resultados
            showGraphs(results);
        }
    });
}

// Función para realizar predicciones
function predict() {
    if (model) {
        const predictionRange = document.getElementById('predictionRange').value.split(',').map(Number);
        const predictions = model.predict(predictionRange);
        console.log("Predicciones:", predictions);
    } else {
        console.error("Modelo no entrenado. Por favor, entrena el modelo primero.");
    }
}

// Función para mostrar gráficos
function showGraphs(results) {
    if (results && results.labels && results.trainData && results.testData) {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: results.labels,
                datasets: [{
                    label: 'Datos de entrenamiento',
                    data: results.trainData,
                    borderColor: 'blue',
                    fill: false
                }, {
                    label: 'Datos de prueba',
                    data: results.testData,
                    borderColor: 'red',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
            }
        });
    } else {
        console.error("No hay datos para mostrar en el gráfico.");
    }
}

document.getElementById('trainButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput').files[0];
    if (fileInput) {
        readCSV(fileInput, (data) => {
            trainModel(data);
        });
    } else {
        alert("Por favor, selecciona un archivo CSV.");
    }
});

document.getElementById('predictButton').addEventListener('click', () => {
    predict();
});

document.getElementById('showGraphsButton').addEventListener('click', () => {
    const results = model.getResults(); // Asegúrate de tener una forma de obtener los resultados del modelo
    showGraphs(results);
});

// Mostrar u ocultar entradas adicionales basadas en el tipo de modelo seleccionado
document.getElement