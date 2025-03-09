import { FileUser, Linkedin, Github } from "lucide-react";
import { Text } from "../typography/Text";
import { Glow } from "./ui/glow";
import { motion } from "framer-motion";

const List = [
  {
    name: "My Resume",
    icon: FileUser,
    delay: 0,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    delay: 0.1,
  },
  {
    name: "Github",
    icon: Github,
    delay: 0.2,
  },
];

export const ConnectCards = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto p-8 grid md:grid-cols-3 gap-4 relative">
      <Glow blur="3xl" />
      {List.map((item, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: item.delay }}
          key={index}
          className="flex flex-col items-center p-8 py-14 rounded-lg dark:bg-gradient-to-b dark:from-[#181818] dark:via-[#181818] dark:to-zinc-800/20 border dark:border-zinc-800 hover:opacity-70 transition-all ease-in-out duration-300 cursor-pointer"
        >
          <item.icon className="w-8 h-8 mb-6 text-zinc-600 dark:text-zinc-100" />
          <Text>{item.name}</Text>
        </motion.div>
      ))}
    </div>
  );
};
