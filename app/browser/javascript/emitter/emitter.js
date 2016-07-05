'use strict';

/*
 * react EventEmitter
 * 事件绑定和解绑可以分别放在componentDidMount和componentWillUnMount中。由于事件是全局的，
 * 最好保证在componentWillUnMount中解绑事件，否则，下一次初始化组件时事件可能会绑定多次。
 * 使用事件模型，组件之间无论是父子关系还是非父子关系都可以直接沟通，从而解决了组件间层层回调传递的问题，
 * 但是频繁地使用事件实现组件间沟通会使整个程序的数据流向越来越乱，因此，组件间的沟通还是要尽量遵循单向数据流机制
 * */
module.exports = {
    _events: {},
    // 触发事件
    dispatch: function (event, data) {
        if (!this._events[event]) return; // no one is listening to this event
        for (var i = 0; i < this._events[event].length; i++)
            this._events[event][i](data);
    },
    // 绑定事件
    subscribe: function (event, callback) {
        if (!this._events[event]) this._events[event] = []; // new event
        this._events[event].push(callback);
    },
    // 解绑事件
    unSubscribe: function (event) {
        if (this._events && this._events[event]) {
            delete this._events[event];
        }
    }
};
