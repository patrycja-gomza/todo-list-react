import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    align-items: center;
    font-size: medium;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Button = styled.button`
    color: hsl(180, 100%, 25%);
    background-color: transparent;
    border: none;
    padding-left: 30px;
    transition: 0.5s;

    &:hover{
        color: hsl(180, 100%, 30%);
    }

    &:active{
        color: hsl(180, 100%, 35%);
    }

    &:disabled{
        color: hsl(0, 0%, 80%);

        &:hover{
            color: hsl(0, 0%, 80%);
        }
    }
`;