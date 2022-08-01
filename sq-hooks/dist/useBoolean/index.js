import { useState } from "react";
export default function useBoolean(defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = useState(defaultValue), state = _a[0], setState = _a[1];
    var setTrue = function () { return setState(true); };
    var setFalse = function () { return setState(false); };
    return [
        state,
        {
            setTrue: setTrue,
            setFalse: setFalse
        }
    ];
}
