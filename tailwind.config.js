/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '14': '3.5rem',
        '125px':'125px'
      },
      colors:{
        'hoverspt':'#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760'
      },
      //definindo imagens de fundo
      backgroundImage: {
          'spotify-theme': "url('/src/img/bursts.svg')",
          'spotify-theme-mobile': "url('/src/img/bursts-mobile.svg')",
      },

      //dando zoom nas imagens

      backgroundSize:{
        '175%':'175%',
        '195%':'195%'
      },

      backgroundPosition:{
          'banner':'46% 4%',
          'banner-mobile': 'top 25% center'
      },

      fontSize:{
        '9x1': '9rem'
      },

      maxWidth:{
        '1600px':'1600px',
      },

      // screens:{
      //   'md'
      // },

    },
  },
  plugins: [],
}