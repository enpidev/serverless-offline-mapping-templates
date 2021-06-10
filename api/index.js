'use strict';

exports.handler = function(event, context, callback) {
  console.log('Event', event);

  if (event.triggerError == 'yes') {
    console.log('Error is true');
    callback(new Error(`Failed running lambda function. Sending error response.`));
  } else {
    console.log('Error is NOT true');
    callback(null, {
      message: 'Success running lambda function',
      currentTime: Date.now()
    });
  }
};