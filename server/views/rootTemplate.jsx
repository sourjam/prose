export default ({ body, title, json }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>

      <body>
        <div id="root">${body}</div>
        <div id="home"></div>
        <div id="read"></div>
        <div id="compose"></div>
      </body>
      <script src="/home.entry.js"></script>
      <script>
        localStorage.setItem('json', '${json}')
      </script>
    </html>
  `;
};
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js"></script>
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom.js"></script>

