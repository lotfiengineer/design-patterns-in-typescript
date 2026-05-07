With the bridge pattern, we can build simple yet flexible hierarchies that can grow independent of each other.

<img src="./assets/bridge diagram.png" width=400>

Note 1: In the feature hierarchy, we have 2 classes. The `RemoteControl` and the `AdvancedRemoteControl` are both classes.<br />
On the other hand, the `Device` is an interface.

Note 2: A `RemoteControl` targets a particular `Device`. That means we're going to have a field of type Device (in the RemoteControl class) and initialize it using the constructor of the RemoteControl class. <br />
So, when we want to create a RemoteControl object, we're going to give it a real device implementation such as a SonyTV.

Note 3: If we add new classes to the feature or implementation hierarchies, it doesn't affect another hierarchy.

Note 4: With this structure, we can combine various classes from these two seperate hierarchies.

Note 5: The reason this pattern is called the bridge pattern is because of the composition relationship between the `RemoteControl` and `Device` classes which acts as a bridge. It connects two completely independent hierarchies.