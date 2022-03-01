| 

**Step Functions**

 | 

Good for any new serverless application where coordination is required between various components using the visual workflow

         | 

Easy to use while developing application

                                              | 

Uses declarative JSON to write state machine

                                                                             | 

Serverless, lower admin overhead

 | 

Short running workflows

 | 

Mostly used for synchronous tasks

  | 

New AWS Service, less complex applications

                        | 

Integrate with AWS Mechanical Turk

 |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|-----------------------------|----------------------------------------|-----------------------------------------------------------------------|----------------------------------------|
| 

**SWF**

            | 

Need external signals to intervene in processes, OR Good if there are child processes and those require passing signals to parents.

 | 

More complex while developing application but complete control of orchestration logic

 | 

Need to write decider program (programing of your choice) to separate activities between steps or use AWS flow framework

 | 

Uses servers

                     | 

Long-running workflows,

 | 

Mostly used for asynchronous tasks

 | 

Legacy application, Complex decisions (custom decide application)

 |                                        |
