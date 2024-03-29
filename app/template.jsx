'use client'
import {motion} from 'framer-motion'

export default function Template({ children }) {
    return (
        <motion.div
        initial={{ y: 50, opacity:0 }}
        animate={{ y: 0, opacity:100 }}
        transition={{ type: "spring", stiffness: 75 }}
        >
            {children}
        </motion.div>
    )
}