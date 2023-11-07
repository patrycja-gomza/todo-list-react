import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const SectionHeader = styled.h2`
    border-bottom: 1px solid ${({ theme }) => theme.color.lightgrey};
    padding: 20px;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const SectionBody = styled.div`
    padding: 20px;
`;

