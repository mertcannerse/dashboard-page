var opts = {
  angle: -0.02, // The span of the gauge arc
  lineWidth: 0.26, // The line thickness

  radiusScale: 0.88, // Relative radius
  pointer: {
    length: 0.57, // // Relative to gauge radius
    strokeWidth: 0.025, // The thickness
    color: "#31E1D7", // Fill color
  },
  limitMax: false, // If false, max value increases automatically if value > maxValue
  limitMin: false, // If true, the min value of the gauge will be fixed
  colorStart: "#6FADCF", // Colors
  colorStop: "#8FC0DA", // just experiment with them
  strokeColor: "#E0E0E0", // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true, // High resolution support

  staticLabels: {
    font: "12px sans-serif", // Specifies font
    labels: [0, 15, 30, 45, 60, 75, 100], // Print labels at these values
    color: "#31E1D7", // Optional: Label text color
    fractionDigits: 0, // Optional: Numerical precision. 0=round off.
  },

  staticZones: [
    { strokeStyle: "#00E1D7", min: 0, max: 15, height: 0.3 }, // Red from 100 to 130
    { strokeStyle: "#0BBED5", min: 15, max: 30, height: 0.4 }, // Yellow
    { strokeStyle: "#169BD3", min: 30, max: 45, height: 0.5 }, // Green
    { strokeStyle: "#2078D2", min: 45, max: 60, height: 0.7 }, // Yellow
    { strokeStyle: "#2B55D0", min: 60, max: 75, height: 0.9 }, // Green
    { strokeStyle: "#3632CE", min: 75, max: 100, height: 1.2 }, // Green
  ],
};

var target = document.getElementById("gauge"); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 100; // set max gauge value
gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 96; // set animation speed (32 is default value)
gauge.set(78); // set actual value
