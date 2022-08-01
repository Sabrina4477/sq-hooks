import { useEffect, useRef } from "react";
export default function useTitle(title) {
    var titleRef = useRef(document.title);
    useEffect(function () {
        document.title = title;
        return function () {
            document.title = titleRef.current;
        };
    }, [title]);
}
