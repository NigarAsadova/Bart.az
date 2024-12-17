module.exports = {
  content: ["./index.html", "./css/styles.css"],
  theme: {
    extend: {
      maxWidth: {
        'custom-container' : '1128px',
      },
      colors:{
        'primary-blue' : '#2970FF',
        'warning' : '#F79009',
        'success' : '#17B26A',
        'error' : '#F04438',
        'border-white' : 'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.36) 45%)',
      },
      backgroundImage: {
        'angular-gradient': 'linear-gradient(225deg, rgba(223,0,173,1) 0%, rgba(224,2,169,1) 32%, rgba(255,156,0,1) 66%, rgba(255,165,0,1) 91%)',
        'open-shop' : "url('/assets/imgs/open shop.png')",
      },
    },
  },
  plugins: [],
};
