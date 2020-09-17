let callbackLists = {}
let eventHub = {
    trigger(eventName, data) {
        console.log('trigger', eventName)
        let callbackList = callbackLists[eventName]
        if (!callbackList) {
            return
        }
        for (let i = 0; i < callbackList.length; i++) {
            setTimeout(callbackList[i](data), 0);
        }
    },
    on(eventName, callback) {
        console.log('on', eventName, callback)
        if (!callbackLists[eventName]) {
            callbackLists[eventName] = []
        }
        callbackLists[eventName].push(callback)
    }
}

export default eventHub;