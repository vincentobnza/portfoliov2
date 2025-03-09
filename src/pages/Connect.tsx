import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ConnectCards } from "../components/ConnectCards";
import { Text } from "../typography/Text";
import { SparklesText } from "../components/magicui/sparkles-text";
import { motion } from "motion/react";

const ConnectWithMe = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto p-5 flex flex-col space-y-14 items-start justify-start">
      <div className="w-full flex justify-between items-start space-y-2">
        <Link
          to="/"
          className="text-zinc-600 dark:text-zinc-400 dark:hover:text-white"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="flex flex-col items-center text-center gap-3">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SparklesText text="Connect with Me" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Text>
              Whether you want to discuss a project, network, or just chat about
              design & development, feel free to reach out! I'm always open to
              new opportunities and collaborations.
            </Text>
          </motion.div>
        </div>

        <div className="sm:hidden md:flex lg:flex"></div>
      </div>

      <ConnectCards />
    </div>
  );
};

export default ConnectWithMe;
