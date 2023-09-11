import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Input, Text } from '@stoplight/mosaic';
import * as React from 'react';

import { useUniqueId } from '../../../hooks/useUniqueId';
import { ParameterSpec } from './parameter-utils';

interface MultipleFilesUploadParameterEditorProps {
  parameter: ParameterSpec;
  values: File[];
  onChange: (parameterValue: File[] | undefined) => void;
}

export const MultipleFilesUploadParameterEditor: React.FC<MultipleFilesUploadParameterEditorProps> = ({
  parameter,
  values,
  onChange,
}) => {
  const parameterDisplayName = `${parameter.name}${parameter.required ? '*' : ''}`;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.currentTarget.files ?? []);

    if (!files || (Array.isArray(files) && files.length < 1)) return;
    onChange([...values, ...files]);
  };

  const clearFile = (val: File) => {
    const index = values?.findIndex(v => val.name == v.name);
    const temp = values;
    if (index !== null || index !== undefined) {
      temp?.splice(index, 1);
    }
    onChange(temp);
  };

  const parameterInputId = useUniqueId(`id_${parameter.name}_`);
  const fileUploadInputId = `${parameterInputId}-file-input`;

  return (
    <>
      <label aria-hidden="true" data-testid="param-label">
        {parameterDisplayName}
      </label>
      <Text mx={3}>:</Text>
      <Flex alignItems="center">
        <Flex style={{ flexWrap: 'wrap' }} flex={1} justifyContent="start" alignItems="center">
          {values?.map((val, index) => {
            return (
              <Flex style={{ minWidth: 130 }} flex={1} key={fileUploadInputId + index}>
                <Input
                  style={{ paddingLeft: 15 }}
                  aria-label={parameter.name}
                  appearance="minimal"
                  placeholder="array (multiple files)"
                  type="text"
                  required
                  value={val?.name ?? ''}
                  disabled
                />
                {val && (
                  <button className="sl-mr-3 sl-p-2" aria-label="Remove file" onClick={() => clearFile(val)}>
                    <FontAwesomeIcon icon={faXmark} size="sm" />
                  </button>
                )}
              </Flex>
            );
          })}
          {Array.isArray(values) && values.length === 0 && (
            <Input
              style={{ paddingLeft: 15 }}
              appearance="minimal"
              flex={1}
              placeholder="array(multiple files)"
              type="text"
              required
              disabled
            />
          )}
        </Flex>

        <div>
          <label role="button" htmlFor={fileUploadInputId}>
            Upload
          </label>
          <input onChange={handleFileChange} id={fileUploadInputId} type="file" hidden multiple />
        </div>
      </Flex>
    </>
  );
};
