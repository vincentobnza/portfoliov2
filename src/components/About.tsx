import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";

export const About = () => {
  return (
    <section className="w-full justify-start items-start flex flex-col gap-4">
      <Terminal>
        <TypingAnimation>&gt; pnpm dlx vincent@latest init </TypingAnimation>

        <AnimatedSpan
          delay={1500}
          className="text-zinc-600 dark:bg-gradient-to-br dark:from-slate-200 font-semibold dark:to-emerald-900 dark:bg-clip-text dark:text-transparent"
        >
          <span>✔ Preflight checks.</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={2000}
          className="text-zinc-600 dark:bg-gradient-to-br dark:from-slate-200 font-semibold dark:to-emerald-900 dark:bg-clip-text dark:text-transparent"
        >
          <span>✔ Verifying framework... Found UI/UX Designer. .</span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={2500}
          className="text-zinc-600 dark:bg-gradient-to-br dark:from-slate-200 font-semibold dark:to-emerald-900 dark:bg-clip-text dark:text-transparent"
        >
          <span>
            ✔ Validating creativity and problem-solving skills... Passed.{" "}
          </span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={3000}
          className="text-zinc-600 dark:bg-gradient-to-br dark:from-slate-200 font-semibold dark:to-emerald-900 dark:bg-clip-text dark:text-transparent"
        >
          <span>✔ Optimizing user experience... Always improving. </span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={3500}
          className="text-zinc-600 dark:bg-gradient-to-br dark:from-slate-200 font-semibold dark:to-emerald-900 dark:bg-clip-text dark:text-transparent"
        >
          <span>✔ Writing design components... Done. </span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={4000}
          className="text-zinc-600 dark:bg-gradient-to-br dark:from-slate-200 font-semibold dark:to-emerald-900 dark:bg-clip-text dark:text-transparent"
        >
          <span>
            ✔ Updating skills... React, Supabase, TailwindCSS, Next.js
          </span>
        </AnimatedSpan>

        <AnimatedSpan
          delay={4500}
          className="text-zinc-600 dark:bg-gradient-to-br dark:from-slate-200 font-semibold dark:to-emerald-900 dark:bg-clip-text dark:text-transparent"
        >
          <span>✔ Installing passion for innovation... 100%. </span>
        </AnimatedSpan>

        <TypingAnimation
          delay={6500}
          className="mt-5  text-muted-foreground font-semibold"
        >
          Success! Vincent is ready to build seamless and engaging digital
          experiences 🚀
        </TypingAnimation>
      </Terminal>
    </section>
  );
};
