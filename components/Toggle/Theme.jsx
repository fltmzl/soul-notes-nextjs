import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-orange-700 fixed bottom-5 right-5">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme}</button>
    </div>
  );
};

export default Theme;
