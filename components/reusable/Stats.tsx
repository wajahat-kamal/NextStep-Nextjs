import React from 'react'
import { motion } from 'motion/react'

function Stats() {
    const stats = [
        { value: "20+", label: "Styles" },
        { value: "5+", label: "Brands" },
        { value: "4.9★", label: "Rated" },
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex gap-10 pt-4 border-t border-white/10"
        >
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.75 + i * 0.1, ease: "easeOut" }}
                >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/50 uppercase tracking-widest mt-1">{stat.label}</p>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Stats