import { motion } from 'motion/react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#080910] pointer-events-none">
      {/* Single Mesh Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-[var(--gradient-hero)]"
      />
      
      {/* Structural Architectural Grid (Signature Element) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />
    </div>
  );
}
