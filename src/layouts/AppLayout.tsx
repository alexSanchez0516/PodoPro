import { Box } from "@mui/material";
import { ReactNode } from "react";
import { SideBar } from "../components/SideBar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />

      <Box component="main" className="mt-20 w-full" sx={{ flexGrow: 1, p: 1 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
