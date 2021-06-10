# serverless-offline-mapping-templates
Sample project for an AWS API Gateway that uses mapping templates. This is meant to demonstrate the issue in serverless offline wherein the response is not being transformed by the mapping templates.

## Running on AWS
1. Execute the command

```
serverless deploy
```

2. Call the following URLs using a browser, which results in the correctly mapped output.

https://{api-gateway-id}.execute-api.{aws-region}.amazonaws.com/dev/gettime

```
{ "output" : "Current time is 1623284208276" }
```

https://{api-gateway-id}.execute-api.{aws-region}.amazonaws.com/dev/gettime?trigger_error=yes

```
{ "output" : "Failed to get current time." }
```

## Running on Serverless Offline
1. Execute the command

```
serverless offline
```

2. Call the following URLs using a browser, output is **INCORRECT** since it wasn't processed by the mapping templates and is different from the output when running in AWS.

http://localhost:3000/dev/gettime

```
{"message":"Success running lambda function","currentTime":1623284471226}
```

http://localhost:3000/dev/gettime?trigger_error=yes
```
{"errorMessage":"Failed running lambda function. Sending error response.","errorType":"Error","stackTrace":["Error: Failed running lambda function. Sending error response.","at exports.handler (/projects/github-enpidev/serverless-offline-mapping-templates/api/index.js:8:14)","at InProcessRunner.run (/projects/github-enpidev/serverless-offline-mapping-templates/node_modules/serverless-offline/dist/lambda/handler-runner/in-process-runner/InProcessRunner.js:190:16)","at processTicksAndRejections (internal/process/task_queues.js:97:5)","at async LambdaFunction.runHandler (/projects/github-enpidev/serverless-offline-mapping-templates/node_modules/serverless-offline/dist/lambda/LambdaFunction.js:355:20)","at async hapiHandler (/projects/github-enpidev/serverless-offline-mapping-templates/node_modules/serverless-offline/dist/events/http/HttpServer.js:601:18)","at async module.exports.internals.Manager.execute (/projects/github-enpidev/serverless-offline-mapping-templates/node_modules/@hapi/hapi/lib/toolkit.js:45:28)","at async Object.internals.handler (/projects/github-enpidev/serverless-offline-mapping-templates/node_modules/@hapi/hapi/lib/handler.js:46:20)","at async exports.execute (/projects/github-enpidev/serverless-offline-mapping-templates/node_modules/@hapi/hapi/lib/handler.js:31:20)","at async Request._lifecycle (/projects/github-enpidev/serverless-offline-mapping-templates/node_modules/@hapi/hapi/lib/request.js:312:32)"]}
```