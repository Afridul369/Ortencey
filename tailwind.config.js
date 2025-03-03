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
        Container: '1450px',
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
        Grey2:'#BCBCBC',
        CardBg:'#f4f4ff',
        Orange01:'#ff7024',
        Orange02:'#ffa951',
        Star:'#fcc013',
        DeepNavy:'#292929',
      },
      backgroundImage: {
        Banner: "url('/src/assets/banner.png')",
        WhyShape: "url('/src/assets/shape.png')",
        Project: "url('/src/assets/projectbg.png')",
        WeAre: "url('/src/assets/wearehere.png')",
      },
    },
  },
  plugins: [],
}

