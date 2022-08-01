import { useEffect, useRef } from "react";
export default function useUnMount(fn) {
    var cbRef = useRef(null);
    useEffect(function () {
        cbRef.current = fn;
    }, [fn]);
    useEffect(function () {
        var fn = cbRef.current;
        return function () { return fn === null || fn === void 0 ? void 0 : fn(); };
    }, []);
}
