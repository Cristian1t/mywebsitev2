import React, { useContext, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import { COLUMNS } from './columns';
import { ProjectContext } from './ProjectContext';

const StyledTable = styled.div`
  width: 100%;
  @media (min-width: 769px) {
    width: 70%;
    margin: 0 auto;
  }
  table {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    border-collapse: collapse;
    @media (min-width: 679px) {
      font-size: 1.3rem;
    }
    th,
    td {
      border: 1px solid lightgrey;
    }
    tr {
      text-align: center;
      :hover {
        background-color: ${({ theme }) => theme.color.details2};
        cursor: pointer;
      }
    }

    .isactive {
      z-index: 2;
      background: ${({ theme }) => theme.color.details2};
      font-weight: bold;
    }

    th {
      text-align: center;
      background-color: ${({ theme }) => theme.color.details};
      color: white;
    }
  }
`;

export const BasicTable = ({ mydata }) => {
  const { setProject } = useContext(ProjectContext);
  const [active, setActive] = useState(false);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mydata, [mydata]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  function handleClick(row) {
    setProject(row.original.node);
    setActive(row);
  }

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className={row.index === active.index ? 'isactive' : null}
                {...row.getRowProps()}
                onClick={() => {
                  handleClick(row);
                }}
                onKeyDown={() => {
                  handleClick(row);
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2 style={{ textAlign: 'center' }}>Will add more soon...</h2>
    </StyledTable>
  );
};
