import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'A-Foundations/Shadows',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ShadowExample = ({
  shadowClass,
  label,
  description,
  cssValue
}: {
  shadowClass: string;
  label: string;
  description: string;
  cssValue: string;
}) => (
  <div className="space-y-4">
    <div className="flex items-center justify-center">
      <div className={`w-32 h-24 bg-background border rounded-lg ${shadowClass} flex items-center justify-center`}>
        <div className="text-center">
          <div className="font-medium text-sm">{label}</div>
          <div className="text-xs text-muted-foreground font-mono mt-1">{shadowClass}</div>
        </div>
      </div>
    </div>
    <div className="text-center space-y-1">
      <div className="text-sm font-medium">{description}</div>
      <div className="text-xs text-muted-foreground font-mono">{cssValue}</div>
    </div>
  </div>
);

export const ElevationScale: Story = {
  render: () => {
    const shadows = [
      {
        shadowClass: 'shadow-none',
        label: 'None',
        description: 'No elevation - flat elements',
        cssValue: 'box-shadow: 0 0 #0000'
      },
      {
        shadowClass: 'shadow-sm',
        label: 'Small',
        description: 'Subtle elevation - cards, inputs',
        cssValue: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)'
      },
      {
        shadowClass: 'shadow',
        label: 'Default',
        description: 'Standard elevation - buttons, panels',
        cssValue: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
      },
      {
        shadowClass: 'shadow-md',
        label: 'Medium',
        description: 'Moderate elevation - dropdowns, tabs',
        cssValue: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      },
      {
        shadowClass: 'shadow-lg',
        label: 'Large',
        description: 'High elevation - modals, overlays',
        cssValue: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      },
      {
        shadowClass: 'shadow-xl',
        label: 'Extra Large',
        description: 'Very high elevation - popovers',
        cssValue: 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      },
      {
        shadowClass: 'shadow-2xl',
        label: '2X Large',
        description: 'Maximum elevation - hero sections',
        cssValue: 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)'
      }
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Elevation Scale</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Shadow tokens create visual hierarchy and depth. Use them to indicate the relative importance and layering of UI elements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shadows.map((shadow) => (
            <ShadowExample key={shadow.label} {...shadow} />
          ))}
        </div>
      </div>
    );
  },
};

export const ColoredShadows: Story = {
  render: () => {
    const coloredShadows = [
      {
        shadowClass: 'shadow-lg',
        colorClass: 'shadow-blue-500/25',
        label: 'Primary Shadow',
        color: 'Blue',
      },
      {
        shadowClass: 'shadow-lg',
        colorClass: 'shadow-green-500/25',
        label: 'Success Shadow',
        color: 'Green',
      },
      {
        shadowClass: 'shadow-lg',
        colorClass: 'shadow-yellow-500/25',
        label: 'Warning Shadow',
        color: 'Yellow',
      },
      {
        shadowClass: 'shadow-lg',
        colorClass: 'shadow-red-500/25',
        label: 'Error Shadow',
        color: 'Red',
      },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Colored Shadows</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use colored shadows to reinforce semantic meaning or brand colors in elevated elements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coloredShadows.map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="flex items-center justify-center">
                <div className={`w-24 h-24 bg-background border rounded-lg ${item.shadowClass} ${item.colorClass} flex items-center justify-center`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80" />
                </div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.color}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Usage Examples</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Real-world examples of how different shadow elevations are used in UI components.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Cards & Panels</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background border rounded-lg shadow-sm">
              <div className="font-medium text-sm mb-1">shadow-sm</div>
              <div className="text-xs text-muted-foreground">Subtle card elevation</div>
            </div>
            <div className="p-4 bg-background border rounded-lg shadow">
              <div className="font-medium text-sm mb-1">shadow</div>
              <div className="text-xs text-muted-foreground">Standard card elevation</div>
            </div>
            <div className="p-4 bg-background border rounded-lg shadow-md">
              <div className="font-medium text-sm mb-1">shadow-md</div>
              <div className="text-xs text-muted-foreground">Prominent card elevation</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Interactive Elements</h4>
          <div className="flex gap-4 flex-wrap">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-sm hover:shadow-md transition-shadow">
              Button (shadow-sm → shadow-md)
            </button>
            <button className="px-4 py-2 bg-background border rounded-md shadow hover:shadow-lg transition-shadow">
              Secondary (shadow → shadow-lg)
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Overlays</h4>
          <div className="relative p-8 bg-muted/30 rounded-lg">
            <div className="absolute inset-4 bg-background border rounded-lg shadow-xl p-6">
              <div className="font-medium text-sm mb-2">Modal Dialog</div>
              <div className="text-xs text-muted-foreground mb-4">Uses shadow-xl for high elevation</div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded shadow">Confirm</div>
                <div className="px-3 py-1 border text-xs rounded shadow-sm">Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ShadowGuidelines: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">Shadow Guidelines</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Best practices for using shadows effectively in your design system.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-base font-medium text-green-700 dark:text-green-400">✓ Do</h4>
            <div className="space-y-3">
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Use consistent elevation</div>
                <div className="text-xs text-muted-foreground">Apply the same shadow level to elements with similar hierarchy</div>
              </div>
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Consider interaction states</div>
                <div className="text-xs text-muted-foreground">Increase shadow on hover to show interactivity</div>
              </div>
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Use sparingly for focus</div>
                <div className="text-xs text-muted-foreground">Reserve high elevations for important overlays</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-medium text-red-700 dark:text-red-400">✗ Don't</h4>
            <div className="space-y-3">
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Overuse high elevations</div>
                <div className="text-xs text-muted-foreground">Too many shadow-xl elements create visual chaos</div>
              </div>
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Mix shadow directions</div>
                <div className="text-xs text-muted-foreground">Stick to consistent light source positioning</div>
              </div>
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Use shadows on flat design</div>
                <div className="text-xs text-muted-foreground">Avoid shadows if your design is intentionally flat</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-muted/30">
          <h4 className="text-base font-medium mb-3">Elevation Hierarchy</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-medium mb-2">Base Level (0-1)</div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Page background</li>
                <li>• Input fields</li>
                <li>• Basic cards</li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Raised Level (2-3)</div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Buttons</li>
                <li>• Dropdown panels</li>
                <li>• Active tabs</li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Floating Level (4-6)</div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Modals</li>
                <li>• Tooltips</li>
                <li>• Context menus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};