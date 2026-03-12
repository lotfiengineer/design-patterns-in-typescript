I like this pattern. <br />
The logic behind it is interesting.

We use inheritance to implement template method pattern.

<br />
<img src="./template method pattern.png" width=350 />

We move the common behavior (`execute()`) inside the `Task` abstract class. This way, we are reusing code. <br />
Then inside each type of task (`TransferMoney` or `GenerateReport`) we implement the `doExecute()` method to specify what should happen.<br /><br />
`doExecute()` inside TransferMoney -> has the logic for transfering money.<br />
`doExecute()` inside GenerateReport -> has the logic for generating a report.

Note 1: We call it the template method pattern, because our `execute` method defines a template or a skeleton for an operation.

The structure represented in the GOF book:<br />
<img src="./template method in GOF book.png" width=180> <br />

Note 2: We don't necessarily need to make `primitiveOperation1()` and `primitiveOperation2()` methods abstract. We can give them a default implementation and leave it up to the sub-classes to determine if they want to override those methods or not.<br />

In that case, we refer to those methods as hooks.<br />
Those are hook operations.<br />
It is a common technique in a lot of frameworks out there.<br />
<img src="./hooks.png" width=300> <br />
