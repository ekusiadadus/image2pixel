import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    title: 'button',
    onClick: () => {}
  }
} as Meta<typeof Button>

export const Default: StoryObj<typeof Button> = {
  args: {
    title: 'Default ボタン！！'
  }
}

export const DifferentText: StoryObj<typeof Button> = {
  args: {
    title: '違うテキスト'
  }
}
