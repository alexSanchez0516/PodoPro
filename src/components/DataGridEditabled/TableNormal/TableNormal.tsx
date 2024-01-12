import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridToolbarContainer } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

import "./TableNormal.css";

function TableNormal(props: any) {
  const {
    rows,
    columns,
    setEdit,
    edit,
    singleIcon,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onCellClick,
    addIcon,
    handleAdd,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    exportIcon,
  } = props;
  const [columsCustom, setColumsCustom] = useState<GridColDef[]>([]);
  const [columsRows, setRowsCustom] = useState([]);

  useEffect(() => {
    processData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const processData = () => {
    setRowsCustom(rows);

    let array: GridColDef[] = [];

    let columsAux = JSON.parse(JSON.stringify(columns));

    // eslint-disable-next-line array-callback-return
    columsAux.map((row: GridColDef, i: number) => {
      row.editable = false;

      if (columns[i].renderCell) {
        row.renderCell = columns[i].renderCell;
      }

      if (columns[i].renderEditCell) {
        row.renderEditCell = columns[i].renderEditCell;
      }

      array.push(row);
    });

    array.sort((a, b) => {
      return parseInt(a.field) < parseInt(b.field) ? -1 : 1;
    });

    setColumsCustom(array);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const CustomToolbar = () => {
    return (
      <>
        {edit ? (
          <GridToolbarContainer
            style={{ display: "flex", justifyContent: "end" }}
          >
            <h1 className="titleTableNormal">{props.title}</h1>

            {singleIcon && addIcon ? (
              <IconButton onClick={handleAdd}>
                <AddCircleOutlineIcon />
              </IconButton>
            ) : singleIcon ? (
              <IconButton onClick={handleEdit}>
                <EditIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleEdit}>
                <DeleteIcon />
              </IconButton>
            )}
          </GridToolbarContainer>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <div
      style={{
        height: "auto",
        background: "white",
        width: "100%",
        margin: "0 auto",
        overflowX: "auto",
      }}
    >
      <DataGrid
        onCellClick={(event) => props.onCellClick(event)}
        localeText={{
          toolbarExport: "",
          toolbarExportCSV: "Descargar CSV",
          toolbarExportPrint: "Imprimir tabla",
        }}
        // localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        components={{ Toolbar: CustomToolbar }}
        hideFooterPagination={props.hideFooterPagination}
        rows={columsRows}
        columns={columsCustom}
        disableSelectionOnClick={props.disableSelectionOnClick}
        editMode="row"
        getRowId={props.getRowId}
        autoHeight={true}
        rowsPerPageOptions={[5, 10, 20]}
        // pagination
        columnBuffer={20}
        pagination
        sx={{ overflowX: "scroll" }}
        rowCount={props.rowCount}
        loading={props.loading}
        // rowsPerPageOptions={props.rowsPerPageOptions}
        page={props.page}
        pageSize={props.pageSize}
        paginationMode={props.paginationMode}
        onPageChange={props.onPageChange}
        onPageSizeChange={props.onPageSizeChange}
      ></DataGrid>
    </div>
  );
}

export default TableNormal;
