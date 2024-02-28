import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'

import { Text } from './Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Text/Text',
  component: Text
} as Meta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryObj<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: 'hello, world'
}
