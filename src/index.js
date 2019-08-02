import {pullAt, isArray} from 'lodash';

class EventBus {
    eventListeners = {};

    fire(eventName, data) {
        let listeners = this.eventListeners[eventName];
        if (isArray(listeners)) {
            listeners.map(listener => {
                if (typeof listener === 'function') {
                    listener(data);
                }
            })
        }
    }

    add(eventName, listener) {
        const listeners = this.eventListeners[eventName];
        let index = 0;
        if (isArray(listeners)) {
            index = listeners.push(listener) - 1;
        } else {
            this.eventListeners[eventName] = [listener];
        }

        return {index, eventName};
    }

    remove({index, eventName}) {
        this.eventListeners = pullAt(this.eventListeners[eventName], [index]);
    }
}

const Events = new EventBus();

export {
    EventBus
};

export default Events;
