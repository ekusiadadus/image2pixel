import React, { useState } from 'react'
import PixelArt from './components/PixelArt/PixelArt'

function App() {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [pixelSize, setPixelSize] = useState<number>(10)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    if (file) {
      setImageFile(file)
    }
  }

  return (
    <div className='App' role='main'>
      <article className='App-article'>
        <h3>Welcome to React!</h3>
        <input
          type='file'
          onChange={handleFileChange}
          accept='image/png,image/jpeg'
        />

        {/* change pixelsize */}

        <input
          type='number'
          value={pixelSize}
          onChange={(event) => setPixelSize(Number(event.target.value))}
        />

        {imageFile && <PixelArt image={imageFile} pixelSize={pixelSize} />}
      </article>
    </div>
  )
}

export default App
