import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    border: none;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const FormInput = styled.input`
    flex-grow: 1;
    border: 1px solid lightgray;
    margin: 10px;
    padding: 10px;
`;

export const FormButton = styled.button`
    flex-basis: 200px;
    background-color: hsl(180, 100%, 25%);
    border: 1px solid hsl(180, 100%, 25%);
    color: white;
    font-weight: 300;
    margin: 10px;
    padding: 10px;
    transition: 1s;
    
    &:hover{
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active{
            background-color: hsl(180, 100%, 35%);
    }
`;
