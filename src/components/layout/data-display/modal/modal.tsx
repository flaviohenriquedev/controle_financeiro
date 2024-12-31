import {ReactNode} from "react";

type Props = {
    idModal: string
    children: ReactNode
    titulo?: string
}

export function Modal({idModal, children, titulo}: Props) {
    return (
        <dialog id={idModal} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {titulo ?? (
                    <h3 className="font-bold text-lg">{titulo}</h3>
                )}
                {children}
            </div>
        </dialog>
    )
}