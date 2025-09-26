import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Select> = {
  title: 'C-Form Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="sveltekit">SvelteKit</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="nuxt">Nuxt.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="vite">Vite</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithDescriptiveText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="team">Team</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select your team" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="engineering">🛠️ Engineering</SelectItem>
          <SelectItem value="design">🎨 Design</SelectItem>
          <SelectItem value="marketing">📢 Marketing</SelectItem>
          <SelectItem value="sales">💰 Sales</SelectItem>
          <SelectItem value="support">🎧 Support</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        Choose the team you belong to.
      </p>
    </div>
  ),
};

export const LongList: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="country">Country</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">🇺🇸 United States</SelectItem>
          <SelectItem value="ca">🇨🇦 Canada</SelectItem>
          <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
          <SelectItem value="de">🇩🇪 Germany</SelectItem>
          <SelectItem value="fr">🇫🇷 France</SelectItem>
          <SelectItem value="jp">🇯🇵 Japan</SelectItem>
          <SelectItem value="au">🇦🇺 Australia</SelectItem>
          <SelectItem value="br">🇧🇷 Brazil</SelectItem>
          <SelectItem value="in">🇮🇳 India</SelectItem>
          <SelectItem value="cn">🇨🇳 China</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};