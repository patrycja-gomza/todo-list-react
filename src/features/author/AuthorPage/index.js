import Section from "../../../common/Section/index.js";
import Header from "../../../common/Header/index.js";
import { StyledContainer } from "../../../common/styled.js";
import { Chapter } from "./styled.js";

function Author() {
    return (
        <StyledContainer>
            <Header title="O autorze" />
            <Section
                title="Patrycja Gomza"
                body={
                    <>
                        <Chapter>
                            Ukończyłam studia na kierunku budownictwo lądowe i wodne na <strong>Politechnice Wrocławskiej</strong> i przez ostatnie 8 lat pracowałam jako inżynier w biurze projektowym, zajmując się projektowaniem konstrukcji budynków.
                        </Chapter>
                        <Chapter>
                            Jestem osobą ambitną, która w wyzwaniach widzi możliwości rozwoju, a innych ludzi traktuje ze szczerością i szacunkiem. Ponadto <strong>cechuje mnie wysokie poczucie odpowiedzialności oraz konsekwencja</strong>, co znajduje odzwierciedlenie w moim <i><u>hobby</u></i>. Interesuję się szkoleniem psów, gdzie obowiązkowość i dobra organizacja są ważnym elementem nie tylko codziennego treningu, ale również życia. 👩🏼💼🐕‍🦺
                        </Chapter>
                    </>
                }
            />
        </StyledContainer>
    )
};

export default Author;
