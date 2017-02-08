'use strict';

const _ = require('lodash');
let events = {
    RUNNER_START: 'startRunner',
    RUNNER_END: 'endRunner',

    SESSION_START: 'startSession',
    SESSION_END: 'endSession',

    SUITE_BEGIN: 'beginSuite',
    SUITE_END: 'endSuite',

    SUITE_FAIL: 'failSuite',

    TEST_BEGIN: 'beginTest',
    TEST_END: 'endTest',

    TEST_PASS: 'passTest',
    TEST_FAIL: 'failTest',
    TEST_PENDING: 'pendingTest',

    RETRY: 'retry',

    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'err',
    EXIT: 'exit'
};

const asyncEvents = [
    events.RUNNER_START,
    events.RUNNER_END,
    events.SESSION_START,
    events.SESSION_END,
    events.EXIT
];
const syncEvents = _(events).values().difference(asyncEvents).value();

Object.defineProperty(events, 'ASYNC', {value: asyncEvents, enumerable: false});
Object.defineProperty(events, 'SYNC', {value: syncEvents, enumerable: false});

module.exports = events;
