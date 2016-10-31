import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import rootTemplate from './views/rootTemplate';

function handleRouter(res, props) {
  console.log('got dis', props.params)
  const html = renderToString(<RouterContext {...props}/>);
  console.log('html', html)
  // res.render('index', {
  //     root: html,
  //   });

  res.send(rootTemplate({
    body: html,
    title: 'root template',
    json: ['hello again']
  }))
}

function handleRedirect(res, redirect) {
  res.redirect(302, redirect.pathname + redirect.search);
}

function handleNotFound(res) {
  res.status(404).send('Not Found');
}

function handleError(res, err) {
  res.status(500).send(err.message);
}

module.exports = function isoMiddleware(req, res) {
  match({ routes, location: req.url },
    (err, redirect, props) => {
      if (err) handleError(res, err);
      else if (redirect) handleRedirect(res, redirect);
      else if (props) handleRouter(res, props);
      else handleNotFound(res);
    });
}