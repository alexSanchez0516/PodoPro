import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { FaFileExcel } from "react-icons/fa";
const actions = [
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PictureAsPdfIcon />, name: "Export PDF" },
  { icon: <FaFileExcel />, name: "Export Excel" },
];

export default function BasicSpeedDial() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 1000, // Ajusta según sea necesario
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon style={{ color: "black" }} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e: any) => {
              console.log(e.target.dataset["testid"]);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
