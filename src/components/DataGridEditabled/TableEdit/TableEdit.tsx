import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridCellParams,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport 
} from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import DeleteIcon from "@mui/icons-material/Delete";

import "./TableEdit.css";

function TableEdit(props: any) {
  const { rows, columns, setEdit, onCellClick, exportIcon } = props;
  const [columsCustom, setColumsCustom] = useState<GridColDef[]>([]);
  const [rowsCustom, setRowsCustom] = useState<any[]>([]);
  const [selectionModel, setSelectionModel] = useState<any[]>([]);

  useEffect(() => {
    processData();
  }, [rows]);

  const processData = () => {
    setRowsCustom(rows);
    let arrayColums: GridColDef[] = [];
    let arrayColumsCopy = [...columns];
    let arrayRows: any[] = [];
    arrayColumsCopy.map((column: GridColDef) => {
      column.editable = column.editable;
      column.cellClassName = (params: GridCellParams) => {
        if (params.isEditable) {
          return "isEditable";
        }
        return "";
      };
      arrayColums.push(column);
    });

    rows.map((row: any) => {
      row.edited = false;
      row.removed = false;
      row.new = false;
      arrayRows.push(row);
    });

    arrayColums.sort((a, b) => {
      return parseInt(a.field) < parseInt(b.field) ? -1 : 1
    })
    
    setColumsCustom(arrayColums);
    setRowsCustom(arrayRows);
  };

  const handleAdd = () => {

    if(typeof(onCellClick) === 'function' ) {
      onCellClick();
      return
    } else {
      let newRow: any = {};
      columsCustom.map((column: any) => {
        if (column.field === "id") {
          if (rowsCustom.length === 0) {
            newRow[column.field] = 1;
          } else {
            let aux = [...rowsCustom];
            aux = aux.sort((a, b) => a.id - b.id);
            newRow[column.field] = aux[aux.length - 1].id + 1;
          }
        } else {
          newRow[column.field] = null;
        }
        newRow.edited = false;
        newRow.removed = false;
        newRow.new = true;
      });
  
      setRowsCustom([...rowsCustom, newRow]);

    }
  };

  const handleRemove = () => {
    let copyRows = [...rowsCustom];

    if(props.getRowId) {
      copyRows
      .filter((row) => selectionModel.find((model) => model === row.mongo_id))
      .map((row) => {
        row.removed = true;
      });

    }
    copyRows
      .filter((row) => selectionModel.find((model) => model === row.id))
      .map((row) => {
        row.removed = true;
      });

    setRowsCustom(copyRows);
    setSelectionModel([]);
  };

  const handleSave = () => {

    console.log(selectionModel)

    let edited =
      rowsCustom.filter(
        (row) =>
          row.edited === true && row.new === false && row.removed === false
      ) ?? [];

    let removed =
      rowsCustom.filter((row) => row.removed === true && row.new === false) ??
      [];

    let news = rowsCustom.filter((row) => row.new === true) ?? [];
 
    if (props.checkSave) {
      if (
        props.checkSave({
          edited: edited,
          removed: removed,
          news: news,
          rows: rowsCustom,
        })
      ) {
        props.handleSave({ edited: edited, removed: selectionModel, news: news });
        setEdit(false);
      }
    } else {
      props.handleSave({ edited: edited, removed: selectionModel, news: news });
      setEdit(false);
    }
  };

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer style={{display: "flex", justifyContent: "space-between"}}>
        <h1 className="titleTableNormal">{props.title}</h1>
        <div>
          { props.showAddIcon ? (
            <>
              <IconButton onClick={handleAdd}>
                  <AddCircleOutlineIcon />
              </IconButton>
            </>
          ) : (
            <></>
          )}

        { props.showRemoveIcon ? (
          
          <IconButton onClick={handleSave}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        ) : (
          <></>
        )}

          {/* <IconButton onClick={handleSave}>
            <SaveIcon></SaveIcon>
          </IconButton> */}

        </div>
      </GridToolbarContainer>
    );
  };

  const handleCellEditCommit = async (params: GridCellEditCommitParams) => {
    let rowsCopy = [...rowsCustom];
    /* @ts-ignore */
    rowsCopy[rowsCopy.findIndex((r) => r.id === params.id)][params.field] =
      params.value;
    rowsCopy[rowsCopy.findIndex((r) => r.id === params.id)].edited = true;
    setRowsCustom(rowsCopy);
  };
  
  return (
    <div style={{ height: "auto", background: "white", width: "90%", margin: "auto" }}>
      <DataGrid
        components={{ Toolbar: CustomToolbar }}
        localeText={{ 
          toolbarExport: "",
          toolbarExportCSV: 'Descargar CSV',
          toolbarExportPrint: 'Imprimir tabla',
         }}
        rows={rowsCustom}
        getRowId={props.getRowId}
        hideFooterPagination={props.hideFooterPagination}
        columns={columsCustom}
        disableSelectionOnClick={props.disableSelectionOnClick}
        checkboxSelection={!props.onlyEdit}
        autoHeight={true}
        onCellEditCommit={handleCellEditCommit}
        onSelectionModelChange={(newSelectionModel: any) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        getRowClassName={(params) => {
          if (params.row.removed) {
            return `redBackgraund`;
          }
          if (params.row.new) {
            return `greenBackgraund`;
          }
          if (params.row.edited) {
            return `orangeBackgraund`;
          }
          return "";
        }}
      ></DataGrid>
    </div>
  );
}

export default TableEdit;
