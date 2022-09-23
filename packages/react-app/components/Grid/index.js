import React, { useMemo, useCallback, useRef, useState } from "react";
import { generateColumnDefs } from "../../helpers/generateColumnDefs";
import { AgGridReact } from "ag-grid-react";
import { Container, Stack, Typography } from "@mui/material";

const defaultColDef = {
  filter: "agTextColumnFilter",
  sortable: true,
  enableRowGroup: true,
  resizable: true,
};

export const Grid = ({ dataList, title }) => {
  let columnDefs = [];
  if (Array.isArray(dataList)) {
    columnDefs = generateColumnDefs(dataList);
  }
  return (
    <Container maxWidth="xl">
      <Stack spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{ minHeight: 500 }}>
        <Typography variant="h5">{title}</Typography>
        <AgGridReact
          className="ag-theme-alpine"
          rowData={dataList}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationAutoPageSize={true}
          sideBar={true}
          animateRows={true}
          enableRangeSelection={true}
          enableRangeHandle={true}
          rowSelection={true}
          rowGroupPanelShow="always"
          suppressDragLeaveHidesColumns={true}
          enableCharts={true}
        />
      </Stack>
    </Container>
  );
};
