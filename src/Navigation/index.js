import { StyledNavLink, StyledNavList } from "./styled";
import { toAuthor, toTasks } from "../routes";

export default () => {
    return (
        <nav>
            <StyledNavList>
                <li>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </li>
            </StyledNavList>
        </nav>
    );
};