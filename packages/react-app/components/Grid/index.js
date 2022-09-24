import React, { useContext, useMemo, useCallback, useRef, useState } from "react";
import { generateColumnDefs } from "../../helpers/generateColumnDefs";
import { AgGridReact } from "ag-grid-react";
import { Container, Stack, TextField, Typography, Button } from "@mui/material";
import { SegmentCreationDialog } from "./SegmentCreationDialog";
import { AssetsContext } from "./../Contexts/AssetsContext";

const defaultColDef = {
  filter: "agTextColumnFilter",
  sortable: true,
  enableRowGroup: true,
  resizable: true,
};

export const Grid = ({ dataList, title }) => {
  const { addSegment } = useContext(AssetsContext);
  const [quickFilter, setQuickFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [segmentCreatorOpen, setSegmentCreatorOpen] = useState(false);
  const gridRef = useRef();
  let columnDefs = [];
  if (Array.isArray(dataList)) {
    columnDefs = generateColumnDefs(dataList);
  }
  const handleInputChange = event => {
    const { target } = event;
    const { value } = target;
    setQuickFilter(value);
  };
  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    setSelectedRows(selectedRows);
  });
  const rowsSelected = selectedRows.length > 0;
  const openSegmentCreator = () => {
    setSegmentCreatorOpen(true);
  };
  const closeSegmentCreator = () => {
    setSegmentCreatorOpen(false);
  };
  const handleAdd = segment => {
    addSegment(segment);
  };
  return (
    <Container maxWidth="xl">
      <SegmentCreationDialog
        open={segmentCreatorOpen}
        handleClose={closeSegmentCreator}
        handleAdd={handleAdd}
        selectedRows={selectedRows}
      />
      <Stack spacing={2} direction="column" justifyContent="center" alignItems="center" sx={{ minHeight: 500 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
          <Typography variant="h4">{title}</Typography>
          <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
            {rowsSelected && <Typography variant="subtitle2">{selectedRows.length} Rows Selected</Typography>}
            {rowsSelected && (
              <Button variant="contained" onClick={openSegmentCreator}>
                Create Segment
              </Button>
            )}
            <TextField
              size="small"
              margin="dense"
              id="quick-filter"
              label="Search"
              name="dashboardName"
              variant="outlined"
              type="text"
              value={quickFilter}
              onChange={handleInputChange}
            />
          </Stack>
        </Stack>
        <AgGridReact
          ref={gridRef}
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
          rowSelection="multiple"
          rowGroupPanelShow="always"
          suppressDragLeaveHidesColumns={true}
          enableCharts={true}
          suppressRowClickSelection={true}
          quickFilterText={quickFilter}
          onSelectionChanged={onSelectionChanged}
        />
      </Stack>
    </Container>
  );
};
