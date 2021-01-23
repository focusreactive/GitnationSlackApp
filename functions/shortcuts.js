export const handler = async (event, context, callback) => {
  const {
    path,
    httpMethod,
    headers,
    queryStringParameters,
    isBase64Encoded,
    body,
  } = event;
    console.log("🚀 ~ file: shortcuts.js ~ line 10 ~ handler ~ body", body)
    console.log("🚀 ~ file: shortcuts.js ~ line 10 ~ handler ~ queryStringParameters", queryStringParameters)
    console.log("🚀 ~ file: shortcuts.js ~ line 10 ~ handler ~ path", path)
    console.log("🚀 ~ file: shortcuts.js ~ line 10 ~ handler ~ httpMethod", httpMethod)
};
