import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    }
  },

  tags: ["autodocs"]
};

export default preview;
