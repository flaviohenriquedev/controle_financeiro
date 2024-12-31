import {LabelHTMLAttributes, ReactNode} from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    descricao: string
    children: ReactNode
}

export function Label({descricao, children}: Props) {
    return (
        <label className="form-control">
            <div className={`mb-1`}>
                <span className={`text-[10pt]`}>{descricao}</span>
            </div>
            {children}
        </label>
    )
}