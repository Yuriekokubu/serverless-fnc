// domain/.netlify/functions/1-hello

exports.handler = async (e, context, cb) => {
  cb(null, { statusCode: 200, body: 'Hello' });

  //   return {
  //     statusCode: 200,
  //     body: 'Our first Netlify Function Example',
  //   };
};
