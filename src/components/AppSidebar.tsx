import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Users, Compass, BookOpen, Map, Mail, Mountain, Gamepad2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "The Game", url: "/game", icon: Gamepad2 },
  { title: "The Team", url: "/team", icon: Users },
  { title: "Our Journey", url: "/journey", icon: Compass },
  { title: "Documentation", url: "/documentation", icon: BookOpen },
  { title: "Roadmap", url: "/roadmap", icon: Map },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint-gradient shadow-mint">
            <Mountain className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-display text-sm font-bold tracking-tight">Tech Trek</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Docs</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigate</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="px-2 py-2 text-[10px] uppercase tracking-widest text-muted-foreground group-data-[collapsible=icon]:hidden">
          v0.1 · Tech Trek 2026
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
