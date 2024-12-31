import { GoPlus } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

type IconProps = {
    size?: number;
    className?: string;
};

const tamanhoPadraoIcone: number = 20

export const icones = {
    adicionar: ({size = tamanhoPadraoIcone, className = ""}: IconProps) => (
        <GoPlus size={size} className={className}/>
    ),
    editar: ({size = tamanhoPadraoIcone, className = ""}: IconProps) => (
        <MdModeEditOutline size={size} className={className}/>
    ),
    excluir: ({size = tamanhoPadraoIcone, className = ""}: IconProps) => (
        <AiOutlineDelete size={size} className={className}/>
    ),
};
