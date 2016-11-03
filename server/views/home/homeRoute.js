module.exports =  {
  path: 'home',
  getComponent: (location, cb) => {
    return require.ensure([], (require) => {
      cb(null, require('./homeComponent'))
    })
  }
}