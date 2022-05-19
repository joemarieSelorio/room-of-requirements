const TAG = '[lambda]';

/**
 * Handler for fetching users
 * @param {Object} event -  Incoming request data
 * @param {Object} context - Lambda invocation data
 */
async function handler(event, context) {
  const METHOD = '[getUser]';
  console.log(`${TAG} ${METHOD}`);

  return JSON.stringify({status: 200, message: 'success'});
}


module.exports = {
  handler,
};


