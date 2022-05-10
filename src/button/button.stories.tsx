import { ButtonStory, Button, type ButtonProps } from './button'
import { Meta, Story } from '@storybook/react';

export default {
  title: 'ButtonStory',
  component: Button
} as Meta

export const Primary = ({...args}) => <Button {...args} />