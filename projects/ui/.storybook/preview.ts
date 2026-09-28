import { applicationConfig, type Preview } from '@storybook/angular-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import { provideSpartanHlm } from '@gosamply/ui/utils';

const preview: Preview = {
  decorators: [
    applicationConfig({ providers: [provideSpartanHlm()] }),
    withThemeByClassName({ themes: { light: '', dark: 'dark' }, defaultTheme: 'light', parentSelector: 'html' }),
  ],
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
