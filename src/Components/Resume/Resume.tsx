import styled from "@emotion/styled"
import "./Resume.css"
import dolapo_alli_resume from "../../assets/Resume/dolapo-alli.pdf";
import { COLORS } from "../../typography";

const Resume = () => {
    const Container = styled.a({
        padding: '0 3rem',
        color: "white",
        border: '1px solid white',
        display: 'flex',
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        boxShadow:`inset 0 0 0 0 ${COLORS.lightGrey}`,
        transition:"ease-in 0.5s",
        outline:"none",
        "&:hover":{
            boxShadow:`inset 300px 0 0 0 ${COLORS.lightGrey}`,
            color: COLORS.darkBlack,
            fontWeight:"500"
        }
    })
    return (
        <Container href={dolapo_alli_resume} download="My_File.pdf" className="resume-animation">
            Resumé
        </Container>

    )
}

export default Resume