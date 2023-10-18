import styled from '@emotion/styled';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typist = () => {
    const [tx, setTx] = useState(false)
    const TypeAnimationStyled = styled(TypeAnimation)({
        ":after": {
            content: '"."',
            height: "100px",
            animation: "cursor 1.1s infinite step-start"
        },
    })
    const Flex = styled.span({
        fontSize:"2rem",
        "@media only screen and (max-width: 760px)": {
            fontSize:"1.7rem",
        }
    })
    return (
        <div>
            {tx ?
                <Flex style={{fontSize:"2rem"}}>FrontEnd | BackEnd | Mobile Apps</Flex> :
                <TypeAnimationStyled
                    className='typing'
                    sequence={[
                        2000,
                        'FrontEnd',
                        1000,
                        'BackEnd',
                        1000,
                        'Mobile Apps',
                        1000,
                        () => {
                            setTx(true)
                        }
                    ]}
                    style={{ fontSize: '2rem' }}
                    repeat={Infinity}
                    cursor={false}
                />
            }
        </div>
    )
}

export default Typist