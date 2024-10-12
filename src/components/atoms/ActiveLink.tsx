"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const ActiveLink = ({
  children,
  className,
  href,
  ...props
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors",
        isActive ? "bg-primary-violet font-bold" : "hover:bg-primary-violet",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
