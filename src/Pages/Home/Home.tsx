import styled from '@emotion/styled';
import { TypeAnimation } from 'react-type-animation';
import { ColorPalette, icons } from '../../typography';
import { motion } from "framer-motion";

const Home = () => {
    const Container = styled.div({
        background: ColorPalette.dark300,
        width: "100vw",
        height: "100svh ",
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

    const TypeAnimationStyled = styled(TypeAnimation)({
        ":after": {
            content: '"."',
            height: "100px",
            animation: "cursor 1.1s infinite step-start"
        },
    })
    const IconImage = styled.img({
        width: "50px",
        height: "50px",
        filter: "invert(98%) sepia(54%) saturate(249%) hue-rotate(351deg) brightness(102%) contrast(92%)",
        "&:hover": {
            cursor: "pointer",
            filter: "invert(100%)",
        }
    });
    const RightContentContainer = styled.div({
        height: 'inherit',
        display: "flex",
        alignItems: "end",
        "@media only screen and (max-width: 1200px)": {
            alignItems: "start",
        }
    })
    const Icons = () => {
        return (<>
            {icons.map((v, i) => <motion.div
                key={i}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 5 }}
            ><IconImage src={v} key={i} /></motion.div>)}
        </>)
    }

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
                        <TypeAnimationStyled
                            className='typing'
                            sequence={[
                                2000,
                                'FrontEnd',
                                1000,
                                'BackEnd',
                                1000,
                                'Mobile Apps',
                                1000
                            ]}
                            style={{ fontSize: '2rem' }}
                            repeat={Infinity}
                            cursor={false}
                        />
                        <div style={{
                            gap: 10,
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
                            justifyContent: "space-around",
                            gridAutoFlow: "row",
                            marginTop: "3rem"
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