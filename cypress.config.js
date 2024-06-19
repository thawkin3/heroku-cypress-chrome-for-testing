// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     //baseUrl: 'http://localhost:1234',
//     baseUrl: 'https://ecommerce-playground.lambdatest.io',
//     supportFile: false
//   },
// })

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    supportFile: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(launchOptions.args)
        launchOptions.args.push('--no-sandbox')
        console.log(launchOptions.args)
        return launchOptions
      })
    }
  },
})
