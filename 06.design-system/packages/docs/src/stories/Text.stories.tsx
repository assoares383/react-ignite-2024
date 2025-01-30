import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@asstech-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo vel porro nobis iure alias vitae quibusdam quasi veritatis accusamus enim atque cum, expedita obcaecati aut asperiores laboriosam, rerum cupiditate.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
