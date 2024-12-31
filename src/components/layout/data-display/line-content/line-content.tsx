import {ReactNode} from "react";

type Props = {
    children: ReactNode
}

export function LineContent({children}: Props) {
    return (
        <div className={`flex gap-4 items-end mt-2 w-full`}>
            {children}
        </div>
    )
}