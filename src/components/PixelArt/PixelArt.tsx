import React, { useEffect, useRef } from 'react'

export interface PixelArtProps {
  image?: File | null // 画像ファイル
  imageUri?: string // 画像のURI
  pixelSize: number // ピクセルのサイズ（大きくするほど荒くなる）
}

export const PixelArt: React.FC<PixelArtProps> = ({
  image,
  imageUri,
  pixelSize
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current && (image || imageUri)) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = new Image()

      img.onload = () => {
        const { width, height } = img
        // キャンバスのサイズを画像のサイズに設定
        canvas.width = width
        canvas.height = height

        // 画像をキャンバスに描画
        ctx?.drawImage(img, 0, 0)

        // 画像をピクセル化
        for (let y = 0; y < height; y += pixelSize) {
          for (let x = 0; x < width; x += pixelSize) {
            const imageData = ctx?.getImageData(x, y, pixelSize, pixelSize)
            const avgColor = getAverageColor(imageData)

            // 平均色でピクセルを描画
            if (ctx) {
              ctx.fillStyle = `rgb(${avgColor.r}, ${avgColor.g}, ${avgColor.b})`
              ctx.fillRect(x, y, pixelSize, pixelSize)
            }
          }
        }
      }

      if (image) {
        // 画像ファイルを読み込む
        const reader = new FileReader()
        reader.onload = (e) => {
          img.src = e.target?.result as string
        }
        reader.readAsDataURL(image)
      } else if (imageUri) {
        // 画像URIを直接設定
        img.src = imageUri
      }
    }
  }, [image, imageUri, pixelSize])

  // 平均色を計算する関数
  function getAverageColor(imageData: ImageData | undefined) {
    const data = imageData?.data
    let r = 0
    let g = 0
    let b = 0
    let count = 0

    if (data) {
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
        count++
      }
    }

    return { r: r / count, g: g / count, b: b / count }
  }

  return <canvas ref={canvasRef} />
}

export default PixelArt
