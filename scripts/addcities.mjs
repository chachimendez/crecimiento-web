import * as topojson from "topojson-client";
import { geoMercator } from "d3-geo";
import { readFileSync, writeFileSync } from "fs";

const world = JSON.parse(readFileSync("./node_modules/world-atlas/countries-50m.json", "utf8"));
const countries = topojson.feature(world, world.objects.countries);
const arg = countries.features.find(f => f.id === "032");
const flk = countries.features.find(f => f.id === "238");
const merged = { type: "FeatureCollection", features: [arg, flk] };
const W = 520, H = 900;
const proj = geoMercator().fitExtent([[10, 10], [W - 10, H - 10]], merged);

const cities = [
  ["Buenos Aires", -58.38, -34.60],
  ["Cordoba", -64.18, -31.42],
  ["Rosario", -60.65, -32.94],
  ["Mendoza", -68.83, -32.89],
  ["Tucuman", -65.22, -26.81],
  ["Salta", -65.41, -24.78],
  ["Neuquen", -68.06, -38.95],
  ["Bariloche", -71.31, -41.13],
  ["Mar del Plata", -57.55, -38.00],
  ["Resistencia", -58.99, -27.45],
  ["Posadas", -55.90, -27.37],
  ["Comodoro Rivadavia", -67.48, -45.86],
  ["Ushuaia", -68.30, -54.80],
  ["Malvinas", -57.85, -51.69],
];

const data = JSON.parse(readFileSync("./components/argentina-dots.json", "utf8"));
const lit = [];
for (const [name, lon, lat] of cities) {
  const [x, y] = proj([lon, lat]);
  let best = -1, bd = Infinity;
  data.dots.forEach((d, i) => {
    const dist = (d.x - x) ** 2 + (d.y - y) ** 2;
    if (dist < bd) { bd = dist; best = i; }
  });
  if (best >= 0 && Math.sqrt(bd) < 30) lit.push(best);
  else console.log("skipped (far):", name, Math.sqrt(bd).toFixed(0));
}
data.cities = [...new Set(lit)];
writeFileSync("./components/argentina-dots.json", JSON.stringify(data));
console.log("cities mapped:", data.cities.length, data.cities.join(","));
