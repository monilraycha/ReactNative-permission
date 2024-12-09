const { extendTheme } = require('@gluestack/design-system');

const theme = extendTheme({
  colors: {
    primary: '#6200EE',
    secondary: '#03DAC6',
    background: '#FFFFFF',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
      },
    },
  },
});

module.exports = {
  theme,
};

