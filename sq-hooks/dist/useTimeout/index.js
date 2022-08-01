import { useEffect, useRef } from "react";
export default function useTimeout(cb, time) {
    var fn = useRef(cb);
    useEffect(function () {
        fn.current = cb;
    }, [cb]);
    useEffect(function () {
        var trigger = function () { return fn.current && fn.current; };
        var timerID = setTimeout(trigger, time);
        return function () { return clearTimeout(timerID); };
    }, [time]);
}
