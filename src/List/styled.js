import styled, { css } from "styled-components";

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
    border-bottom: 1px solid lightgrey;
    padding: 10px;

    ${({ hidden }) => hidden && css`
        display: none
    `};
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
`;

export const ToggleDoneButton = styled(ListButton)`
    background-color: hsl(120, 100%, 25%);

    &:hover {
        background-color: hsl(120, 100%, 30%);
    }

    &:active {
        background-color: hsl(120, 100%, 35%);
    }
`;

export const RemoveButton = styled(ListButton)`
    background-color: hsl(0, 100%, 50%);
    font-weight: bold;

    &:hover {
        background-color: hsl(0, 100%, 60%);
    }

    &:active {
        background-color: hsl(0, 100%, 70%);
    }
`;
