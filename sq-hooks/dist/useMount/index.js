import { useEffect, useRef } from "react";
export default function useMount(fn) {
    var cbRef = useRef(null);
    useEffect(function () {
        cbRef.current = fn;
    }, [fn]);
    useEffect(function () {
        var fn = cbRef.current;
        // 如果有则调用
        fn === null || fn === void 0 ? void 0 : fn();
    }, [fn]);
}
