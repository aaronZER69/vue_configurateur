export function getRoundedPolygonOutside(points, radius) {
    if (points.length < 3 || radius <= 0) {
        return (
            points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') + ' Z'
        );
    }

    const path = [];
    const len = points.length;

    for (let i = 0; i < len; i++) {
        const prev = points[(i - 1 + len) % len];
        const curr = points[i];
        const next = points[(i + 1) % len];

        // vecteurs
        const v1 = { x: curr.x - prev.x, y: curr.y - prev.y };
        const v2 = { x: next.x - curr.x, y: next.y - curr.y };

        const len1 = Math.hypot(v1.x, v1.y);
        const len2 = Math.hypot(v2.x, v2.y);

        const minLen = Math.min(len1, len2);

        const dist = Math.min(radius, minLen / 3); // limite pour ne pas dépasser les bords

        // points d'entrée et de sortie pour l'arrondi
        const p1 = {
            x: curr.x - (v1.x / len1) * dist,
            y: curr.y - (v1.y / len1) * dist,
        };
        const p2 = {
            x: curr.x + (v2.x / len2) * dist,
            y: curr.y + (v2.y / len2) * dist,
        };

        if (i === 0) {
            path.push(`M ${p1.x} ${p1.y}`);
        } else {
            path.push(`L ${p1.x} ${p1.y}`);
        }

        // petit arrondi convexe
        path.push(`Q ${curr.x} ${curr.y} ${p2.x} ${p2.y}`);
    }

    path.push('Z');
    return path.join(' ');
}
