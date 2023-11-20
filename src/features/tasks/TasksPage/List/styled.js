import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const TasksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightgrey};
    padding: 10px;

   ${({ $hidden }) => $hidden && css`
        display: none;
    `};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.teal};
`;

export const ListContent = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const ListButton = styled.button`
    height: 30px;
    width: 30px;
    color: white;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    cursor: pointer;
`;

export const ToggleDoneButton = styled(ListButton)`
    background-color: ${({ theme }) => theme.color.green};

    &:hover {
        filter: brightness(120%)
    }

    &:active {
        filter: brightness(140%);
    }
`;

export const RemoveButton = styled(ListButton)`
    background-color: ${({ theme }) => theme.color.crimson};
    font-weight: bold;

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(140%);
    }
`;
