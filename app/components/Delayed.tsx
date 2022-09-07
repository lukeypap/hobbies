import { useState, useEffect } from "react";

type Props = {
    children: any;
    waitBeforeShow?: number;
};

const Delayed = ({ children, waitBeforeShow = 1000 }: Props) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    return isShown ? children : null;
};

export default Delayed;
