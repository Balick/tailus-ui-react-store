import { useState, useEffect } from 'react';
import Button from '@tailus-ui/Button';
import Tooltip from '@tailus-ui/Tooltip';

const ThemeSwitcher = ({ size = 'md' }: { size?: 'md' | 'sm' | 'xs' }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root
            onClick={handleThemeToggle}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            variant="ghost"
            intent="gray"
            size={size}
            className="relative"
          >
            <Button.Icon type="only" className="absolute inset-0 size-2 scale-0 rounded-full bg-white duration-300 dark:scale-100">
              <span />
            </Button.Icon>
            <Button.Icon type="only" className="size-2 rounded-full bg-gray-950 duration-300 dark:scale-0">
              <span />
            </Button.Icon>
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content inverted className="z-10">
            {darkMode ? 'Light mode' : 'Dark mode'}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ThemeSwitcher;
