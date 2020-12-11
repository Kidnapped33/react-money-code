import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    background: #f5f5f5;
    display: flex;
    align-items: center;
    > span {margin-right: 16px; white-space: nowrap;}
     > input {
        background: none;
        border: none;
        display: block;
        width: 100%;
        height: 72px;
      }
`;
type Props = {
    label: string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
    //...rest 指 input 自带的所有属性，就不一个个写了,要排除 children 和 自定义 label
    const {label, children, ...rest} = props;
    return (
        <Label>
            <span>{label}</span>
            <input {...rest}/>
        </Label>
    );
};

export {Input};


