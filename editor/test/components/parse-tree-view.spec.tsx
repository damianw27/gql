import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { Network } from 'vis-network';
import { isTreeRuleNode, isTreeTerminalNode, ParseTree } from '@gql-grammar/worker';
import { ParseTreeView } from '$components/parse-tree/parse-tree-view';

jest.mock('@gql-grammar/worker');
jest.mock('vis-network');

const mockedNetwork = Network as jest.MockedClass<typeof Network>;
const mockedIsTreeRuleNode = isTreeRuleNode as jest.MockedFunction<typeof isTreeRuleNode>;
const mockedIsTreeTerminalNode = isTreeTerminalNode as jest.MockedFunction<typeof isTreeTerminalNode>;

describe('ParseTreeView', () => {
  afterEach(cleanup);

  const mockData: ParseTree = [
    {
      name: 'test1',
      children: [
        {
          name: 'test2',
          text: 'Test 2',
          type: 1,
        },
        {
          name: 'test1',
          children: [
            {
              name: 'test2',
              text: 'Test 2',
              type: 1,
            },
            {
              name: 'test2',
              text: 'Test 2',
              type: 1,
            },
          ],
        },
      ],
    },
  ];

  it('renders without crashing', () => {
    render(<ParseTreeView parseTree={mockData} />);
  });

  it('calls Network constructor when the parseTree is updated', () => {
    render(<ParseTreeView parseTree={mockData} />);
    expect(mockedNetwork).toHaveBeenCalledTimes(2);
  });

  it('calls isTreeRuleNode and isTreeTerminalNode correctly', () => {
    render(<ParseTreeView parseTree={mockData} />);
    expect(mockedIsTreeRuleNode).toHaveBeenCalled();
    expect(mockedIsTreeTerminalNode).toHaveBeenCalled();
  });

  it('renders "Rendering..." while processing parseTree', () => {
    const { getByText } = render(<ParseTreeView parseTree={mockData} />);
    expect(getByText('Rendering...')).toBeInTheDocument();
  });

  // it('renders container when parseTree processing is done', async () => {
  //   const { getByTestId } = render(<ParseTreeView parseTree={[]} />);
  //   const container = await getByTestId('ti-parse-tree--container');
  //   expect(container).toBeInTheDocument();
  // });
});
