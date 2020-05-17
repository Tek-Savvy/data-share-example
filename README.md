# Sharing Data between Components in Angular

There are multiple ways to share data between parent-child components e.g. via Input Decorator, via ViewChild, via Output and EventEmitter. However when passing data between components that lack a direct connection, such as siblings, grandchildren, etc, you should you a shared service. When you have data that should aways been in sync, I find the RxJS `BehaviorSubject` very useful in this situation. The main benefit that a BehaviorSubject ensures that every component consuming the service receives the most recent data. 

In the service, I have created a private BehaviorSubject that will hold the current value of the message. I have defined a currentMessage variable handle this data stream as an observable that will be used by the components. Lastly, I have created a function that calls next on the BehaviorSubject to change its value. 

The parent, child, and sibling components all receive the same treatment. I have injected the DataService in the constructor, then subscribe to the currentMessage observable and set its value equal to the message variable. 

Now if we create a function in any one of these components that changes the value of the message. when this function is executed the new data it's automatically broadcast to all other components. 

That's it for data sharing. See you next time.
