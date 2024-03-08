'use client'
import {motion} from 'framer-motion'

export default function Template({ children }) {
    return (
        <motion.div
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            {children}
        </motion.div>
    )
}