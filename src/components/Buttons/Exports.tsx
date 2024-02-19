import React from "react";
import { Button } from "@mui/material";
import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";

interface ExportsProps {
  fnExportPdf?: (data: any) => void; // Tipo de la función para exportar a PDF
  fnExportExcel?: (data: any) => void; // Tipo de la función para exportar a Excel
  data?: any; // Tipo de los datos que se utilizarán en las exportaciones (ajusta según tu estructura de datos)
}

const Exports: React.FC<ExportsProps> = (
  {
    // fnExportPdf,
    // fnExportExcel,
    // data,
  }
) => {
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<FaRegFileExcel />}
        // onClick={() => fnExportExcel(data)} // Agregado el evento onClick
      >
        Exportar Excel
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<FaRegFilePdf />}
        // onClick={() => fnExportPdf(data)} // Agregado el evento onClick
      >
        Exportar PDF
      </Button>
    </>
  );
};

export default Exports;
