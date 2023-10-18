
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

export const Projects = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 100,
            padding: "6rem 0",
            minHeight: "100vh"
        }}>
            {Array(7).fill(null).map(() => (<Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} >
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
        </div>
    );
};


export default Projects