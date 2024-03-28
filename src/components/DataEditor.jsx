import React, { useEffect, useRef, useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button, Margin, Align, Row, Col } from './common';
import { filterEmptyRows, isPresent } from '../utils';
import { useTheme } from 'styled-components';


const DataEditor = ({ formattedData, fields, onSubmit, onBack, validationResult, setRowData, statistics }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const validationRef = useRef(validationResult);
  validationRef.current = validationResult;

  useEffect(() => {
    setTimeout(() => {
      gridApi?.redrawRows();
    }, 0);
  }, [validationResult]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const [onlyShowErrors, _setOnlyShowErrors] = useState(false);
  const computeCellStyle = (params) => {
    if (
      isPresent(params.column.colDef.field) &&
      isPresent(params.data.rowIndex) &&
      validationRef.current.hasError(params.column.colDef.field, params.data.rowIndex)
    ) {
      return {
        color: 'rgba(192, 57, 43, 1.0)',
        backgroundColor: 'rgba(231, 76, 60, 0.3)',
        border: '1px solid rgba(192, 57, 43, 1.0)',
      }
    }
    return null;
  }

  const setOnlyShowErrors = (newValue) => {
    _setOnlyShowErrors(newValue);
    let newRowData;
    if (newValue) {
      const rowIndexesWithErrors = validationResult.rowIndexesWithErrors();
      newRowData = formattedData.filter((_, index) => rowIndexesWithErrors.has(index));
    } else {
      newRowData = formattedData;
    }
    gridApi.setRowData(newRowData);
  }

  const onCellValueChanged = (params) => {
    // Change the data and revalidate the entire dataset.
    // Because some validations are global validations.
    setRowData(params.data, params.rowIndex);
  }

  const hasData = () => {
    return filterEmptyRows(formattedData).length > 0;
  }

  const hasErrors = Object.keys(validationResult.errorsByFieldKeyByRowIndex).length > 0
  const theme = useTheme();
  return (
    <div className="data-editor">
      <Margin margin="20px 0">
        {(!hasData() || hasErrors) && (
          <div className="show-errors">
            <input checked={onlyShowErrors} onChange={(e) => {
              setOnlyShowErrors(e.target.checked);
            }} type="checkbox" name="row-errors" id="row-errors" />
            <label style={{marginLeft: '10px'}} htmlFor="row-errors">Only show rows with errors</label>
          </div>
        )}
        {hasData() && !hasErrors && (
          <div style={{color: theme.colors.success, fontWeight: "bold", display: "flex", alignItems: "center"}} className="pass">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M10.1313 13.9783L16.3939 7.71574C16.7844 7.32522 17.4176 7.32522 17.8081 7.71574C18.1986 8.10627 18.1986 8.73943 17.8081 9.12996L10.6868 16.2513C10.5827 16.3554 10.4613 16.4318 10.3318 16.4804C9.86509 16.7043 9.2974 16.534 9.03427 16.0782L6.91295 12.404C6.63681 11.9257 6.80068 11.3141 7.27898 11.038C7.75727 10.7618 8.36886 10.9257 8.645 11.404L10.1313 13.9783Z" />
            </svg>

            All rows pass validation!
          </div>
        )}
      </Margin>
      <div style={{height: 500, width: '100%'}} className="ag-theme-alpine">
        <AgGridReact
          onCellValueChanged={onCellValueChanged}
          rowData={formattedData}
          tooltipShowDelay={0}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            editable: true,
          }}
          onGridReady={onGridReady}
        >
          {fields.map(field => {
            return (
              <AgGridColumn
                resizable={true}
                cellStyle={computeCellStyle}
                key={field.key}
                headerName={field.label}
                tooltipValueGetter={(params) => {
                  const rowIndex = params.rowIndex;
                  const columnName = params.colDef.field;

                  if (validationRef.current.hasError(columnName, rowIndex)) {
                    const errors = validationRef.current.getErrors(columnName, rowIndex);
                    return errors.map(e => e.message).join(", ");
                  }
                }}
                field={field.key}
              ></AgGridColumn>
            );
          })}
        </AgGridReact>
      </div>
      <Row className="buttons">
        <Col>
          {onBack && (
            <Button onClick={onBack} outline>
              Back
            </Button>
          )}
        </Col>
        <Col>
          <Align right>
            {hasData() && (
              <Button onClick={onSubmit} className={validationResult.hasErrors() ? 'error' : 'success'}>
                {validationResult.hasErrors() && "Upload Rows Without Errors"}
                {!validationResult.hasErrors() && "Upload"}
              </Button>
            )}
          </Align>
        </Col>
      </Row>
    </div>
  );
};

export default DataEditor;
