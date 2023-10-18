import { motion } from "framer-motion";
import {icons} from '../typography'
import styled from '@emotion/styled';

const Icons = () => {
    const IconImage = styled.img({
        width: "50px",
        height: "50px",
        filter: "invert(98%) sepia(54%) saturate(249%) hue-rotate(351deg) brightness(102%) contrast(92%)",
        "&:hover": {
            cursor: "pointer",
            filter: "invert(100%)",
        }
    });
    return (<>
        {icons.map((v, i) => <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }}
        ><IconImage src={v} key={i} /></motion.div>)}
    </>)
}

export default Icons;