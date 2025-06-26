export function getInnerShapePath(type, params) {
    switch (type) {
        case 'circle':
            return `M ${params.x} ${params.y}
              m -${params.radius}, 0
              a ${params.radius},${params.radius} 0 1,0 ${params.radius * 2},0
              a ${params.radius},${params.radius} 0 1,0 -${params.radius * 2},0`
        case 'rectangle':
            return `M ${params.x - params.width / 2} ${params.y - params.height / 2}
              h ${params.width}
              v ${params.height}
              h -${params.width}
              Z`
        case 'triangle_isocele':
            const { width, height, x, y } = params
            return `M ${x} ${y - height / 2}
              L ${x - width / 2} ${y + height / 2}
              L ${x + width / 2} ${y + height / 2}
              Z`
        
        default:
            return null
    }
}
