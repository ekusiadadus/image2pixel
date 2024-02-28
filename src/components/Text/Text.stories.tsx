import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Text, TextProps } from './Text'

export default {
  title: 'Text/Text',
  component: Text
} as Meta<typeof Text>

// StoryObjではなく、Storyを使用します。
const Template: StoryFn<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'hello, world'
}
