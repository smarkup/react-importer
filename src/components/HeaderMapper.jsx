import React from 'react';
import HeaderMapperRow from './HeaderMapperRow';
import { Button, Align, Margin, TextStyled, Col, Row } from './common'

const HeaderMapper = ({ parsed, fields, statistics, headerMappings, setHeaderMappings, missingRequiredFields, onComplete, restart, Select }) => {
  const data = parsed.data;
  const options = fields.map(f => {
    return {
      label: f.label,
      value: f.key,
    }
  });

  const hasMissingRequiredFields = missingRequiredFields.length > 0;

  return (
    <div className="header-mapper">
      <p>
        Match the columns from the CSV file to the corresponding fields. If any fields are missing, you can create them in the Fields section.
      </p>
      {
        data[0].map((header, columnIndex) => {
          const examples = data.slice(1, 4).map(d => d[columnIndex]);
          const headerMapping = headerMappings[columnIndex] || {};
          const fieldStatistics = {
            total: statistics.total,
            statistics: statistics.statisticsByFieldKey[headerMapping.selectedField?.value],
          }
          return <HeaderMapperRow
            Select={Select}
            key={columnIndex}
            columnIndex={columnIndex}
            header={header}
            examples={examples}
            headerMapping={headerMapping}
            setHeaderMapping={(headerMapping) => {
              let newMappings = { ...headerMappings }
              headerMapping.columnIndex = columnIndex;
              newMappings[columnIndex] = headerMapping
              setHeaderMappings(newMappings);
            }}
            options={options}
            fieldStatistics={fieldStatistics}
          />
        })
      }
      <Margin margin="20px 0">
        <Align right className="missing">
          {hasMissingRequiredFields && (
            missingRequiredFields.map(f => {
              return (
                <div>
                  <TextStyled style={{ marginBottom: "15px" }} danger bold>
                    Missing mapping for {f.label}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 19C16.366 19 19.5 15.866 19.5 12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12C5.5 15.866 8.63401 19 12.5 19ZM12.5 20C16.9183 20 20.5 16.4183 20.5 12C20.5 7.58172 16.9183 4 12.5 4C8.08172 4 4.5 7.58172 4.5 12C4.5 16.4183 8.08172 20 12.5 20Z" />
                      <path d="M13.3963 7H11.5L11.75 13H13.25L13.3963 7ZM12.5 16.5C13.0455 16.5 13.5185 16.044 13.5227 15.4773C13.5185 14.919 13.0455 14.4631 12.5 14.4631C11.9375 14.4631 11.473 14.919 11.4773 15.4773C11.473 16.044 11.9375 16.5 12.5 16.5Z" />
                    </svg>
                  </TextStyled>
                </div>
              );
            })
          )}
        </Align>
        <Row className="buttons">
          <Col>
            <Button onClick={restart} outline>
              Back
            </Button>
          </Col>
          <Col>
            <Align right>
              <Button onClick={onComplete} className={hasMissingRequiredFields ? 'error' : 'success'}>
                {hasMissingRequiredFields && "Proceed Anyways"}
                {!hasMissingRequiredFields && "Review"}
              </Button>
            </Align>
          </Col>
        </Row>
      </Margin>
    </div>
  );
};

export default HeaderMapper;
