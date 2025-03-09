import { useTheme } from "./ThemeProvider";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-20 h-10 rounded-full flex items-center p-1 transition-all duration-500 shadow-md outline-none cursor-pointer
        ${
          isDark
            ? "bg-gradient-to-r from-transparent via-zinc-600/40 to-zinc-600"
            : "bg-gradient-to-r from-blue-400 to-sky-200"
        }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        {/* Night Mode Elements - Stars */}
        {isDark && (
          <>
            <div className="w-2 h-2 bg-white rounded-full opacity-10 transform rotate-45"></div>
            <div className="w-3 h-3 bg-white rounded-full opacity-20 transform rotate-45"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-80 transform rotate-45"></div>
          </>
        )}
        {/* Day Mode Elements - Clouds */}
        {!isDark && (
          <>
            <div className="w-4 h-2 bg-white rounded-full opacity-80"></div>
            <div className="w-3 h-2 bg-white rounded-full opacity-60"></div>
            <div className="w-4 h-2 bg-white rounded-full opacity-80"></div>
          </>
        )}
      </div>

      {/* Toggle Ball */}
      <div
        className={`w-8 h-8 rounded-full transition-all duration-500 shadow-lg flex items-center justify-center 
          ${
            isDark ? "translate-x-10 bg-white" : "translate-x-0 bg-yellow-400"
          }`}
      >
        {/* Moon Craters */}
        {isDark && (
          <>
            {/* CRATERS */}
            <div className="absolute w-2 h-2 bg-zinc-300 rounded-full top-3 left-2"></div>
            <div className="absolute w-1 h-1 bg-zinc-300 rounded-full right-2 bottom-2"></div>
            <div className="absolute w-[5px] h-[5px] bg-zinc-300 rounded-full top-2 right-2"></div>
          </>
        )}
        {/* Sun Rays */}
        {!isDark && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-3 bg-yellow-300 rounded-full"
                style={{ transform: `rotate(${i * 45}deg) translateY(-6px)` }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
