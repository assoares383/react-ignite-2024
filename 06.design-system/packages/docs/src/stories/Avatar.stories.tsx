import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@asstech-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/15836394?v=4',
    alt: 'Alexandre Soares',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
