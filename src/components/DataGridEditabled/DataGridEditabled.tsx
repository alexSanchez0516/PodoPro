import React, { useState } from "react";
import TableEdit from "./TableEdit/TableEdit";
import TableNormal from "./TableNormal/TableNormal";

import "./DataGridEditabled.css"

function DataGridEditabled(props: any) {
  const { rows, columns, title, showHeader, singleIcon } = props;
  const [ edit, setEdit ] = useState<boolean>(props.edit ? props.edit : false);
 
  return (
    <>
      {!edit ? (
        <TableNormal
            onCellClick={(event:any) => props.onCellClick(event)}
            handleAdd={(event:any) => props.handleAdd(event)}
            rows={rows}
            columns={columns}
            setEdit={setEdit}
            edit={showHeader}
            singleIcon={singleIcon}
            title={title}
            getRowId={props.getRowId}
            addIcon={props.addIcon}
            exportIcon={props.exportIcon}
            disableSelectionOnClick={props.disableSelectionOnClick}
            hideFooterPagination={props.hideFooterPagination}

            pagination
            rowCount={props.rowCount}
            loading={props.loading}
            rowsPerPageOptions={props.rowsPerPageOptions}
            page={props.page}
            pageSize={props.pageSize}
            paginationMode={props.paginationMode}
            onPageChange={props.onPageChange}
            onPageSizeChange={props.onPageSizeChange}

          ></TableNormal>
          ) : (
          <TableEdit
            onCellClick={(event:any) => props.onCellClick(event)}
            onlyEdit={props.onlyEdit}
            handleSave={props.handleSave}
            checkSave={props.checkSave}
            rows={rows}
            columns={columns}
            setEdit={setEdit}
            showAddIcon={props.showAddIcon}
            showRemoveIcon={props.showRemoveIcon}
            title={title}
            getRowId={props.getRowId}
            exportIcon={props.exportIcon}
            disableSelectionOnClick={props.disableSelectionOnClick}
            hideFooterPagination={props.hideFooterPagination}
        ></TableEdit>
      )}
    </>
  );
}

export default DataGridEditabled;
