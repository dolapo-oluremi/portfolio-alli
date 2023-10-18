
import {
    CardWrapper,
    CardImage,
    CardTextWrapper,
    CardTextTitle,
    CardTextBody,
    CardStatWrapper,
    CardStats,
    LinkText
} from "../../Components/ProjectCards/ProjectCards";
import Tilt from "react-parallax-tilt";
import { ColorPalette } from "../../typography";

import styled from '@emotion/styled'

export const Projects = () => {
    const Container = styled.div({
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 100,
        padding: "6rem 0",
        minHeight: "100vh",
        "@media only screen and (max-width: 1400px)": {
            gridTemplateColumns: "1fr 1fr",
            gap: 50,
        },
        "@media only screen and (max-width:  878px)": {
            gridTemplateColumns: "1fr",
        },
    })
    return (
        <Container>
            {Array(7).fill(null).map((_v, i) => (<Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} key={i}>
                <CardWrapper color={ColorPalette.dark100}>
                    <CardImage background={'https://picsum.photos/200'} />
                    <CardTextWrapper>
                        <CardTextTitle color={ColorPalette.dark300}>titless</CardTextTitle>
                        <CardTextBody color={ColorPalette.dark300}>
                            WWWWLorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                            temporibus omnis illum maxime quod deserunt eligendi dolor
                        </CardTextBody>
                    </CardTextWrapper>
                    <CardStatWrapper bgcolor={ColorPalette.coolBlue}>
                        <CardStats>
                            <LinkText color={ColorPalette.brightBeige} href="#">website</LinkText>
                        </CardStats>
                        <CardStats>
                            <LinkText color={ColorPalette.brightBeige} href="#">githube</LinkText>
                        </CardStats>
                    </CardStatWrapper>
                </CardWrapper>
            </Tilt>))}
        </Container>
    );
};


export default Projects