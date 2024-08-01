import { Search } from './Search';
import { BrandIcon } from './utilities/Brand';
import { Link } from '@tailus-ui/typography';
import Button from '@tailus-ui/Button';
import Separator from '@tailus-ui/Separator';
import ThemeSwitcher from './ThemeSwitcher';
import { Cart } from './Cart';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const navLinks = [
  { label: 'Explore', href: '/' },
  { label: 'Men', href: '/' },
  { label: 'Women', href: '/' },
  { label: 'Children', href: '/' },
];

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.querySelector('body') as HTMLElement;
    const navItems = document.querySelector('#navItems') as HTMLElement;

    if (isOpen) {
      navItems.style.setProperty('--nav-items-height', `${navItems.scrollHeight}px`);
      root.classList.add('overflow-hidden');
    } else {
      root.classList.remove('overflow-hidden');
      navItems.style.setProperty('--nav-items-height', '0px');
    }
  }, [isOpen]);
  return (
    <>
      <header data-state={isOpen ? 'open' : 'closed'} className="group fixed inset-x-0 z-10 border-b bg-white dark:bg-gray-950">
        <div className="mx-auto grid max-w-7xl items-center px-6 py-4 lg:gap-12 lg:[grid-template-columns:1fr_auto]">
          <div className="grid items-center gap-4 [grid-template-columns:auto_1fr_auto] sm:gap-6 md:gap-12 lg:[grid-template-columns:auto_1fr]">
            <div className="lg:flex lg:items-center lg:gap-8">
              <a href="/examples/ecommerce/store" aria-label="Tailus UI Logo">
                <BrandIcon className="h-8 w-8" />
              </a>
            </div>
            <Search />
            <div className="flex gap-1 lg:hidden">
              <Cart />
              <Button.Root
                onClick={() => setIsOpen(!isOpen)}
                intent="gray"
                variant="ghost"
                aria-label="toggle menu button"
                className="relative -mr-3 lg:hidden"
                size="sm"
              >
                <Button.Icon
                  size="md"
                  type="only"
                  className="absolute inset-0 m-auto -rotate-90 scale-125 opacity-0 duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100"
                >
                  <X />
                </Button.Icon>
                <Button.Icon size="md" type="only" className="duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16"></path>
                  </svg>
                </Button.Icon>
              </Button.Root>
            </div>
          </div>
          <div className="items-center gap-2 lg:flex lg:gap-6">
            <nav id="navItems" className="h-[--nav-items-height] w-full overflow-hidden transition-[height] duration-300 lg:h-auto lg:w-fit">
              <div className="flex flex-col gap-6 pb-4 pt-8 lg:flex-row lg:py-0">
                {navLinks.map((link, index) => (
                  <Link key={index} variant="plain" intent="gray" size="sm" href={link.href} children={link.label} />
                ))}
              </div>
            </nav>

            <Separator orientation="vertical" className="hidden h-4 lg:block" />

            <div className="hidden gap-2 lg:flex">
              <Button.Root href="/examples/forms/login3" size="sm" intent="gray" variant="soft">
                <Button.Label>Sign In</Button.Label>
              </Button.Root>
              <Cart />
              <ThemeSwitcher size="sm" />
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          data-state={isOpen ? 'open' : 'closed'}
          className="fixed inset-0 z-[9] bg-white/50 data-[state=open]:animate-overlayShow lg:hidden dark:bg-[--overlay-bg]"
          aria-hidden
          data-aria-hidden="true"
        />
      )}
    </>
  );
};
