import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AccountCircle, BarChart, HomeWork } from "@mui/icons-material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { ROUTES_AVAILABLES } from "../constants/rutes";
import SettingsIcon from "@mui/icons-material/Settings";
import CottageIcon from "@mui/icons-material/Cottage";
const drawerWidth = 240;
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const SideBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 766);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 766);
    };

    // Agregar el event listener para detectar cambios en la resolución
    window.addEventListener("resize", handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            PodoPro
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              onClick={() => setOpen(false)}
              to={ROUTES_AVAILABLES.HOME.PATH}
            >
              <ListItemIcon>
                <CottageIcon />
              </ListItemIcon>
              <ListItemText primary={ROUTES_AVAILABLES.HOME.NAME} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              onClick={() => setOpen(false)}
              to={ROUTES_AVAILABLES.VIEW_PATIENTS.PATH}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary={ROUTES_AVAILABLES.VIEW_PATIENTS.NAME} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              onClick={() => setOpen(false)}
              to={ROUTES_AVAILABLES.VIEW_APPOINTMENTS.PATH}
            >
              <ListItemIcon>
                <WysiwygIcon />
              </ListItemIcon>
              <ListItemText
                primary={ROUTES_AVAILABLES.VIEW_APPOINTMENTS.NAME}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              onClick={() => setOpen(false)}
              to={ROUTES_AVAILABLES.VIEW_CLINICS.PATH}
            >
              <ListItemIcon>
                <HomeWork />
              </ListItemIcon>
              <ListItemText primary={ROUTES_AVAILABLES.VIEW_CLINICS.NAME} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              onClick={() => setOpen(false)}
              to={ROUTES_AVAILABLES.ESTATISTICS.PATH}
            >
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary={ROUTES_AVAILABLES.ESTATISTICS.NAME} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              onClick={() => setOpen(false)}
              to={ROUTES_AVAILABLES.DASHBOARD.PATH}
            >
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary={ROUTES_AVAILABLES.DASHBOARD.NAME} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              onClick={() => setOpen(false)}
              to={ROUTES_AVAILABLES.PROFILE.PATH}
            >
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={ROUTES_AVAILABLES.PROFILE.NAME} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              onClick={() => setOpen(false)}
              to={ROUTES_AVAILABLES.SETTINGS.PATH}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={ROUTES_AVAILABLES.SETTINGS.NAME} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
