const tailwindcss = require('tailwindcss');

module.exports={
    plugins:[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    extend: {
        backgroundImage: theme => ({
         'form-img': "url('https://wallpapercave.com/wp/wp5462449.jpg')",
        //  'footer-texture': "url('/img/footer-texture.png')",
        })
      }
}
