import styled from '@emotion/styled';
import { ColorPalette } from '../../typography';
import Icons from '../../Components/IconRenderer';
import Typist from '../../Components/Typist';

const Home = () => {
    const Container = styled.div({
        background: ColorPalette.dark300,
        width: "100vw",
        height: "100svh",
        padding: "1rem 3rem",
        display: "flex",
        flexDirection: "row",
        "@media only screen and (max-width: 1200px)": {
            flexDirection: "column",
            textAlign: 'center'
        },
        "@media only screen and (max-width: 768px)": {
            padding: "1rem 1rem",
        }
    })
    const LeftContent = styled.div({
        width: "50%",
        height: "100%",
        "@media only screen and (max-width: 1200px)": {
            width: "100%",
        }
    })
    const RightContent = styled.div({
        width: "50%",
        height: "100%",

        "@media only screen and (max-width: 1200px)": {
            width: "100%",
        }
    })
    const Contents = styled.div({
        height: "70%",
        width: "100%",
        "& > p": {
            fontSize: '2rem',
            letterSpacing: "2px"
        },
        "& > h1": {
            fontSize: '7rem',
            letterSpacing: "2px",
            padding: "2rem 4rem"
        },
        "& > h6": {
            marginBottom: "2rem"
        },
        "&.right-contents-css": {
            paddingTop: "12rem"
        },
        "@media only screen and (max-width: 768px)": {
            "& > p": {
                fontSize: '1rem',
                letterSpacing: "2px"
            },
            "& > h1": {
                fontSize: '4rem',
                letterSpacing: "2px",
                marginBottom: "20px"
            },
            "& > h6": {
                marginBottom: "2rem"
            },
            "&.right-contents-css": {
                paddingTop: "0rem"
            },
        }
    })



    const RightContentContainer = styled.div({
        height: 'inherit',
        display: "flex",
        alignItems: "end",
        "@media only screen and (max-width: 1200px)": {
            alignItems: "start",
        }
    })


    return (
        <Container>
            <LeftContent>
                <div style={{
                    height: "inherit",
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "end",
                }}>
                    <Contents>
                        <p>Hi!, I am</p>
                        <h1>Dolapo Alli</h1>
                    </Contents>
                </div>
            </LeftContent>
            <RightContent>
                <RightContentContainer>
                    <Contents className='right-contents-css'>
                        <h6>Profound fascination for the art of
                            coding & a thirst for   solving real-world problems!</h6>
                        <Typist />
                        <div style={{
                            gap: 10,
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
                            justifyContent: "space-around",
                            gridAutoFlow: "row",
                            marginTop: "3rem",
                        }}
                        >
                            <Icons />
                        </div>
                    </Contents>
                </RightContentContainer>

            </RightContent>
        </Container>
    )
}

export default Home