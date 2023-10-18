import React, { useState } from 'react'
import styled from '@emotion/styled'
import { ColorPalette } from '../../typography'
import { useForm } from 'react-hook-form'


const Footer = () => {



    const Container = styled.div({
        height: "100vh",
        width: "100%",
        background: ColorPalette.dark300,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    })
    const Form = styled.form({
        display: "grid",
        width: "40%",
        gridTemplateColumns: "repeat(10, 1fr)",
        gridTemplateRows: "repeat(5, 50px)",
        gap: 15,
        height: "50%",
        justifyContent: "space-between",
        "& > *": {
            background: ColorPalette.dark300,
            boxShadow: `0 0 0 2px ${ColorPalette.green}`,
        },
        "& > *:nth-child(1)": {
            gridColumn: "1 / 6",
            gridRow: " 1 / 2",
        },
        "& > *:nth-child(2)": {
            gridColumn: "6 / 11",
            gridRow: " 1 / 2",
        },
        "& > *:nth-child(3)": {
            gridColumn: "1 / 11",
            gridRow: "2/5",
            resize: "none"
        },
        "& > *:nth-child(4)": {
            gridColumn: "1 / 11",
            gridRow: " 5 /6",
        }
    })
    return (
        <Container>
            <Form>
                <input placeholder='Name' />
                <input placeholder='Email' />
                <textarea rows={3} placeholder='messagss ' maxLength={2000} draggable />
                <input type='submit' value="Send" />
            </Form>
        </Container>
    )
}

export default Footer