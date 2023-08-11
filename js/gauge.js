var opts = {
  angle: -0.02,
  lineWidth: 0.26,

  radiusScale: 0.88,
  pointer: {
    length: 0.57,
    strokeWidth: 0.025,
    color: "#31E1D7",
  },
  limitMax: false,
  limitMin: false,
  colorStart: "#6FADCF",
  colorStop: "#8FC0DA",
  strokeColor: "#E0E0E0",
  generateGradient: true,
  highDpiSupport: true,

  staticLabels: {
    font: "12px sans-serif", // Specifies font
    labels: [0, 15, 30, 45, 60, 75, 100], // Print labels at these values
    color: "#31E1D7", // Optional: Label text color
    fractionDigits: 0, // Optional: Numerical precision. 0=round off.
  },

  staticZones: [
    { strokeStyle: "#00E1D7", min: 0, max: 15, height: 0.3 },
    { strokeStyle: "#0BBED5", min: 15, max: 30, height: 0.4 },
    { strokeStyle: "#169BD3", min: 30, max: 45, height: 0.5 },
    { strokeStyle: "#2078D2", min: 45, max: 60, height: 0.7 },
    { strokeStyle: "#2B55D0", min: 60, max: 75, height: 0.9 },
    { strokeStyle: "#3632CE", min: 75, max: 100, height: 1.2 },
  ],
};

var target = document.getElementById("gauge");
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = 100;
gauge.setMinValue(0);
gauge.animationSpeed = 96;
gauge.set(78); 
