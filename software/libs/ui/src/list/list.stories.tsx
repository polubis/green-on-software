import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './list';
import { ListItem } from './list-item';

export default {
  component: List,
  title: 'List',
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <ListItem key={0}>First item,</ListItem>,
    <ListItem key={1}>Second item,</ListItem>,
    <ListItem key={2}>Last item.</ListItem>,
  ],
};
