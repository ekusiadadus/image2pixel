import React, { useState, useEffect } from 'react'
import PixelArt from './components/PixelArt/PixelArt'

function App() {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [pixelSize, setPixelSize] = useState<number>(3)

  // 画像URLを状態として保持
  const [imageUrl, setImageUrl] = useState<string>('/static/breakai.png')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    if (file) {
      setImageFile(file)
      setImageUrl(URL.createObjectURL(file)) // ファイルからURLを生成
    }
  }

  return (
    <div className='App' role='main'>
      <div
        className='
        flex flex-col items-center justify-center
      '
        style={{
          height: '100vh',
          textAlign: 'center',
          flex: 1,
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <h3>Welcome to Image2Pixel!</h3>
        <p>
          This app converts an image to pixel art. Choose an image file and
          specify the pixel size.
        </p>
        <PixelArt pixelSize={pixelSize} image={imageFile} imageUri={imageUrl} />

        <input
          type='file'
          onChange={handleFileChange}
          accept='image/png,image/jpeg'
        />
        <input
          value={pixelSize}
          type='range'
          onChange={(event) => setPixelSize(Number(event.target.value))}
        />
        {/* 画像URLまたはアップロードされたファイルを使用 */}
      </div>
    </div>
  )
}

export default App
