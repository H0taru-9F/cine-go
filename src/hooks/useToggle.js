import { useCallback, useState } from "react";

export default function useToggle(initialIsOpen = false) {
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggle = useCallback(() => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }, []);

    return {
        isOpen,
        open,
        close,
        toggle,
        setIsOpen,
    };
}
