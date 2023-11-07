import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    align-items: center;
    font-size: medium;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    border: none;
    padding-left: 30px;
    transition: 0.5s;

    &:hover{
        filter: brightness(120%);
    }

    &:active{
        filter: brightness(140%);
    }

    &:disabled{
        color: ${({ theme }) => theme.color.silver};

        &:hover{
            color: ${({ theme }) => theme.color.silver};
        }
    }
`;