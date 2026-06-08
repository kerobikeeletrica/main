import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = path.join(__dirname, 'src', 'img')

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  console.log('Pasta src/img criada.')
}

const images = [
  { url: 'https://movamotos.com/__l5e/assets-v1/2dfc3db0-fa52-4063-a3c0-f69bc3ef947a/mova-x13.png', filename: 'moto-x13.png' },
  { url: 'https://movamotos.com/__l5e/assets-v1/43c42b4f-897b-448b-8384-601cc3e45c95/mova-x11.png', filename: 'moto-x11.png' },
  { url: 'https://movamotos.com/__l5e/assets-v1/858f2d93-3fd8-4292-9d3c-f3448d1f8720/mova-tm28.png', filename: 'moto-tm28.png' },
  { url: 'https://movamotos.com/__l5e/assets-v1/15038163-68c5-476d-b4c0-385068d80bea/mova-neo.png', filename: 'moto-neo.png' },
  { url: 'https://movamotos.com/__l5e/assets-v1/6ede60df-2509-4711-a795-863b3c74e7b9/mova-tank.png', filename: 'moto-tank.png' },
  { url: 'https://movamotos.com/__l5e/assets-v1/2a7b4f11-f74f-4964-9058-7707e2ee5290/mova-zub-n400.png', filename: 'moto-zub-n400.png' },
]

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    const lib = url.startsWith('https') ? https : http
    lib.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        fs.unlinkSync(dest)
        download(res.headers.location, dest).then(resolve).catch(reject)
        return
      }
      if (res.statusCode !== 200) {
        file.close()
        fs.unlinkSync(dest)
        reject(new Error(`HTTP ${res.statusCode} para ${url}`))
        return
      }
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', (err) => {
      fs.unlinkSync(dest)
      reject(err)
    })
  })
}

async function run() {
  for (const img of images) {
    const dest = path.join(OUTPUT_DIR, img.filename)
    process.stdout.write(`Baixando ${img.filename}... `)
    try {
      await download(img.url, dest)
      const size = fs.statSync(dest).size
      console.log(`OK (${(size/1024).toFixed(1)} KB)`)
    } catch (err) {
      console.log(`ERRO: ${err.message}`)
    }
  }
  console.log('\n✅ Download concluído! Imagens salvas em src/img/')
}

run()
