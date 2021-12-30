window.setIntervalCustom = (_callback, _delay) => {
    _callback(); // call once
    return window.setInterval(_callback, _delay); // at intervals
};
