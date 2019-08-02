![Alt Text](https://raw.githubusercontent.com/AlanSaracho/otto-eventbus/master/images/tenor.gif)

# Otto EventBus
Otto EventBus is a simple way to add code smells into your projects!

# Usage

```javascript
npm install otto-eventbus
```

Example
```javascript
import Events from 'otto-events'; // or require, whatever

// Add new event.
const myEvent = Events.add('sayHello', name => alert('Hi ' + name + '!'));

// Call event
Events.fire('sayHello', 'Otto');

// Remove event.
Events.remove(myEvent);

```
