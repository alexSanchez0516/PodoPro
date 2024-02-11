import * as React from "react";
import {
  GridRowModesModel,
  DataGrid,
  GridRowParams,
  MuiEvent,
  GridEventListener,
  GridRowModel,
  DataGridProps,
  GridToolbarExport,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import styles from "./table.module.css";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { SPAIN_LENGUAGE } from "../../constants/localeText";
import { Tooltip } from "@mui/material";

export interface AedasTableProps extends DataGridProps {
  postService?: any;
  updateService?: any;
  deleteService?: any;
  rows: any;
  setRows?: any;
  rowModesModel?: any;
  setRowModesModel?: any;
  globalActions?: any;
  tableTitle?: any;
  exportable?: any;
}

export function PodoTable(props: AedasTableProps) {
  const {
    rows,
    setRows,
    globalActions,
    tableTitle = "",
    exportable = false,
    setRowModesModel,
  } = props;

  const CustomHeader = () => {
    return (
      <div
        className={`${
          tableTitle ? styles.tableHeaderWithTitle : styles.tableHeader
        }`}
        style={{
          marginTop: `${!tableTitle && !globalActions ? "-1rem" : "auto"}`,
        }}
      >
        {tableTitle && <h3 className="secondary-title">{tableTitle}</h3>}
        <div
          className="icons-group"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {globalActions && globalActions.length > 0 && (
            <>
              <GridToolbarContainer>
                {globalActions.map((item: any, index: number) => {
                  return (
                    <Tooltip title={item.tooltip} key={index}>
                      <div
                        onClick={item.action}
                        className={styles.toolbar_item}
                      >
                        <item.Icon />
                      </div>
                    </Tooltip>
                  );
                })}
              </GridToolbarContainer>
            </>
          )}
          {exportable && (
            <GridToolbarExport
              csvOptions={{
                utf8WithBom: true,
                allColumns: true, //props para identificar qué columnas de exportan
                disableToolbarButton: false,
              }}
              printOptions={{
                disableToolbarButton: false,
              }}
            />
          )}
        </div>
      </div>
    );
  };

  const handleRowEditStart = (
    __params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = false;
  };

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    __params,
    event
  ) => {
    event.defaultMuiPrevented = false;
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    // newRow.isNew &&
    //   (await props.postService(newRow).catch((error: any) => {
    //     throw Error(error.message);
    //   }));
    // !newRow.isNew &&
    //   (await props.updateService(newRow).catch((error: any) => {
    //     throw Error(error.message);
    //   }));
    // const updatedRow = { ...newRow, isNew: false };
    // setRows(rows.map((row: any) => (row.id === newRow.id ? updatedRow : row)));
    // return updatedRow;
    try {
      if (newRow.isNew) {
        await props.postService(newRow);
      } else {
        await props.updateService(newRow);
      }
      const updatedRow = { ...newRow, isNew: false };
      setRows(
        rows.map((row: any) => (row.id === newRow.id ? updatedRow : row))
      );
      return updatedRow;
    } catch (error) {
      throw Error((error as any).message);
    }
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <div
      style={{
        height: `calc(100vh - 18vh)`,
        background: "white",
        width: "99%",
      }}
    >
      <DataGrid
        localeText={SPAIN_LENGUAGE}
        {...props}
        rows={rows}
        editMode="row"
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          //@ts-ignore
          toolbar: CustomHeader,
          //@ts-ignore
          exportIcon: FileDownloadIcon,
        }}
        slotProps={{
          toolbar: { setRows, rows },
        }}
      />
    </div>
  );
}
