import { ReactNode } from "react";
import {Btn} from './style'

interface ButtonProps {
    children: ReactNode;
    func: () => any;
    color?: string;
}

const Button = ({children, func, color}: ButtonProps) => {
    return (
        <Btn color={color} onClick={() => func()}>{children}</Btn>
    )
}

export default Button