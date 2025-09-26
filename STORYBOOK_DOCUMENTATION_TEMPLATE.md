# Storybook Documentation Standards

This template provides consistent documentation and control patterns for all story files in the project.

## File Header Documentation

Every story file should start with a comprehensive JSDoc comment:

```typescript
/**
 * ComponentName stories showcasing [brief description of what it demonstrates].
 *
 * The ComponentName component [brief description of purpose and key features].
 * It supports [list key capabilities] and integrates seamlessly with [related components].
 */
```

## Meta Configuration

### Standard Meta Structure

```typescript
const meta: Meta<typeof ComponentName> = {
  title: 'Category/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered', // or 'fullscreen' for layout components
    docs: {
      description: {
        component: `
Brief component description here.

## Features
- **Feature 1**: Description
- **Feature 2**: Description
- **Feature 3**: Description

## Usage
\`\`\`tsx
import { ComponentName } from '@/components/ui/component-name'

<ComponentName prop="value">
  Content
</ComponentName>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
        <Toaster />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    // See argTypes section below
  },
};
```

### ArgTypes Patterns

#### Common Props (use as needed)

```typescript
argTypes: {
  // Variant controls
  variant: {
    control: { type: 'select' },
    options: ['option1', 'option2', 'option3'],
    description: 'The visual variant of the component',
    table: { category: 'Appearance', defaultValue: { summary: 'default' } },
  },

  // Size controls
  size: {
    control: { type: 'select' },
    options: ['sm', 'default', 'lg'],
    description: 'The size variant of the component',
    table: { category: 'Appearance', defaultValue: { summary: 'default' } },
  },

  // Boolean states
  disabled: {
    control: { type: 'boolean' },
    description: 'When true, the component is disabled and cannot be interacted with',
    table: { category: 'State', defaultValue: { summary: 'false' } },
  },

  // Content props
  children: {
    control: { type: 'text' },
    description: 'The content to display inside the component',
    table: { category: 'Content' },
  },

  placeholder: {
    control: { type: 'text' },
    description: 'Placeholder text to display when empty',
    table: { category: 'Content' },
  },

  // Event handlers
  onClick: {
    action: 'clicked',
    description: 'Called when the component is clicked',
    table: { category: 'Events' },
  },

  onValueChange: {
    action: 'value-changed',
    description: 'Called when the value changes',
    table: { category: 'Events' },
  },

  // Styling
  className: {
    control: { type: 'text' },
    description: 'Additional CSS classes to apply',
    table: { category: 'Styling' },
  },
}
```

#### Form-Specific Props

```typescript
// Input/form components
type: {
  control: { type: 'select' },
  options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
  description: 'The type of input field',
  table: { category: 'Configuration', defaultValue: { summary: 'text' } },
},

value: {
  control: { type: 'text' },
  description: 'The current value of the input',
  table: { category: 'State' },
},

name: {
  control: { type: 'text' },
  description: 'The name attribute for the form field',
  table: { category: 'Configuration' },
},

required: {
  control: { type: 'boolean' },
  description: 'When true, the field is required',
  table: { category: 'Validation', defaultValue: { summary: 'false' } },
},
```

#### Overlay/Dialog-Specific Props

```typescript
open: {
  control: { type: 'boolean' },
  description: 'Whether the overlay is open',
  table: { category: 'State', defaultValue: { summary: 'false' } },
},

modal: {
  control: { type: 'boolean' },
  description: 'Whether the overlay should trap focus',
  table: { category: 'Behavior', defaultValue: { summary: 'true' } },
},
```

## Story Documentation

### Individual Story Structure

```typescript
/**
 * Brief description of what this story demonstrates
 */
export const StoryName: Story = {
  args: {
    // Props for the story
  },
  parameters: {
    docs: {
      description: {
        story: 'Detailed description of this story variant, when to use it, and any important notes.',
      },
    },
  },
};
```

### Story Parameters with Accessibility Notes

```typescript
parameters: {
  docs: {
    description: {
      story: `
Story description here.

**Accessibility Notes:**
- Screen reader behavior
- Keyboard navigation details
- ARIA attribute information
- Focus management details
      `,
    },
  },
},
```

### Interactive Stories

```typescript
export const InteractiveStory: Story = {
  render: () => {
    const [state, setState] = useState(defaultValue);

    return (
      <ComponentName
        value={state}
        onChange={setState}
        // other props
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Description of the interactive behavior.',
      },
    },
  },
};
```

## Documentation Categories

Organize argTypes into these standard categories:

- **Content**: Text, children, placeholder, labels
- **Appearance**: Variants, sizes, visual styling
- **State**: Disabled, loading, active, checked states
- **Behavior**: Interactive behaviors, focus, hover
- **Validation**: Required, error states, form validation
- **Configuration**: Name, type, ID, data attributes
- **Events**: Click handlers, change callbacks, form events
- **Styling**: className, custom CSS, theme variants
- **Advanced**: asChild, ref forwarding, custom rendering

## Integration Patterns

### Common Decorators

```typescript
decorators: [
  (Story) => (
    <TooltipProvider>
      <Story />
      <Toaster />
    </TooltipProvider>
  ),
],
```

### Complex Integration Stories

For stories that showcase component integration:

```typescript
export const WithOtherComponents: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Example Integration</CardTitle>
      </CardHeader>
      <CardContent>
        <ComponentName />
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows how ComponentName integrates with Card components for real-world usage patterns.',
      },
    },
  },
};
```

## Usage Examples

### Code Snippets in Documentation

When adding code examples to story descriptions:

````typescript
parameters: {
  docs: {
    description: {
      story: `
Story description here.

\`\`\`tsx
import { ComponentName } from '@/components/ui/component-name'

<ComponentName variant="outline" size="lg">
  Example usage
</ComponentName>
\`\`\`
      `,
    },
  },
},
````

## Best Practices

1. **Consistent Naming**: Use descriptive, consistent naming for stories
2. **Comprehensive Coverage**: Include all variants, sizes, and states
3. **Real-world Examples**: Show integration with other components
4. **Accessibility Documentation**: Include ARIA and keyboard navigation details
5. **Usage Guidance**: Explain when and how to use each variant
6. **Interactive Examples**: Use render functions for stateful components
7. **Error States**: Document error conditions and validation states
8. **Performance Notes**: Include any performance considerations

## Template Checklist

- [ ] File header JSDoc comment
- [ ] Comprehensive meta.parameters.docs.description.component
- [ ] All argTypes with descriptions and categories
- [ ] Individual story JSDoc comments
- [ ] Story-level parameters with descriptions
- [ ] Integration examples with other components
- [ ] Accessibility documentation where relevant
- [ ] Usage code examples
- [ ] Error and validation states covered
- [ ] Interactive stories for stateful components

This template ensures consistent, comprehensive documentation across all story files while providing excellent developer experience in Storybook.