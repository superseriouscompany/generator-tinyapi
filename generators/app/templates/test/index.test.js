const expect = require('expect')
const server = require('../index')

describe('api', function() {
  var serverHandle;
  this.slow(1000)

  before(function() {
    serverHandle = server(4200)
    // TODO: start dynamo docker image
  })

  after(function() {
    serverHandle()
    // TODO: start dynamo 
  })

  var routesPath = `${__dirname}/routes`
  require('fs').readdirSync(routesPath).forEach(function(file) {
   const fileName = file.split('.')[0]
   describe(fileName, require(`${routesPath}/${file}`))
  })
})