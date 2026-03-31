We use the Chain of responsibility pattern in situations where we need a pipeline for a chain of objects for processing a request.

In other words: <br />
We can build a pipeline or a chain of objects for processing a request. <br/>
And that request doesn't have to be an http request, It can be any type of request.

In this pattern, we implement a processing pipeline like this: <br />
<img src="./processing pipeline.png" width=600><br />
If for example in the Authenticator, the request is not valid, the process won't continue and won't reach the Logger object.

<br />

<img src="./cor pattern.png" width=600><br />
Note 1: The `WebServer` is going to maintain a reference to the first handler in the chain.
<br />

Note 2: The `WebServer` is talking to `Handler` interface and not to a concrete handler. It is decoupled from the concrete implementations.
