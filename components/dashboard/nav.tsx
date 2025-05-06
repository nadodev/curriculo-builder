import { FileText, Settings } from "lucide-react";
import { NavItems } from "./nav-items";

export function Nav() {
  return (
    <nav className="w-full">
          <ul className="space-y-3">
          <NavItems
          title="Currículos"
          icon={<FileText className="mr-2 h-4 w-4" />}
          href="/dashboard/resumes"
          active={true}
        />

        <NavItems
          title="Configurações"
          icon={<Settings className="mr-2 h-4 w-4" />}
          href="/dashboard/settings"
          active={false}
        />
          </ul>
    </nav>
  );
}
