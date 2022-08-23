import styled from 'styled-components'

interface BtnProps{
    color?: string
}

export const Btn = styled.button`
    margin: 5px;
    padding: 3px;
    border: none;
    border-radius: 5px;
    background-color: ${(props : BtnProps) => props.color? props.color : "green"};
    color: white;
    cursor:pointer;
`