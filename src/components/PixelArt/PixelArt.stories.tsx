import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import PixelArt, { PixelArtProps } from './PixelArt'

export default {
  title: 'PixelArt/PixelArt',
  component: PixelArt
} as Meta<typeof PixelArt>

// StoryObjではなく、Storyを使用します。
const Template: StoryFn<PixelArtProps> = (args) => <PixelArt {...args} />

export const Default = Template.bind({})
Default.args = {
  imageUri: 'https://source.unsplash.com/random/800x600',
  pixelSize: 10
}
