import React, { useEffect, useRef } from 'react';
import { availableWorkers, WorkerInfo } from '@gql-grammar/worker';
import css from '$components/worker-select/worker-select.module.css';

interface WorkerSelectProps {
  readonly value: WorkerInfo;
  readonly onChange: (info: WorkerInfo) => void;
}

export const WorkerSelect = ({ value, onChange }: WorkerSelectProps) => {
  const buttonRef = useRef<HTMLButtonElement>();
  const optionsRef = useRef<HTMLDivElement>();

  const getOptions = () =>
    availableWorkers.map((value, index) => (
      <option className={css.selectOption} key={`worker-options-${index}`} value={value.fileName}>
        {value.name}
      </option>
    ));

  const getInfoByFilename = (fileName: string) => availableWorkers.find((value) => value.fileName === fileName);

  return (
    <div className={css.selectWrapper}>
      <select
        value={value.fileName}
        onChange={(event) => onChange(getInfoByFilename(event.currentTarget?.value ?? '') ?? availableWorkers[0])}
        className={css.select}
      >
        {getOptions()}
      </select>
    </div>
  );
};
