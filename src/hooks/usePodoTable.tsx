import { GridRowId, GridRowModes, GridRowModesModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { newEmptyObject } from "../Utils/newVoidObject";

export const usePodoTable = () => {
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [rows, setRows] = useState<any>([]);

  useEffect(() => {
    console.log("cambia --> ", rows);
  }, [rows]);

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleDeleteClick = (id: GridRowId, service: any) => async () => {
    await service();
    setRows(
      rows.filter((row: any) => {
        console.log({ id });
        console.log({ row });
        return row.id !== id;
      })
    );
  };
  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };
  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    console.log({ rows });
    const editedRow = rows.find((row: any) => row.id === id);
    console.log({ id });
    if (editedRow!.isNew) {
      setRows(rows.filter((row: any) => row.id !== id));
    }
  };

  const handleAddRow = () => {
    const maxId = rows?.reduce(
      (max: any, row: any) => (row.id > max ? row.id : max),
      0
    );
    const newId = maxId + 1;
    const newRow = newEmptyObject(rows[0], newId);
    setRows((oldRows: any) => [newRow, ...oldRows]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [newId]: { mode: GridRowModes.Edit },
    }));
  };

  return {
    rowModesModel,
    setRowModesModel,
    handleEditClick,
    handleSaveClick,
    handleDeleteClick,
    handleCancelClick,
    handleAddRow,
    rows,
    setRows,
  };
};
