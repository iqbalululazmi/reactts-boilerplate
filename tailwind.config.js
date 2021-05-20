module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './styles/**/*.css',
    './components/**/*.js',
    './pages/**/*.js',
    './lib/markdown-parser-markdownit.js',
    './lib/utils/colors.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: [
          '"Josefin Sans"',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif'
        ],
        heading: ['"Josefin Sans"'],
        body: ['Poppins']
      },
      spacing: {
        28: '7rem'
      },
      maxWidth: {
        760: '760px'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    }
  }
}
