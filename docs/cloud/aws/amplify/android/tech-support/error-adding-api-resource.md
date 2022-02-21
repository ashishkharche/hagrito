---
sidebar_label: Error adding API resource.
description: AWS Amplify for Android errors.
---

# There was an error adding the API resource when executing `amplify add api`

At some point you get this error:

```
? Do you want to configure advanced settings? No
Error: File at path: 'T:\github\username\aws-amplify-android-complete-1\amplify\backend\auth\cognito623de7ff\paramet
ers.json' does not exist
    at Function.JSONUtilities.readJson (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\amp
lify-cli-core\lib\jsonUtilities.js:40:19)
    at StateManager.getData (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\amplify-cli-co
re\lib\state-manager\stateManager.js:282:56)
    at StateManager.getResourceParametersJson (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modu
les\amplify-cli-core\lib\state-manager\stateManager.js:126:25)
    at Object.ensureAmplifyMetaFrontendConfig (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\lib\exten
sions\amplify-helpers\on-category-outputs-change.js:101:60)
    at AmplifyToolkit.updateamplifyMetaAfterResourceAdd [as _updateamplifyMetaAfterResourceAdd] (C:\Users\jiayo\AppData\R
oaming\npm\node_modules\@aws-amplify\cli\lib\extensions\amplify-helpers\update-amplify-meta.js:111:34)
    at Object.createFunctionResources (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\ampl
ify-category-function\lib\provider-utils\awscloudformation\utils\storeResources.js:43:21)
    at addFunctionResource (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\amplify-categor
y-function\lib\provider-utils\awscloudformation\index.js:84:28)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async newLambdaFunction (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\amplify-cat
egory-api\lib\provider-utils\awscloudformation\service-walkthroughs\apigw-walkthrough.js:537:26)
    at async askPaths (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\amplify-category-api
\lib\provider-utils\awscloudformation\service-walkthroughs\apigw-walkthrough.js:424:22)
    at async pathFlow (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\amplify-category-api
\lib\provider-utils\awscloudformation\service-walkthroughs\apigw-walkthrough.js:156:25)
    at async Object.legacyAddResource (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\ampl
ify-category-api\lib\provider-utils\awscloudformation\legacy-add-resource.js:32:20)
    at async Object.executeAmplifyCommand (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\node_modules\
amplify-category-api\lib\index.js:166:5)
    at async executePluginModuleCommand (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\lib\execution-m
anager.js:164:5)
    at async Object.executeCommand (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\lib\execution-manage
r.js:35:9)
    at async Object.run (C:\Users\jiayo\AppData\Roaming\npm\node_modules\@aws-amplify\cli\lib\index.js:162:9)
There was an error adding the API resource

```

To fix this, clone the repo again which would exclude all .gitignore(d) files on the clone.

Now do `amplify init` (not sure if necessary) in the root of the cloned repo and then carry on.