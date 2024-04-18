/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
     ringWidth: ['hover', 'active'],
     borderStyle: ['hover', 'focus'],
     outline: ['hover', 'active'],
     display:["focus-group"]
    }
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    outline: {
      blue: ['2px solid #0000ff', '1px'],
    },
    ringWidth: {
      'DEFAULT': '2px',
      '6': '6px',
      '10': '10px',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
       light: 300,
       normal: 400,
       medium: 500,
      semibold: 600,
       bold: 700,
      extrabold: 800,
      'extra-bold': 800,
       black: 900,
     },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
     initial: '0 1 auto',
     inherit: 'inherit',
      none: 'none',
     '2': '2 2 0%',
    },
    flexGrow: {
      '0': 0,
     DEFAULT: 1,
     DEFAULT: 2,
     '1': 1,
    },
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

