
module.exports = {
  path: 'read',
  getComponent: (location, cb) => {
    console.log('hi', cb)
    return require.ensure([], (require) => {
      cb(null, require('./readComponent'))
    })
  }
}