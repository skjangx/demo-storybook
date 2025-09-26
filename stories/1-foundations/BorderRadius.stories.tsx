import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'A-Foundations/Border Radius',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const RadiusExample = ({
  radiusClass,
  label,
  description,
  cssValue
}: {
  radiusClass: string;
  label: string;
  description: string;
  cssValue: string;
}) => (
  <div className="space-y-4">
    <div className="flex items-center justify-center">
      <div className={`w-24 h-24 bg-primary/10 border-2 border-primary/20 ${radiusClass} flex items-center justify-center`}>
        <div className="text-center">
          <div className="font-medium text-xs">{label}</div>
          <div className="text-xs text-muted-foreground font-mono mt-1">{radiusClass}</div>
        </div>
      </div>
    </div>
    <div className="text-center space-y-1">
      <div className="text-sm font-medium">{description}</div>
      <div className="text-xs text-muted-foreground font-mono">{cssValue}</div>
    </div>
  </div>
);

export const RadiusScale: Story = {
  render: () => {
    const radiusTokens = [
      {
        radiusClass: 'rounded-none',
        label: 'None',
        description: 'Sharp corners - technical, formal',
        cssValue: 'border-radius: 0px'
      },
      {
        radiusClass: 'rounded-sm',
        label: 'Small',
        description: 'Subtle rounding - inputs, tags',
        cssValue: 'border-radius: 0.125rem'
      },
      {
        radiusClass: 'rounded',
        label: 'Default',
        description: 'Standard rounding - buttons, cards',
        cssValue: 'border-radius: 0.25rem'
      },
      {
        radiusClass: 'rounded-md',
        label: 'Medium',
        description: 'Moderate rounding - panels, dialogs',
        cssValue: 'border-radius: 0.375rem'
      },
      {
        radiusClass: 'rounded-lg',
        label: 'Large',
        description: 'Prominent rounding - hero cards',
        cssValue: 'border-radius: 0.5rem'
      },
      {
        radiusClass: 'rounded-xl',
        label: 'Extra Large',
        description: 'Strong rounding - feature panels',
        cssValue: 'border-radius: 0.75rem'
      },
      {
        radiusClass: 'rounded-2xl',
        label: '2X Large',
        description: 'Very rounded - decorative elements',
        cssValue: 'border-radius: 1rem'
      },
      {
        radiusClass: 'rounded-3xl',
        label: '3X Large',
        description: 'Extremely rounded - special cases',
        cssValue: 'border-radius: 1.5rem'
      },
      {
        radiusClass: 'rounded-full',
        label: 'Full',
        description: 'Perfect circle - avatars, badges',
        cssValue: 'border-radius: 9999px'
      }
    ];

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Border Radius Scale</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Border radius tokens define the shape language of your interface. Use them consistently to create visual cohesion and brand personality.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {radiusTokens.map((radius) => (
            <RadiusExample key={radius.label} {...radius} />
          ))}
        </div>
      </div>
    );
  },
};

