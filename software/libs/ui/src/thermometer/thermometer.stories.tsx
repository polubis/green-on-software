import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Thermometer } from './thermometer';

export default {
  component: Thermometer,
  title: 'Thermometer',
} as ComponentMeta<typeof Thermometer>;

const Template: ComponentStory<typeof Thermometer> = (args) => (
  <Thermometer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
