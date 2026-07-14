const NUM_RAYS = 20;
const INNER_R = 9;
const OUTER_R = 21;
const CENTER_R = 5.5;
const SPREAD = 0.09;

const rays = Array.from({ length: NUM_RAYS }, (_, i) => {
  const angle = ((i * (360 / NUM_RAYS)) - 90) * (Math.PI / 180);
  const x1 = (24 + INNER_R * Math.cos(angle - SPREAD)).toFixed(2);
  const y1 = (24 + INNER_R * Math.sin(angle - SPREAD)).toFixed(2);
  const x2 = (24 + OUTER_R * Math.cos(angle)).toFixed(2);
  const y2 = (24 + OUTER_R * Math.sin(angle)).toFixed(2);
  const x3 = (24 + INNER_R * Math.cos(angle + SPREAD)).toFixed(2);
  const y3 = (24 + INNER_R * Math.sin(angle + SPREAD)).toFixed(2);
  return `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`;
});

const rayPath = rays.join(" ");

export default function SunIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true">
      <path d={rayPath} />
      <circle cx="24" cy="24" r={CENTER_R} />
    </svg>
  );
}
