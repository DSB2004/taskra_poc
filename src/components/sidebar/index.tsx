"use client";

import { ReactNode, useCallback } from "react";
// import { useMenu } from "@/provider/menu.provider";
import {
  User,
  Home,
  UtensilsCrossed,
  BadgeIndianRupee,
  Settings,
  CookingPot,
  ClipboardClock,
  List,
  Users,
  Presentation,
  Headset,
} from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
// import { useProfileStore } from "@/store/profile.store";

type NavItemProps = {
  children: ReactNode;
  className?: string;
  active: boolean;
  icon: ReactNode;
  disable?: boolean;
  href: string;
};

export function NavItem({
  children,
  active,
  icon,
  href,
  className = "",
  disable = false,
}: NavItemProps) {
  const { push } = useRouter();
  return (
    <div
      onClick={() => push(href)}
      className={`
        flex items-center rounded-md overflow-hidden transition-all duration-300
        ${
          active
            ? "bg-muted text-inherit!"
            : "hover:bg-muted hover:text-inherit"
        }
        ${disable ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      <div className="p-2.5 flex items-center justify-center">{icon}</div>

      <div
        className={`box-border w-48 transition-all duration-300 overflow-hidden`}
      >
        <div className="w-48">{children}</div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { isLoaded } = useAuth();

  const active = useCallback(
    (path: string) => pathname.includes(path),
    [pathname]
  );

  const disable = !isLoaded;

  return (
    <aside className="h-full overflow-hidden transition-all duration-300">
      <div className="flex flex-col gap-2 p-2 h-full">
        <NavItem
          icon={<Home size={20} />}
          href="/"
          active={pathname === "/"}
          disable={disable}
        >
          <span className="text-sm">Home</span>
        </NavItem>

        <NavItem
          icon={<Headset size={20} />}
          href="/leads"
          active={active("menu")}
          disable={disable}
        >
          <span className="text-sm">Lead Tracking</span>
        </NavItem>

        <NavItem
          icon={<Presentation size={20} />}
          href="/projects"
          active={active("orders")}
          disable={disable}
        >
          <span className="text-sm">Projects</span>
        </NavItem>

        <NavItem
          icon={<List size={20} />}
          href="/list"
          active={active("list")}
          disable={disable}
        >
          <span className="text-sm">List</span>
        </NavItem>

        <NavItem
          icon={<Users size={20} />}
          href="/users"
          active={active("user")}
          disable={disable}
        >
          <span className="text-sm">User Management</span>
        </NavItem>

        <NavItem
          icon={<ClipboardClock size={20} />}
          href="/audit"
          active={active("audit")}
          disable={disable}
        >
          <span className="text-sm">Audit Log</span>
        </NavItem>

        <div className="mt-auto" />

        <NavItem
          icon={<Settings size={20} />}
          href="/settings"
          active={active("settings")}
          disable={false}
          className="mb-5"
        >
          <span className="text-sm">Settings</span>
        </NavItem>
      </div>
    </aside>
  );
}
