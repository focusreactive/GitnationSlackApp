import queryString from 'query-string';
export const handler = async (event, context, callback) => {
  const {
    path,
    httpMethod,
    headers,
    queryStringParameters,
    isBase64Encoded,
  } = event;
  const body = await queryString.parse(event.body);
  console.log('🚀 ~ file: shortcuts.js ~ line 10 ~ handler ~ body\n', body);
  console.log(
    '🚀 ~ file: shortcuts.js ~ line 10 ~ handler ~ queryStringParameters\n',
    queryStringParameters,
  );
  console.log('🚀 ~ file: shortcuts.js ~ line 10 ~ handler ~ path\n', path);
  console.log(
    '🚀 ~ file: shortcuts.js ~ line 10 ~ handler ~ httpMethod\n',
    httpMethod,
  );
};
