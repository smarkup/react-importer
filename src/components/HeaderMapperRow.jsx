import React from 'react';
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
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="info">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.5 19C16.366 19 19.5 15.866 19.5 12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12C5.5 15.866 8.63401 19 12.5 19ZM12.5 20C16.9183 20 20.5 16.4183 20.5 12C20.5 7.58172 16.9183 4 12.5 4C8.08172 4 4.5 7.58172 4.5 12C4.5 16.4183 8.08172 20 12.5 20ZM13.1886 7.5C13.7581 7.5 14.0429 7.8876 14.0429 8.33173C14.0429 8.88635 13.5482 9.39933 12.9043 9.39933C12.365 9.39933 12.0505 9.08058 12.0654 8.55358C12.0654 8.1103 12.4398 7.5 13.1886 7.5ZM11.4363 16C10.9867 16 10.6573 15.7229 10.9718 14.5023L11.4878 12.3382C11.5774 11.9923 11.5923 11.8533 11.4878 11.8533C11.353 11.8533 10.7699 12.0921 10.4244 12.328L10.2 11.954C11.2931 11.025 12.5507 10.4805 13.0904 10.4805C13.5397 10.4805 13.6145 11.0216 13.3901 11.8533L12.7989 14.1279C12.6943 14.5295 12.739 14.6681 12.8439 14.6681C12.9787 14.6681 13.4207 14.5015 13.855 14.1551L14.11 14.501C13.0467 15.5835 11.8851 16 11.4363 16Z" />
        </svg>

        <span>
        {percentage(total - counts.isNull, total)}% of your rows have a value for this column
        </span>
      </div>
      {errorTypeCounts.total === 0 && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="success">
            <path d="M10.1313 13.9783L16.3939 7.71574C16.7844 7.32522 17.4176 7.32522 17.8081 7.71574C18.1986 8.10627 18.1986 8.73943 17.8081 9.12996L10.6868 16.2513C10.5827 16.3554 10.4613 16.4318 10.3318 16.4804C9.86509 16.7043 9.2974 16.534 9.03427 16.0782L6.91295 12.404C6.63681 11.9257 6.80068 11.3141 7.27898 11.038C7.75727 10.7618 8.36886 10.9257 8.645 11.404L10.1313 13.9783Z" />
          </svg>

          All rows pass validation for this column.
        </div>
      )}
      {errorTypeCounts.total > 0 && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="error">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 19C16.366 19 19.5 15.866 19.5 12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12C5.5 15.866 8.63401 19 12.5 19ZM12.5 20C16.9183 20 20.5 16.4183 20.5 12C20.5 7.58172 16.9183 4 12.5 4C8.08172 4 4.5 7.58172 4.5 12C4.5 16.4183 8.08172 20 12.5 20Z" />
            <path d="M13.3963 7H11.5L11.75 13H13.25L13.3963 7ZM12.5001 16.5C13.0455 16.5 13.5185 16.044 13.5228 15.4773C13.5185 14.919 13.0455 14.4631 12.5001 14.4631C11.9376 14.4631 11.4731 14.919 11.4773 15.4773C11.4731 16.044 11.9376 16.5 12.5001 16.5Z" />
          </svg>

          {(errorTypeCounts.total / total < 0.02) && <span><b>{errorTypeCounts.total}</b> rows fail validation. You can repair it on next step.</span>}
          {(errorTypeCounts.total / total >= 0.02) && <span><b>{percentage(errorTypeCounts.total, total)}%</b> of rows fail validation. You can repair it on next step.</span>}
        </div>
      )}
    </div>
  );
}
const HeaderMapperSelection = ({header, setHeader, selectedHeader, options, Select}) => {
  return (
    <div className="header">
      <p><span>{header.slice(0, 30)}</span></p>

      <div>
        <span>Match to</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Select isClearable={true} isSearchable={true} value={selectedHeader} options={options} onChange={setHeader} />
        </div>
      </div>
    </div>
  );
}

const HeaderMapperRow = ({options, header, examples, headerMapping, setHeaderMapping, fieldStatistics, Select}) => {
  let block = null;
  if (headerMapping.confirmed) {
    block = (
      <Row className="header-mapper__row confirmed">
        <p><span>{header.slice(0, 30)}</span></p>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M10.1313 13.9783L16.3939 7.71574C16.7844 7.32522 17.4176 7.32522 17.8081 7.71574C18.1986 8.10627 18.1986 8.73943 17.8081 9.12996L10.6868 16.2513C10.5827 16.3554 10.4613 16.4318 10.3318 16.4804C9.86509 16.7043 9.2974 16.534 9.03427 16.0782L6.91295 12.404C6.63681 11.9257 6.80068 11.3141 7.27898 11.038C7.75727 10.7618 8.36886 10.9257 8.645 11.404L10.1313 13.9783Z" />
          </svg>
          <span>
            Matched to <strong>{headerMapping.selectedField.label}</strong>
          </span>

          <Button onClick={() => {
            setHeaderMapping({
              ...headerMapping,
              confirmed: false,
            })
          }}>Edit</Button>
        </div>
      </Row>
    );
  } else {
    block = (
      <div>
        <Row className="header-mapper__row">
          <HeaderMapperSelection
            Select={Select}
            options={options}
            header={header}
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
        </Row>
        <Row className="header-mapper__body">
          <Col>
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
      </div>
    );
  }
  return <Card>{block}</Card>;
}
export default HeaderMapperRow;
