'use client'
import React from "react";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
import { UserButton, SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme, theme, systemTheme } = useTheme()
  let actualTheme = theme === 'system' ? systemTheme : theme
  const switchTheme = () => {
    if (actualTheme === 'dark') {
      setTheme('light')
    }
    else {
      setTheme('dark')
    }
  }

  return (
    <Nav isBordered maxWidth="2xl">
      <NavbarContent as="div" className="items-center" justify={'start'}>
        <NavbarBrand className="flex-none grow-0">
          <p className="sm:block font-bold text-inherit">Bidify</p>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-3">
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
      </NavbarContent> */}

      <NavbarContent as="div" className="items-center" justify={'center'} >
        <Input
          classNames={{
            base: "max-w-full sm:max-w-sm h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="md"
          startContent={<AiOutlineSearch size={18} />}
          type="search"
        />
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify={'end'}>
        <Button isIconOnly onPress={() => switchTheme()}>
          {actualTheme === 'light' ? <BsSun /> : <BsMoon />}
        </Button>
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