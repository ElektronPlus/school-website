const prependApiUrlToImageSrc = (html: string) => {
  return html.replace('src="/uploads/', 'src="http://localhost:1337/uploads/');
};

export const transformHtml = (html: string) => prependApiUrlToImageSrc(html);
