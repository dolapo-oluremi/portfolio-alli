import styled from '@emotion/styled';
import { ColorPalette } from '../../typography';

const Social = () => {
    const Container = styled.div({
        position: "fixed",
        border: `1px solid ${ColorPalette.brightBeige}`,
        top: "calc(50% - 150px)",
        right: 0,
        width: "40px",
        height: "200px",
        zIndex: 999,
        display: "flex",
        backgroundColor: ColorPalette.dark200
    })
    return (
        <Container>
            <ul style={{ listStyle: "none", color: ColorPalette.brightBeige, display:"flex", flexDirection:"column" , alignItems:'center', height:"100%", justifyContent:"space-around", width:"100%"}}>
                <li>*</li>
                <li>*</li>
                <li>*</li>
                <li>*</li>
            </ul>
        </Container>
    )
}

export default Social