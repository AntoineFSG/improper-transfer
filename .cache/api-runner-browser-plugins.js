module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"improper","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"minimal-ui","icon":"src/images/IMPROPER-logo-2015.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
