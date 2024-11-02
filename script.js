// script.js
let data = null; // Variable para almacenar los datos del CSV
let model = null; // Variable para el modelo

// Cargar el archivo CSV
document.getElementById("file-input").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            data = parseCSV(e.target.result);

            // Asumimos que la primera fila contiene los nombres de las columnas
            const headers = data[0];
            populateColumnSelectors(headers);

            document.getElementById("output").innerText = "Archivo CSV cargado correctamente.";
        };
        reader.readAsText(file);
    }
});

// Llenar selectores de columnas
function populateColumnSelectors(headers) {
    const xColumnSelect = document.getElementById("x-column");
    const yColumnSelect = document.getElementById("y-column");
    
    xColumnSelect.innerHTML = "";
    yColumnSelect.innerHTML = "";
    
    headers.forEach((header, index) => {
        const optionX = new Option(header, index);
        const optionY = new Option(header, index);
        xColumnSelect.add(optionX);
        yColumnSelect.add(optionY);
    });
}

// Función para parsear CSV
function parseCSV(data) {
    const rows = data.trim().split("\n");
    return rows.map(row => row.split(","));
}

// Entrenar el modelo
function trainModel() {
    const modelType = document.getElementById("model-select").value;
    const trainPercentage = parseFloat(document.getElementById("train-percentage").value) / 100;

    if (data) {
        const xColumnIndex = parseInt(document.getElementById("x-column").value);
        const yColumnIndex = parseInt(document.getElementById("y-column").value);

        const xTrain = data.slice(1).map(row => parseFloat(row[xColumnIndex]));
        const yTrain = data.slice(1).map(row => parseFloat(row[yColumnIndex]));

        if (modelType === "linear-regression") {
            model = new LinearRegression();
            model.fit(xTrain, yTrain);
            document.getElementById("output").innerText = "Modelo de regresión lineal entrenado correctamente.";
            showGraph(xTrain, yTrain);
        }
    } else {
        alert("Por favor, carga un archivo CSV antes de entrenar el modelo.");
    }
}

// Realizar una predicción
function predict() {
    if (!model) {
        alert("Primero entrena el modelo antes de hacer una predicción.");
        return;
    }

    const inputValue = parseFloat(prompt("Ingresa el valor de X para la predicción:"));
    const prediction = model.predict([inputValue]);

    document.getElementById("output").innerText = `Resultado de la predicción para X=${inputValue}: ${prediction}`;
}

// Mostrar gráficos (ejemplo básico de gráfico de tendencia)
function showGraph(xTrain, yTrain) {
    const yPredict = model.predict(xTrain);

    const chartData = [["X", "Y Train", "Y Predict"]];
    for (let i = 0; i < xTrain.length; i++) {
        chartData.push([xTrain[i], yTrain[i], yPredict[i]]);
    }

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(() => drawChart(chartData));
}

function drawChart(chartData) {
    const data = google.visualization.arrayToDataTable(chartData);
    const options = {
        title: 'Regresión Lineal - Datos de Entrenamiento vs Predicción',
        seriesType : 'scatter',
        series: {1: {type: 'line'}},
        width: 900,
        height: 500
    };  
    const chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
