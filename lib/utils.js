'use strict';

exports.logger = {
    log: console.log,
    warn: console.warn,
    error: console.error
};

function passthroughEvent(from, to, event) {
    if (typeof event === 'string') {
        from.on(event, to.emit.bind(to, event));
        return;
    }

    event.forEach(passthroughEvent.bind(null, from, to));
}

exports.passthroughEvent = passthroughEvent;
