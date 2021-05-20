import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import { COLUMNS } from './columns';
import project_data from './project_data.json';

const StyledTable = styled.div`
  table {
    border-collapse: collapse;
    th,
    td {
      border: 1px solid lightgrey;
      padding: 8px;
    }
    tr {
      text-align: center;
      :nth-child(even) {
        background-color: #f2f2f2;
      }
      :hover {
        background-color: #ddd;
        cursor: pointer;
      }
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      background-color: #4caf50;
      color: white;
    }
  }
`;

export const BasicTable = () => {
  const [project, setProject] = useState({
    activeProject: { project_name: 'Click on a Project to see more' },
    projects: '',
  });
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => project_data, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  function handleClick(row) {
    setProject({ ...project, activeProject: row });
    console.log(row);
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <StyledTable>
      <div>
        <h1>{project.activeProject.project_name}</h1>
      </div>
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
                {...row.getRowProps()}
                onClick={() => handleClick(row.original)}
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
    </StyledTable>
  );
};
