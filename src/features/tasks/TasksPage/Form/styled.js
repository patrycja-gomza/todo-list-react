import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    border: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const FormButton = styled.button`
    flex-basis: 200px;
    background-color: ${({ theme }) => theme.color.teal};
    border: 1px solid ${({ theme }) => theme.color.teal};
    color: white;
    font-weight: 300;
    margin: 10px;
    padding: 10px;
    transition: 1s;
    
    &:hover{
        filter: brightness(120%);
        transform: scale(1.1);
    }

    &:active{
            filter: brightness(140%);
    }
`;
