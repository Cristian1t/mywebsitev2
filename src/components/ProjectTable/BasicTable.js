import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import { COLUMNS } from './columns';
import project_data from './project_data.json';

const StyledTable = styled.div`
  width: 100%;
  table {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    border-collapse: collapse;
    th,
    td {
      border: 1px solid lightgrey;
    }
    tr {
      text-align: center;
      :nth-child(even) {
        background-color: #f2f2f2;
      }
      :hover {
        background-color: ${({ theme }) => theme.color.details2};
        cursor: pointer;
      }
    }
    th {
      text-align: center;
      background-color: ${({ theme }) => theme.color.details};
      color: white;
    }
  }
`;

export const BasicTable = () => {
  const [project, setProject] = useState({
    activeProject: {
      project_name: `Latest Project:  Mosta Saloon`,
      project_type: 'website',
      project_description: 'hello',
      desktop: '"../../images/mostaDesktop.png"',
      stackused: 'react',
      website: 'hello.com',
    },
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
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <StyledTable>
      <div className="opened">
        <div className="imageside">
          <img src={project.activeProject.desktop} alt="desktopimg" />
        </div>
        <div className="infoside">
          <h2>{project.activeProject.project_name}</h2>
          <h3>{project.activeProject.project_type}</h3>
          <h4>Description: {project.activeProject.project_description}</h4>
          <h4>Stack: {project.activeProject.stackused}</h4>
          <button>{project.activeProject.website}</button>
          <div></div>
        </div>
      </div>
      <h2>Click on a project to see more info</h2>
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
