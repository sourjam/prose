module.exports =  {
  path: 'compose',
  getComponent: (location, cb) => {
    return require.ensure([], (require) => {
      cb(null, require('./composeComponent'))
    })
  }
}