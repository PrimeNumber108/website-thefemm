import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AnnouncementBar from "@/components/AnnouncementBar";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <AnnouncementBar />
      <Popover className="sticky bg-white">
        <div className="mx-auto max-w-screen shadow lg:px-16 px-6">
          <div className="flex items-center justify-between py-4">
            <div className="lg:hidden">
              <Popover.Button>
                <span
                  href="#"
                  onClick={() => setOpen(true)}
                  className="text-primary hover:underline"
                >
                  Menu
                </span>
              </Popover.Button>
            </div>

            <div className="lg:flex-1 lg:w-0 flex justify-start items-center gap-10">
              <Link href="/">KASOMO</Link>
              <Popover.Group as="nav" className="lg:flex hidden space-x-10">
                <Link href="/products" className="text-primary hover:underline">
                  Our products
                </Link>
                <Link
                  href="/ingredients"
                  className="text-primary hover:underline"
                >
                  Our ingredients
                </Link>
                <Link href="/about" className="text-primary hover:underline">
                  Our story
                </Link>
              </Popover.Group>
            </div>
          </div>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-30" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="flex justify-between items-center px-4 sm:px-6">
                          <Dialog.Title className="text-lg text-gray-600">
                            Menu
                          </Dialog.Title>
                          <button
                            type="button"
                            className="rounded-md text-gray-600"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="relative mt-10 flex-1 px-4 sm:px-6">
                          <div className="flex flex-col gap-10">
                            <Link
                              href="/"
                              className="text-2xl font-serif text-primary hover:underline"
                              onClick={() => setOpen(false)}
                            >
                              Home
                            </Link>
                            <Link
                              href="/products"
                              className="text-2xl font-serif text-primary hover:underline"
                              onClick={() => setOpen(false)}
                            >
                              Our products
                            </Link>
                            <Link
                              href="/ingredients"
                              className="text-2xl font-serif text-primary hover:underline"
                              onClick={() => setOpen(false)}
                            >
                              Our ingredients
                            </Link>
                            <Link
                              href="/about"
                              className="text-2xl font-serif text-primary hover:underline"
                              onClick={() => setOpen(false)}
                            >
                              Our story
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </Popover>
    </header>
  );
}
