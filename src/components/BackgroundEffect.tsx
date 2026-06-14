import { motion } from 'motion/react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950 pointer-events-none">
      {/* Mesh gradients of floating vibrant glowing blobs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-pink-500/10 blur-[100px] md:blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[15%] right-[5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-violet-600/15 blur-[120px] md:blur-[160px]"
      />
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[40%] right-[25%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full bg-cyan-500/10 blur-[90px] md:blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, -20, 50, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[40%] left-[20%] w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] rounded-full bg-emerald-500/8 blur-[80px] md:blur-[120px]"
      />
      
      {/* Glowing Grid Background Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"
      />
    </div>
  );
}
