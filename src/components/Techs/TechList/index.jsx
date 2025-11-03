import { motion } from "framer-motion";

export const TechList = ({tech}) => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };


    return (
        <motion.li variants={container}>
            <img src={tech.img} title={tech.name} />
            <p className="imgText">{tech.name}</p>
        </motion.li>
    )

}