export const DirectionalRadius: Story = {
  render: () => {
    const directionalExamples = [
      {
        radiusClass: 'rounded-t-lg',
        label: 'Top',
        description: 'Rounded top corners only',
        shape: 'Tab-like shape'
      },
      {
        radiusClass: 'rounded-b-lg',
        label: 'Bottom',
        description: 'Rounded bottom corners only',
        shape: 'Dropdown-like shape'
      },
      {
        radiusClass: 'rounded-l-lg',
        label: 'Left',
        description: 'Rounded left corners only',
        shape: 'Left panel connector'
      },
      {
        radiusClass: 'rounded-r-lg',
        label: 'Right',
        description: 'Rounded right corners only',
        shape: 'Right panel connector'
      },
      {
        radiusClass: 'rounded-tl-lg',
        label: 'Top Left',
        description: 'Single corner rounding',
        shape: 'Specific corner accent'
      },
      {
        radiusClass: 'rounded-tr-lg',
        label: 'Top Right',
        description: 'Single corner rounding',
        shape: 'Specific corner accent'
      }
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Directional Radius</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Apply border radius to specific corners for connected layouts and specialized UI patterns.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {directionalExamples.map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="flex items-center justify-center">
                <div className={`w-20 h-16 bg-primary/20 border border-primary/30 ${item.radiusClass} flex items-center justify-center`}>
                  <div className="text-xs font-medium text-center px-2">{item.label}</div>
                </div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-xs font-medium">{item.description}</div>
                <div className="text-xs text-muted-foreground">{item.shape}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const ComponentExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Component Usage</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Real-world examples showing how different radius values are applied to common UI components.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-4">Buttons & Interactive Elements</h4>
          <div className="flex gap-4 flex-wrap">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-none text-sm">
              Sharp (rounded-none)
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-sm text-sm">
              Subtle (rounded-sm)
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm">
              Standard (rounded)
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">
              Medium (rounded-md)
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">
              Pill (rounded-full)
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Cards & Panels</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border rounded-sm">
              <div className="font-medium text-sm mb-1">Minimal Card</div>
              <div className="text-xs text-muted-foreground">rounded-sm for subtle softening</div>
            </div>
            <div className="p-4 bg-card border rounded-lg">
              <div className="font-medium text-sm mb-1">Standard Card</div>
              <div className="text-xs text-muted-foreground">rounded-lg for friendly appearance</div>
            </div>
            <div className="p-4 bg-card border rounded-2xl">
              <div className="font-medium text-sm mb-1">Feature Card</div>
              <div className="text-xs text-muted-foreground">rounded-2xl for premium feel</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Form Elements</h4>
          <div className="space-y-3 max-w-md">
            <div>
              <label className="text-sm font-medium mb-1 block">Input Field (rounded-md)</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Standard input rounding"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Search Field (rounded-full)</label>
              <input
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Search with pill shape"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Connected Elements</h4>
          <div className="space-y-4">
            <div>
              <div className="text-xs font-medium mb-2">Tab Navigation</div>
              <div className="flex">
                <div className="px-4 py-2 bg-primary text-primary-foreground rounded-t-md">Active Tab</div>
                <div className="px-4 py-2 border-t border-l border-r rounded-t-md bg-muted">Inactive Tab</div>
                <div className="px-4 py-2 border-t border-l border-r rounded-t-md bg-muted">Inactive Tab</div>
              </div>
              <div className="p-4 border bg-card rounded-b-md rounded-tr-md">
                Connected content panel with matching radius
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RadiusGuidelines: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">Border Radius Guidelines</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Best practices for creating a cohesive shape language across your interface.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6 bg-muted/30">
          <h4 className="text-base font-medium mb-3">Radius Personality Guide</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="font-medium text-sm">Sharp (0px - 2px)</div>
              <div className="text-xs text-muted-foreground">
                Technical, precise, professional. Good for data-heavy applications, developer tools, and corporate interfaces.
              </div>
              <div className="w-full h-3 bg-gradient-to-r from-slate-400 to-slate-600 rounded-none"></div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-sm">Moderate (4px - 12px)</div>
              <div className="text-xs text-muted-foreground">
                Balanced, approachable, reliable. Ideal for business applications, productivity tools, and general web interfaces.
              </div>
              <div className="w-full h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md"></div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-sm">Rounded (16px+)</div>
              <div className="text-xs text-muted-foreground">
                Friendly, modern, playful. Perfect for consumer apps, social platforms, and creative tools.
              </div>
              <div className="w-full h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-base font-medium text-green-700 dark:text-green-400">✓ Best Practices</h4>
            <div className="space-y-3">
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Maintain consistent scale</div>
                <div className="text-xs text-muted-foreground">Use the same radius for elements of similar hierarchy</div>
              </div>
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Consider content size</div>
                <div className="text-xs text-muted-foreground">Larger elements can handle more pronounced rounding</div>
              </div>
              <div className="p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/50">
                <div className="text-sm font-medium mb-1">Match brand personality</div>
                <div className="text-xs text-muted-foreground">Let your radius scale reflect your brand's character</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-medium text-red-700 dark:text-red-400">✗ Avoid</h4>
            <div className="space-y-3">
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Mixing random radius values</div>
                <div className="text-xs text-muted-foreground">Stick to your defined scale for consistency</div>
              </div>
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Over-rounding small elements</div>
                <div className="text-xs text-muted-foreground">Very small buttons don't need large radius values</div>
              </div>
              <div className="p-3 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/50">
                <div className="text-sm font-medium mb-1">Ignoring connected elements</div>
                <div className="text-xs text-muted-foreground">Use directional radius for tabs, dropdowns, and grouped items</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/20">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs">i</div>
            <div>
              <div className="text-sm font-medium mb-1">Accessibility Consideration</div>
              <div className="text-xs text-muted-foreground">
                Ensure sufficient radius doesn't interfere with touch targets. Small interactive elements should maintain at least 44px touch target size regardless of visual rounding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};