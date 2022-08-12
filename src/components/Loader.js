import { Loader, ThemeProvider } from '@aws-amplify/ui-react';

const theme = {
  name: 'loader-theme',
  tokens: {
    components: {
      loader: {
        strokeEmpty: { value: '{colors.neutral.20}' },
        strokeFilled: { value: '{colors.pink.80}' },

        // sizes
        large: {
          width: { value: '10rem' },
          height: { value: '10rem' },
        },
      },
    },
  },
};

export const LoaderWithTheme = () => (
  <ThemeProvider theme={theme} colorMode="dark">
    <Loader size="large" />
  </ThemeProvider>
);