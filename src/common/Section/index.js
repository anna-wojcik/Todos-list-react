import { StyledSection, Wrapper, SubHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Wrapper $headerArea>
            <SubHeader>
                {title}
            </SubHeader>
            {extraHeaderContent}
        </Wrapper>
        <Wrapper $body>
            {body}
        </Wrapper>
    </StyledSection>
);

export default Section;