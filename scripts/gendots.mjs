import * as topojson from "topojson-client";
import { geoMercator, geoContains } from "d3-geo";
import { readFileSync, writeFileSync } from "fs";

const world = JSON.parse(readFileSync("./node_modules/world-atlas/countries-50m.json", "utf8"));
const countries = topojson.feature(world, world.objects.countries);
const arg = countries.features.find(f => f.id === "032");
const flk = countries.features.find(f => f.id === "238");
if (!arg || !flk) { console.error("missing", !!arg, !!flk); process.exit(1); }

const merged = { type: "FeatureCollection", features: [arg, flk] };
const W = 520, H = 900;
const proj = geoMercator().fitExtent([[10, 10], [W - 10, H - 10]], merged);

const step = 13.5;
const dots = [];
for (let row = 0; ; row++) {
  const y = 10 + row * step * 0.866;
  if (y > H - 10) break;
  const xoff = row % 2 ? step / 2 : 0;
  for (let col = 0; ; col++) {
    const x = 10 + xoff + col * step;
    if (x > W - 10) break;
    const ll = proj.invert([x, y]);
    if (geoContains(arg, ll) || geoContains(flk, ll)) dots.push([x, y]);
  }
}

const key = (x, y) => `${x.toFixed(2)},${y.toFixed(2)}`;
const inSet = new Set(dots.map(([x, y]) => key(x, y)));
const neigh = (x, y) => {
  let n = 0;
  const dy = step * 0.866;
  const cands = [[x - step, y], [x + step, y], [x - step / 2, y - dy], [x + step / 2, y - dy], [x - step / 2, y + dy], [x + step / 2, y + dy]];
  for (const [cx, cy] of cands) if (inSet.has(key(cx, cy))) n++;
  return n;
};

const out = dots.map(([x, y]) => {
  const n = neigh(x, y);
  const r = 2.2 + (n / 6) * 3.4;
  return { x: +x.toFixed(1), y: +y.toFixed(1), r: +r.toFixed(1) };
});

console.log("dots:", out.length);
writeFileSync("dots.json", JSON.stringify({ W, H, dots: out }));
