import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'A-Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const TypographyExample = ({
  className,
  children,
  label,
  cssClass
}: {
  className?: string;
  children: React.ReactNode;
  label: string;
  cssClass: string;
}) => (
  <div className="flex items-center gap-4 p-4 border rounded-lg">
    <div className="w-20 text-xs text-muted-foreground font-mono">{label}</div>
    <div className={className}>{children}</div>
    <div className="ml-auto text-xs text-muted-foreground font-mono">{cssClass}</div>
  </div>
);

export const Headings: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Heading Styles</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Semantic heading hierarchy with consistent scaling and spacing.
        </p>
      </div>
      <div className="space-y-4">
        <TypographyExample label="h1" cssClass="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Joke Tax Chronicles
          </h1>
        </TypographyExample>

        <TypographyExample label="h2" cssClass="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The People of the Kingdom
          </h2>
        </TypographyExample>

        <TypographyExample label="h3" cssClass="scroll-m-20 text-2xl font-semibold tracking-tight">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            The Joke Tax
          </h3>
        </TypographyExample>

        <TypographyExample label="h4" cssClass="scroll-m-20 text-xl font-semibold tracking-tight">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            People stopped telling jokes
          </h4>
        </TypographyExample>
      </div>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Body Text Styles</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Text styles for body content, descriptions, and UI text.
        </p>
      </div>
      <div className="space-y-4">
        <TypographyExample label="p" cssClass="leading-7 [&:not(:first-child)]:mt-6">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized that imposing a joke tax might not have been the best idea.
          </p>
        </TypographyExample>

        <TypographyExample label="lead" cssClass="text-xl text-muted-foreground">
          <p className="text-xl text-muted-foreground">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </TypographyExample>

        <TypographyExample label="large" cssClass="text-lg font-semibold">
          <div className="text-lg font-semibold">Are you absolutely sure?</div>
        </TypographyExample>

        <TypographyExample label="small" cssClass="text-sm font-medium leading-none">
          <small className="text-sm font-medium leading-none">Email address</small>
        </TypographyExample>

        <TypographyExample label="muted" cssClass="text-sm text-muted-foreground">
          <p className="text-sm text-muted-foreground">Enter your email address.</p>
        </TypographyExample>
      </div>
    </div>
  ),
};

export const InlineElements: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Inline Text Elements</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Inline styling for emphasis, code, links, and other semantic elements.
        </p>
      </div>
      <div className="space-y-4">
        <TypographyExample label="bold" cssClass="font-semibold">
          <p className="leading-7">
            You can use the <strong className="font-semibold">mark</strong> tag to highlight text.
          </p>
        </TypographyExample>

        <TypographyExample label="code" cssClass="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            @radix-ui/react-alert-dialog
          </code>
        </TypographyExample>

        <TypographyExample label="link" cssClass="font-medium text-primary underline underline-offset-4">
          <a href="#" className="font-medium text-primary underline underline-offset-4">
            Learn more about components
          </a>
        </TypographyExample>

        <TypographyExample label="kbd" cssClass="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </TypographyExample>
      </div>
    </div>
  ),
};

export const Lists: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">List Styles</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ordered and unordered lists with proper spacing and indentation.
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium mb-2">Unordered List</h4>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of puns: 10 gold coins</li>
            <li>3rd level of puns: 20 gold coins</li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-medium mb-2">Ordered List</h4>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>
        </div>
      </div>
    </div>
  ),
};

