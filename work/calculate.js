const fs = require('fs')
const path = require('path')

let size = 0
function calculate(dir) {
    const dirs = fs.readdirSync(dir)
    dirs.forEach(item => {
        const p = path.join(dir, item)
        const stat = fs.statSync(p)
        if (stat.isFile()) {
            size += stat.size
        } else {
            calculate(p)
        }
    })
}

calculate('./staticServer')
console.log(`目录下文件总大小是：${size}字节`)