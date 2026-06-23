import { motion } from "framer-motion";

const HighlightedText = ({ text }: { text: string }) => {
  return (
    <motion.span className="bg-linear-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent font-bold"
        initial={{opacity:0.7}} animate={{opacity:1}} transition={{ delay:1, duration:1, ease:'linear' }}
    >
      {text}
    </motion.span>
  );
};

export default HighlightedText;