export const Blockquote: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Blockquote</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Styled blockquotes for emphasizing important content or quotes.
        </p>
      </div>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege."
      </blockquote>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => {
    const weights = [
      { weight: 'font-thin', label: 'Thin', value: '100', usage: 'Ultra light decorative text' },
      { weight: 'font-extralight', label: 'Extra Light', value: '200', usage: 'Very light headings' },
      { weight: 'font-light', label: 'Light', value: '300', usage: 'Light body text' },
      { weight: 'font-normal', label: 'Normal', value: '400', usage: 'Standard body text' },
      { weight: 'font-medium', label: 'Medium', value: '500', usage: 'Emphasized text, labels' },
      { weight: 'font-semibold', label: 'Semi Bold', value: '600', usage: 'Subheadings, buttons' },
      { weight: 'font-bold', label: 'Bold', value: '700', usage: 'Headings, strong emphasis' },
      { weight: 'font-extrabold', label: 'Extra Bold', value: '800', usage: 'Display headings' },
      { weight: 'font-black', label: 'Black', value: '900', usage: 'Hero text, logos' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Font Weight Scale</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Font weights create visual hierarchy and emphasis. Use heavier weights sparingly for maximum impact.
          </p>
        </div>
        <div className="space-y-4">
          {weights.map((item) => (
            <div key={item.weight} className="flex items-center gap-4 p-3 border rounded-lg">
              <div className={`text-2xl ${item.weight} min-w-0 flex-1`}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="text-right text-xs text-muted-foreground min-w-20">
                <div className="font-medium">{item.label}</div>
                <div className="font-mono">{item.value}</div>
                <div className="mt-1">{item.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const ResponsiveTypography: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Responsive Typography</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Typography that adapts to screen sizes for optimal readability on all devices.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Responsive Headings</h4>
          <div className="space-y-4 border rounded-lg p-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Hero Heading
            </h1>
            <div className="text-xs text-muted-foreground font-mono">
              text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Section Heading
            </h2>
            <div className="text-xs text-muted-foreground font-mono">
              text-xl sm:text-2xl lg:text-3xl font-semibold
            </div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
              Subsection Heading
            </h3>
            <div className="text-xs text-muted-foreground font-mono">
              text-lg sm:text-xl lg:text-2xl font-medium
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Responsive Body Text</h4>
          <div className="space-y-4 border rounded-lg p-6">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              This paragraph demonstrates responsive body text that grows larger on bigger screens
              while maintaining optimal reading comfort across all device sizes.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              text-sm sm:text-base lg:text-lg leading-relaxed
            </div>

            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
              Secondary text that scales proportionally with the main content.
            </p>
            <div className="text-xs text-muted-foreground font-mono">
              text-xs sm:text-sm lg:text-base text-muted-foreground
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const LineHeight: Story = {
  render: () => {
    const lineHeights = [
      { class: 'leading-none', value: '1', usage: 'Tight headings, logos' },
      { class: 'leading-tight', value: '1.25', usage: 'Large headings' },
      { class: 'leading-snug', value: '1.375', usage: 'Small headings' },
      { class: 'leading-normal', value: '1.5', usage: 'Body text default' },
      { class: 'leading-relaxed', value: '1.625', usage: 'Comfortable reading' },
      { class: 'leading-loose', value: '2', usage: 'Spacious layouts' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Line Height Scale</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Line height affects readability and visual density. Choose based on text size and layout constraints.
          </p>
        </div>
        <div className="space-y-6">
          {lineHeights.map((item) => (
            <div key={item.class} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="font-medium text-sm">{item.class}</div>
                <div className="text-xs text-muted-foreground">
                  {item.value} • {item.usage}
                </div>
              </div>
              <p className={`text-base ${item.class}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const LetterSpacing: Story = {
  render: () => {
    const spacings = [
      { class: 'tracking-tighter', value: '-0.05em', usage: 'Tight display text' },
      { class: 'tracking-tight', value: '-0.025em', usage: 'Large headings' },
      { class: 'tracking-normal', value: '0em', usage: 'Body text default' },
      { class: 'tracking-wide', value: '0.025em', usage: 'Button text, labels' },
      { class: 'tracking-wider', value: '0.05em', usage: 'All caps text' },
      { class: 'tracking-widest', value: '0.1em', usage: 'Decorative text' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Letter Spacing</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Letter spacing affects text density and readability. Use wider spacing for uppercase text and labels.
          </p>
        </div>
        <div className="space-y-4">
          {spacings.map((item) => (
            <div key={item.class} className="flex items-center gap-4 p-3 border rounded-lg">
              <div className={`text-lg font-medium ${item.class} min-w-0 flex-1`}>
                LETTER SPACING EXAMPLE
              </div>
              <div className="text-right text-xs text-muted-foreground min-w-32">
                <div className="font-medium">{item.class}</div>
                <div className="font-mono">{item.value}</div>
                <div className="mt-1">{item.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const TextUtilities: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Text Utilities</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Utility classes for common text formatting and layout needs.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Text Alignment</h4>
          <div className="space-y-3 border rounded-lg p-4">
            <div className="text-left p-2 bg-muted/50 rounded">Left aligned text</div>
            <div className="text-center p-2 bg-muted/50 rounded">Center aligned text</div>
            <div className="text-right p-2 bg-muted/50 rounded">Right aligned text</div>
            <div className="text-justify p-2 bg-muted/50 rounded">
              Justified text that stretches to fill the entire width of the container,
              creating even margins on both sides.
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Text Truncation</h4>
          <div className="space-y-3 border rounded-lg p-4">
            <div className="w-48">
              <div className="text-sm font-medium mb-1">Single Line (truncate)</div>
              <div className="truncate p-2 bg-muted/50 rounded">
                This is a very long text that will be truncated with an ellipsis
              </div>
            </div>

            <div className="w-64">
              <div className="text-sm font-medium mb-1">Two Lines (line-clamp-2)</div>
              <div className="line-clamp-2 p-2 bg-muted/50 rounded text-sm">
                This is a longer text that will be clamped to exactly two lines and then
                show an ellipsis when it would exceed that limit.
              </div>
            </div>

            <div className="w-80">
              <div className="text-sm font-medium mb-1">Three Lines (line-clamp-3)</div>
              <div className="line-clamp-3 p-2 bg-muted/50 rounded text-sm">
                This is an even longer text that will be clamped to exactly three lines.
                It's useful for card descriptions, article previews, and other content
                where you want to show a preview but maintain consistent layout heights.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">Text Transform</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <div className="text-xs text-muted-foreground mb-2">uppercase</div>
              <div className="uppercase">Transform to uppercase</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-xs text-muted-foreground mb-2">lowercase</div>
              <div className="lowercase">TRANSFORM TO LOWERCASE</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-xs text-muted-foreground mb-2">capitalize</div>
              <div className="capitalize">transform to title case</div>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="text-xs text-muted-foreground mb-2">normal-case</div>
              <div className="normal-case">LEAVE TEXT AS IS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllTypography: Story = {
  render: () => (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Typography System
        </h1>
        <p className="text-xl text-muted-foreground mt-4">
          A comprehensive type scale designed for clarity and hierarchy.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Design System Overview
        </h2>

        <p className="leading-7">
          This typography system provides a consistent foundation for all text content.
          It includes semantic heading levels, body text variants, and inline elements
          that work together to create clear information hierarchy.
        </p>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Key Features
        </h3>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Responsive font sizing with <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">lg:</code> breakpoint support</li>
          <li>9-step font weight scale from thin to black</li>
          <li>6-step line height scale for optimal readability</li>
          <li>Letter spacing options for different text contexts</li>
          <li>Text utilities for alignment, truncation, and transformation</li>
          <li>Semantic color usage with <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">text-muted-foreground</code></li>
          <li>Accessible contrast ratios across all text variants</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-medium mb-2">Typography Scale</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>• 9 font weight levels</div>
              <div>• 6 line height options</div>
              <div>• 6 letter spacing variations</div>
              <div>• Responsive sizing utilities</div>
            </div>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-medium mb-2">Best Practices</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>• Use font weights sparingly</div>
              <div>• Maintain consistent line heights</div>
              <div>• Consider reading distance</div>
              <div>• Test on multiple screen sizes</div>
            </div>
          </div>
        </div>

        <blockquote className="mt-6 border-l-2 pl-6 italic">
          "Good typography is invisible. Great typography is felt."
        </blockquote>

        <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/20">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-xs">a11y</div>
            <div>
              <div className="text-sm font-medium mb-1">Accessibility</div>
              <div className="text-xs text-muted-foreground">
                All typography follows WCAG guidelines with proper contrast ratios, scalable font sizes,
                and readable line heights. Text should be readable at 200% zoom without horizontal scrolling.
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Typography guidelines based on modern web standards and accessibility best practices.
        </div>
      </div>
    </div>
  ),
};