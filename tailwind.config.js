module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        red: '0 2px 4px 0 rgba(243, 17, 17, 0.8)',
        green: '0 2px 4px 0 rgba(0, 255, 0, 0.10)',
        blue: '0 2px 4px 0 rgba(0, 0, 255, 0.10)',
        'custom-hex-color': '0 2px 4px 0 #af9cdd',
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
