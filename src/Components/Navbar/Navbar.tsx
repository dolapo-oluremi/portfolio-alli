import { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import cross from '../../assets/Icon/cross.svg'
import { ColorPalette, Colors, tabHeaders } from '../../typography'


const Navbar = () => {
    const [isStickyNav, setIsStickyNav] = useState(false);
    const stickNavbar = () => {
        if (window.scrollY >= 60) {
            setIsStickyNav(true);
        }
        else {
            setIsStickyNav(false)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    }, [isStickyNav])
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState('Home');



    const Container = styled.div({
        width: "100%",
        height: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: 'center',
        background: isStickyNav ? ColorPalette.coolBlue : ColorPalette.dark300,
        padding: "2rem",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 99
    });
    const UList = styled.ul({
        listStyle: "none",
        display: "flex",
        flex: 1,
        "@media only screen and (max-width: 768px)": {
            background: Colors.blue,
            position: 'absolute',
            top: 0,
            right: 0,
            height: "100vh",
            flexDirection: "column",
            width: "65%",
            padding: "5rem 0rem",
            display: toggle ? "block" : 'none'
        }
    });
    const ListItem = styled.li({
        padding: "0.5rem 3rem",
        fontWeight: 700,
        cursor: "pointer",
        margin: "2rem",
        color: isStickyNav ? ColorPalette.dark300 : ColorPalette.dark50,
        "&.resume__download": {
            border: `1px solid ${!isStickyNav ? ColorPalette.dark300 : ''}`,
            backgroundColor: isStickyNav ? 'transparent' : ColorPalette.brightBeige,
            color: `${isStickyNav ?  ColorPalette.brightBeige : ColorPalette.dark300}`
        },
        "&.active": {
            color: isStickyNav ? ColorPalette.green : ColorPalette.brightBeige
        },
        "&:hover": {
            color: isStickyNav ? ColorPalette.dark300 : ColorPalette.brightBeige
        }
    })

    const RenderMenuItems = () => {
        const handleActiveTab = (e) => {
            setActive(e.target.innerText)
        }
        return (<UList>
            {tabHeaders.map((item, i) => (
                <ListItem
                    key={i}
                    onClick={(e) => handleActiveTab(e)}
                    className={`${active === item ? "active" : ""} ${item === 'Resume' ? "resume__download" : ""}`}
                >
                    {item}
                </ListItem>
            ))}
        </UList>)
    };

    const ToggleIconContainer = styled.div({
        zIndex: 12,
        position: "absolute",
        top: 0,
        right: 0,
        padding: "1rem",
        "@media only screen and (min-width: 768px)": {
            display: 'none'
        }
    })

    return (
        <Container>
            <ToggleIconContainer onClick={() => setToggle(!toggle)}
            >
                <img style={{
                    width: "2rem",
                    height: "2rem"
                }} src={cross} />
            </ToggleIconContainer>
            <RenderMenuItems />
            {/* <Player
                autoplay
                loop
                src={cross}
                style={{ height: '300px', width: '300px' }}
            >
                <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player> */}
        </Container>
    )
}

export default Navbar