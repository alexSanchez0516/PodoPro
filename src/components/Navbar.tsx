import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { DRAWER_WIDTH } from "../constants/layouts";
import { grey } from "@mui/material/colors";

export const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid container className="flex row justify-between items-center">
          <Typography>PhotosApp</Typography>
          <IconButton color="inherit">
            <Avatar sx={{ bgcolor: grey[500] }}>C</Avatar>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
