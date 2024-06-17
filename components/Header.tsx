'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bars3Icon,
  ChevronDoubleDownIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px8"
        aria-lable="global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto"
              src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  );
}

export default Header;
