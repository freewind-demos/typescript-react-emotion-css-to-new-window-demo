import { css } from "@emotion/react";
import { FC, useState } from "react";
import { WindowPortal } from "./WindowPortal";


export const App: FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button
                css={css({
                    background: "black",
                    padding: "1rem",
                    fontSize: "2rem",
                    cursor: "pointer",
                    color: "white"
                })}
                onClick={() => {
                    setOpen(true);
                }}
            >
                open modal
            </button>

            {open && (
                <WindowPortal>
                    <div
                        css={css({
                            background: "blue",
                            padding: "1rem",
                            fontSize: "2rem",
                            color: "white"
                        })}
                    >
                        This is styled!
                    </div>
                </WindowPortal>
            )}
        </div>
    );
}
