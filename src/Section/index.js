import { StyledSection, SectionHeader, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionHeader>
            {title}
            {extraHeaderContent}
        </SectionHeader>
        <SectionBody>
            {body}
        </SectionBody>
    </StyledSection>
);

export default Section;