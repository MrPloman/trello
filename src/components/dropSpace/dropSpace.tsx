import { useState } from "react";
import "./dropSpace.scss";

export const DropSpace = () => {
    const [showDropSpace, setShowDropSpace] = useState<boolean>(false);
    return (
        <section
            onDragEnter={() => setShowDropSpace(true)}
            onDragLeave={() => setShowDropSpace(false)}
            className={showDropSpace ? "show_space" : "hide_space"}
        >
            Drop here
        </section>
    );
};
