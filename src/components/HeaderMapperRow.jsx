import React from 'react';
import Select from 'react-select';
import { Card, Margin, Button, Row, Col, Padded, Table } from './common'

const percentage = (a, b) => {
  return Math.round((a / b * 100) * 10) / 10;
}

const MappingStatistics = ({ fieldStatistics, selectedField, }) => {
  const total = fieldStatistics.total;
  const counts = fieldStatistics.statistics?.counts;
  const errorTypeCounts = fieldStatistics.statistics?.errorTypeCounts;
  if (!counts || !errorTypeCounts) {
    return <div className="statistics statistics--empty"></div>
  }
  return (
    <div className="statistics">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-info-circle-fill info" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>

        <span>
        {percentage(total - counts.isNull, total)}% of your rows have a value for this column
        </span>
      </div>
      {errorTypeCounts.total === 0 && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-check-lg success" viewBox="0 0 16 16">
            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
          </svg>

          All rows pass validation for this column.
        </div>
      )}
      {errorTypeCounts.total > 0 && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-exclamation-diamond-fill error" viewBox="0 0 16 16">
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>

          {(errorTypeCounts.total / total < 0.02) && <span><b>{errorTypeCounts.total}</b> rows fail validation. You can repair it on next step.</span>}
          {(errorTypeCounts.total / total >= 0.02) && <span><b>{percentage(errorTypeCounts.total, total)}%</b> of rows fail validation. You can repair it on next step.</span>}
        </div>
      )}
    </div>
  );
}
const HeaderMapperSelection = ({header, examples, setHeader, selectedHeader, options}) => {
  return (
    <div className="header">
      <Row>
        <p>{header.slice(0, 30)}</p>

        <div>
          <span>Match to</span>
          <Select isClearable={true} isSearchable={true} value={selectedHeader} options={options} onChange={setHeader} />
        </div>
      </Row>
      <Table>
        <tbody>
          {examples.map((e, idx) => {
            return (
              <tr key={idx}>
                <td style={{ backgroundColor: '#ecf0f1', textAlign: 'center', width: "40px" }}>
                  {idx}
                </td>
                <td style={{ padding: '10px 20px' }}>
                  {e || <i>No Data</i>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

const HeaderMapperRow = ({options, header, examples, headerMapping, setHeaderMapping, fieldStatistics}) => {
  let block = null;
  if (headerMapping.confirmed) {
    block = (
      <Row className="header-mapper__row confirmed">
        <p>{header.slice(0, 30)}</p>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
          </svg>
          <span>
            Matched to <strong>{headerMapping.selectedField}</strong>
          </span>
        </div>

        <Button onClick={() => {
          setHeaderMapping({
            ...headerMapping,
            confirmed: false,
          })
        }}>Edit</Button>
      </Row>
    );
  } else {
    block = (
      <Row className="header-mapper__row">
        <Col>
          <HeaderMapperSelection
            options={options}
            header={header}
            examples={examples}
            selectedHeader={headerMapping.selectedField}
            setHeader={(selectedField) => {
              setHeaderMapping({
                ...headerMapping,
                selectedField,
                ignored: false,
                name: header,
              })
            }}
          />
        </Col>
        <Col>
          {headerMapping.selectedField && (
            <MappingStatistics selectedField={headerMapping.selectedField} fieldStatistics={fieldStatistics} />
          )}
          {
            headerMapping.selectedField &&
            <Button variant="success" onClick={() => {
              setHeaderMapping({ ...headerMapping, confirmed: true });
            }}>Confirm mapping</Button>
          }
        </Col>
      </Row>
    );
  }
  return <Card>{block}</Card>;
}
export default HeaderMapperRow;
