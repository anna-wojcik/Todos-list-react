import { Main } from "../../common/Main/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Main>
        <Header title="O autorze" />
        <Section
            title="Anna Wójcik"
            body={
                <>
                    <h3>Wykształcenie</h3>
                    <p>Jestem studentką <b> Informatyki</b> na Politechnice Lubelskiej.</p>
                    <p>Posiadam <b>wykształcenie średnie</b>. Ukończyłam V Liceum Ogólnokształcące im. Marii
                        Skłodowskiej-Curie w Lublinie. </p>
                    <h3>Umiejętności</h3>
                    <p>Potrafię programować w językach:
                        <br /> - <b>JavaScript</b>
                        <br /> - <b>React</b>
                        <br /> - <b>C</b>
                        <br /> - <b>C++</b>
                        <br /> - <b>Python</b>
                        <br /> Znam języki znaczników: <b>HTML</b> i <b>CSS</b>
                        <br /> Posługuję się narzędziem <b>GitHub</b>
                    </p>
                </>
            }
        />
    </Main>
);