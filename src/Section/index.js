import { StyledSection, Div, Header2 } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Div $headerArea>
            <Header2>
                {title}
            </Header2>
            {extraHeaderContent}
        </Div>
        <Div $body>
            {body}
        </Div>
    </StyledSection>
);

export default Section;