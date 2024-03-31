'use client'

import { AnimatePresence, motion } from 'framer-motion'

interface AnimationWrapperProps {
  children: React.ReactNode
  initial?: any
  animate?: any
  transition?: any
}

export const AnimationWrapper = ({
  children,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 }
}: AnimationWrapperProps) => {
  return (
    <AnimatePresence>
      <motion.div initial={initial} animate={animate} transition={transition}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
