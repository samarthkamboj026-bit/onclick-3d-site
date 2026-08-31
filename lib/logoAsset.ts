/** Compact themed Onclick header mark (SVG — cyan / violet to match site). */
export const LOGO_SRC =
  "data:image/svg+xml," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 96" fill="none">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#67e8f9"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
    <linearGradient id="t" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e0f7fa"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <!-- circuit nodes -->
  <circle cx="18" cy="38" r="3.5" fill="#22d3ee"/>
  <circle cx="28" cy="58" r="2.5" fill="#22d3ee"/>
  <circle cx="34" cy="28" r="2.5" fill="#22d3ee"/>
  <path d="M18 38H32 M28 58H40 M34 28H42" stroke="#22d3ee" stroke-width="1.5" opacity="0.8"/>
  <!-- cursor -->
  <path d="M40 18 L48 62 L58 48 L78 78 L86 70 L66 40 L80 34 Z" fill="url(#g)" stroke="#a5f3fc" stroke-width="1.5"/>
  <!-- click burst -->
  <g transform="translate(88,22)">
    <path d="M0-14 L3-4 L14-4 L5 2 L8 13 L0 6 L-8 13 L-5 2 L-14-4 L-3-4 Z" fill="#f5d0fe" stroke="#c084fc" stroke-width="1"/>
    <circle r="3.5" fill="#fff"/>
  </g>
  <!-- wordmark -->
  <text x="118" y="48" font-family="Arial Black, Arial, sans-serif" font-size="34" font-weight="800" letter-spacing="1.5" fill="url(#t)">ONCLICK</text>
  <text x="118" y="74" font-family="Arial, sans-serif" font-size="14" font-weight="600" letter-spacing="6.5" fill="#67e8f9">INNOVATIONS</text>
</svg>`);
