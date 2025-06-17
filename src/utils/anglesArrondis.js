export default function anglesArrondis(dimensions) {
    const { rayonSupGauche, rayonSupDroit, rayonInfGauche, rayonInfDroit } = dimensions
    const total = rayonSupGauche + rayonSupDroit + rayonInfGauche + rayonInfDroit
    return total > 0 ? 1.5 : 0
}
export function getRoundedPolygonOutside(points, radius) {
    if (points.length < 3 || radius <= 0) {
        return (
            points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') + ' Z'
        );
    }

    const n = points.length;
    const path = [];

    for (let i = 0; i < n; i++) {
        const p0 = points[(i - 1 + n) % n];
        const p1 = points[i];
        const p2 = points[(i + 1) % n];

        const v1 = { x: p1.x - p0.x, y: p1.y - p0.y };
        const v2 = { x: p2.x - p1.x, y: p2.y - p1.y };

        const len1 = Math.hypot(v1.x, v1.y);
        const len2 = Math.hypot(v2.x, v2.y);

        const unitV1 = { x: v1.x / len1, y: v1.y / len1 };
        const unitV2 = { x: v2.x / len2, y: v2.y / len2 };

        const angle = Math.acos(
            (unitV1.x * unitV2.x + unitV1.y * unitV2.y)
        );

        const tangent = Math.tan(angle / 2);
        const segmentLength = radius / tangent;

        const pStart = {
            x: p1.x - unitV1.x * segmentLength,
            y: p1.y - unitV1.y * segmentLength,
        };
        const pEnd = {
            x: p1.x + unitV2.x * segmentLength,
            y: p1.y + unitV2.y * segmentLength,
        };

        const arcSweep = 0; // convex arc
        const largeArc = 0;

        if (i === 0) {
            path.push(`M ${pStart.x} ${pStart.y}`);
        } else {
            path.push(`L ${pStart.x} ${pStart.y}`);
        }

        path.push(
            `A ${radius} ${radius} 0 ${largeArc} ${arcSweep} ${pEnd.x} ${pEnd.y}`
        );
    }

    path.push('Z');
    return path.join(' ');
}
