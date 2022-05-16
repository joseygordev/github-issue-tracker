export const parseHtml = (rawBody: string): string => {
  const formattedBody = rawBody
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/##([^\r]+)/g, '<h3>$1</h3>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
    
  const html = `<html style="overflow: hidden">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500&display=swap" rel="stylesheet">
    </head>
    <body style="overflow: hidden">
      <p>${formattedBody}</p>
    </body>
  </html>
  `;

  return html;
};
