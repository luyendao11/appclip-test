import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Express on Vercel</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/api-data">API Data</a>
          <a href="/healthz">Health</a>
        </nav>
        <h1>Welcome to Express on Vercel 🚀</h1>
        <p>This is a minimal example without a database or forms.</p>
        <img src="/logo.png" alt="Logo" width="120" />
      </body>
    </html>
  `)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

// PayPay payment callback - redirect to AppClip
app.get('/paypay-return', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Payment Complete</title>
      </head>
      <body style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; margin:0; font-family:-apple-system,sans-serif; background:#f5f5f5;">
        <div style="background:white; border-radius:16px; padding:40px; text-align:center; box-shadow:0 2px 10px rgba(0,0,0,0.1); max-width:320px; width:90%;">
          <div style="font-size:48px; margin-bottom:16px;">✅</div>
          <h1 style="font-size:20px; color:#333; margin:0 0 8px;">決済完了</h1>
          <p style="font-size:14px; color:#666; margin:0 0 16px;">左上の「◀ PayPay」をタップして<br/>アプリに戻ってください。<br/>自動的にバッテリーが準備されます。</p>
          <div style="background:#FFF5E9; border-radius:12px; padding:16px; margin-top:8px;">
            <p style="font-size:13px; color:#F27E20; margin:0; font-weight:600;">← 左上をタップ</p>
          </div>
        </div>
      </body>
    </html>
  `)
});
export default app
