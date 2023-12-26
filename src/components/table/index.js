import React from 'react';
import { useTable } from 'react-table';

const GenericTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: '2px solid #ddd',
                  padding: '10px',
                  textAlign: 'left',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #ddd' }}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} style={{ padding: '10px' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GenericTable;
