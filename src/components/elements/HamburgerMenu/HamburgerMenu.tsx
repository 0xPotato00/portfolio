import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Fragment } from 'react';
import Button from '../Button';
import HamburgerIconButton from '../HamburgerIconButton';

const HamburgerMenu = () => {
  return (
    <Menu>
      <div>
        <Menu.Button as={HamburgerIconButton} />
      </div>

      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="text-black w-full sm:w-56 px-2 py-1 divide-y divide-gray-200 dark:divide-gray-700 text-xs absolute top-0 right-0 origin-top-right bg-white dark:bg-gray-900 drop-shadow focus:outline-none sm:rounded overflow-hidden mt-20 sm:mt-10">
          <div className="py-2 px-1">
            <Menu.Item as={Link} href="/profile" passHref>
              <Button
                as="a"
                className="group normal-case w-full flex items-center justify-between font-medium text-black dark:text-white text-base"
              >
                <UserCircleIcon className="group-hover:fill-yellow-500 h-5 w-5" /> Profile
              </Button>
            </Menu.Item>
            <Menu.Item as={Link} href="/logout" passHref>
              <Button
                as="a"
                className="normal-case w-full flex items-center justify-end font-medium text-black dark:text-white text-base"
              >
                Logout
              </Button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HamburgerMenu;
