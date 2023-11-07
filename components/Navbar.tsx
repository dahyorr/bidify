import React from "react";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import { UserButton, SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <Nav isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="sm:block font-bold text-inherit">Bidify</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<AiOutlineSearch size={18} />}
          type="search"
        />
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </NavbarContent>
    </Nav>
  );
}

export default Navbar;