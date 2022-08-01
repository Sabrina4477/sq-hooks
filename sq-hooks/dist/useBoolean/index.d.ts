interface Action {
    setTrue: () => void;
    setFalse: () => void;
}
export default function useBoolean(defaultValue?: boolean): [boolean, Action];
export {};
