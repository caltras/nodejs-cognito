# Nodejs + AWS Cognito

## Configure AWS Cognito

https://docs.aws.amazon.com/cognito/latest/developerguide/tutorial-create-user-pool.html


## Define the env variables
```
AWS_REGION
COGNITO_USER_POOL_ID
COGNITO_CLIENT_ID
```

## Run the application

```node src/server.js```


## VSCode Debug

.vscode/launch.json

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Fork",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "autoAttachChildProcesses": true,
            "program": "${workspaceFolder}/src/server.js",
            "env": {
                "AWS_REGION":"",
                "COGNITO_USER_POOL_ID":"",
                "COGNITO_CLIENT_ID":""
            }
        }
    ]
}
```