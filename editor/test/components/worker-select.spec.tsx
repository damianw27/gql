import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WorkerInfo, availableWorkers } from '@gql-grammar/worker';
import { WorkerSelect } from '$components/worker-select/worker-select';

describe('WorkerSelect', () => {
  let mockOnChange: jest.Mock;

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  it('should render the select element with given value', () => {
    const workerInfo: WorkerInfo = availableWorkers[0];
    const { getByTestId } = render(<WorkerSelect value={workerInfo} onChange={mockOnChange} />);

    const selectElement = getByTestId('ti-worker-select') as HTMLSelectElement;

    expect(selectElement.value).toBe(workerInfo.fileName);
  });

  it('should render the correct number of options', () => {
    const workerInfo: WorkerInfo = availableWorkers[0];
    const { getAllByTestId } = render(<WorkerSelect value={workerInfo} onChange={mockOnChange} />);

    const options = getAllByTestId('ti-worker-select--option');

    expect(options.length).toBe(availableWorkers.length);
  });

  it('should call onChange with the selected worker info when an option is selected', () => {
    const workerInfo: WorkerInfo = availableWorkers[0];
    const { getByTestId } = render(<WorkerSelect value={workerInfo} onChange={mockOnChange} />);

    const selectElement = getByTestId('ti-worker-select') as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: availableWorkers[1].fileName } });

    expect(mockOnChange).toHaveBeenCalledWith(availableWorkers[1]);
  });

  it('should call onChange with the first worker info when an invalid option is selected', () => {
    const workerInfo: WorkerInfo = availableWorkers[0];
    const { getByTestId } = render(<WorkerSelect value={workerInfo} onChange={mockOnChange} />);

    const selectElement = getByTestId('ti-worker-select') as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: 'non-existent-file-name' } });

    expect(mockOnChange).toHaveBeenCalledWith(availableWorkers[0]);
  });
});
