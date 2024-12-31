import { GoPlus } from "react-icons/go";

type IconProps = {
    size?: number;
    className?: string;
};

const tamanhoPadraoIcone: number = 20

export const icones = {
    adicionar: ({size = tamanhoPadraoIcone, className = ""}: IconProps) => (
        <GoPlus size={size} className={className}/>
    ),
};
