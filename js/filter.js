// Select elementlerini alıyoruz
let timeFilterElement = document.querySelector('.row1-leftside-select select[name="Son 7 Gün"]');
let comparisonFilterElement = document.querySelector('.row1-leftside-select select[name="Adete Göre Kıyasla"]');

timeFilterElement.addEventListener("change", function () {
    updateCharts(this.value, comparisonFilterElement.value);
});

comparisonFilterElement.addEventListener("change", function () {
    updateCharts(timeFilterElement.value, this.value);
});

function updateCharts(timeFilter, comparisonFilter) {
    let data;

    if (timeFilter === "last7Days") {
        data = getLast7DaysData();
    } else if (timeFilter === "last30Days") {
        data = getLast30DaysData();
    }

    if (comparisonFilter === "option1") { // "option1", "option2" yerine gerçek opsiyon isimlerini koyunuz.
        // ...
    } else if (comparisonFilter === "option2") {
        // ...
    }

    trendyol.data.datasets[0].data = data;
    trendyol.update();

    hepsiBurada.data.datasets[0].data = data;
    hepsiBurada.update();

    amazon.data.datasets[0].data = data;
    amazon.update();

    cicekSepeti.data.datasets[0].data = data;
    cicekSepeti.update();

    n11.data.datasets[0].data = data;
    n11.update();
}

function getLast7DaysData() {
    return [60, 65, 80, 70, 40, 90, 80];
}

function getLast30DaysData() {
    return [60, 65, 80, 70, 40, 90, 80, 50, 40, 40, 50, 100, 400, 500, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350];
}

// ---------------