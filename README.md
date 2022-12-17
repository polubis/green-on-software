# green-on-software

## Storybook

### How to add storybook?

1. `cd software`
2. `npx nx g @nrwl/react:storybook-configuration ui` - creates storybook configuration with some template stories.

### How to run storybook?

1. `cd software`
2. `npx nx run ui:storybook` - creates storybook configuration with some template stories.

## Generating next js app

1. `npx nx g @nrwl/next:app platform`

### Adding tailwind to next js app

1. `nx g @nrwl/react:setup-tailwind --project=platform`

## Removing

1. `npx nx g rm blog`

## Working with libraries

### Adding react lib with storybook

1. `cd software`
2. `npx nx g @nrwl/react:library ui`
