/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Dm: ['DM Sans'],
        Nunito: ['Nunito'],
        Poppins: ['Poppins'],
      },
      maxWidth: {
        Container: '1400px',
      },
      colors: {
        BlueBg:'#3661fc',
        Orange:'#fe661c',
        OrangeLight:'#ffa951',
        BorderRight:'#708FFF',
        Parbel:'#3661FC',
        Menutxt:'#FE681E',
        Black01:'#1A1A1A',
        SearchBG:'#f4f4ff',
        BannerBG:'#333333',
        Grey1:'#6B6161',
      },
      backgroundImage: {
        Banner: "url('/src/assets/banner.png')",
      },
    },
  },
  plugins: [],
}

