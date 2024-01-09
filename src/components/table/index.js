import React, { useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  useRowSelect,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import { Checkbox } from "./Checkbox";
import { tw } from "@twind/react";

const Table = ({
  columns,
  data,
  showPagination,
  showRowSelection,
  showFilters,
  showSorting,
  defaultPageSize,
  headerBgColor,
  headerBgColorStrength,
  defaultColumn,
  showColumnFilter,
  filteredColumns,
}) => {
  const [showSelectedData, setShowSelectedData] = useState(false);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      defaultColumn: defaultColumn,
      initialState: {
        pageSize: defaultPageSize,
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((visibleColumns) => {
        if (showRowSelection) {
          return [
            {
              id: "selection",
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <Checkbox {...getToggleAllRowsSelectedProps()} />
              ),
              Cell: ({ row }) => (
                <Checkbox {...row.getToggleRowSelectedProps()} />
              ),
            },
            ...visibleColumns,
          ];
        }
        return visibleColumns;
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    selectedFlatRows,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  tableInstance.columns.forEach((column) => {
    if (filteredColumns && filteredColumns.includes(column.id)) {
      column.canFilter = true;
    } else {
      column.canFilter = false;
    }
  });

  const headerBackgroundColor =
    headerBgColor?.length > 0 ? tw`bg-${headerBgColor}-${headerBgColorStrength}` : "bg-slate-800";

  return (
    <div className={`${showFilters ? "pt-5" : "pt-20"}  m-2`}>
      {showFilters && (
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      )}
      <div
        className={`overflow-x-auto overflow-y-auto ${
          showPagination === false ? "h-[90vh]" : "h-[32rem]"
        }`}
      >
        <table
          {...getTableProps}
          className="min-w-full bg-white rounded-lg shadow-md"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="border-b bg-gray-100"
              >
                {showSorting === true && showColumnFilter === true
                  ? headerGroup.headers.map((column, columnIndex) => (
                      <th
                        {...column.getHeaderProps(
                          columnIndex === 0 ? {} : column.getSortByToggleProps()
                        )}
                        className={`px-6 py-6 text-left text-md font-bold text-white uppercase ${headerBackgroundColor} border-2 border-white`}
                      >
                        {column.render("Header")}
                        {columnIndex !== 0 && (
                          <span className="px-2">
                            {column.isSorted
                              ? column.isSortedDesc
                                ? "🔽"
                                : "🔼"
                              : "↕️"}
                          </span>
                        )}
                        {showColumnFilter && (
                          <div>
                            {column.canFilter === true
                              ? column.render("Filter")
                              : null}
                          </div>
                        )}
                      </th>
                    ))
                  : showSorting === true && showColumnFilter === false
                  ? headerGroup.headers.map((column, columnIndex) => (
                      <th
                        {...column.getHeaderProps(
                          columnIndex === 0 ? {} : column.getSortByToggleProps()
                        )}
                        className={`px-6 py-6 text-left text-md font-bold text-white uppercase ${headerBackgroundColor} border-2 border-white`}
                      >
                        {column.render("Header")}
                        {columnIndex !== 0 && (
                          <span className="px-2">
                            {column.isSorted
                              ? column.isSortedDesc
                                ? "🔽"
                                : "🔼"
                              : "↕️"}
                          </span>
                        )}
                      </th>
                    ))
                  : showSorting === false && showColumnFilter === true
                  ? headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-6 py-6 text-left text-md font-bold text-white uppercase bg-slate-800 border-2 border-white"
                      >
                        {column.render("Header")}
                        {showColumnFilter && (
                          <div>
                            {column.canFilter === true
                              ? column.render("Filter")
                              : null}
                          </div>
                        )}
                      </th>
                    ))
                  : headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-6 py-6 text-left text-md font-bold text-white uppercase bg-slate-800 border-2 border-white"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
            {showPagination === true &&
            showRowSelection === true &&
            showFilters === true &&
            showSorting === true
              ? page.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      // className={rowIndex % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}
                      className={`${
                        row.isSelected
                          ? "bg-orange-200"
                          : "bg-white-100, cursor-pointer"
                      }`}
                      onClick={() => row.toggleRowSelected()}
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === true &&
                showRowSelection === false &&
                showFilters === false &&
                showSorting === false
              ? page.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} 
                    className={rowIndex % 2 === 0 ? "bg-gray-200 p-1" : "bg-gray-100 p-1"}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === true &&
                showRowSelection === false &&
                showFilters === false &&
                showSorting === true
              ? page.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}
                    className={rowIndex % 2 === 0 ? "bg-gray-200 p-1" : "bg-gray-100 p-1"}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === true &&
                showRowSelection === false &&
                showFilters === true &&
                showSorting === false
              ? page.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}
                    className={rowIndex % 2 === 0 ? "bg-gray-200 p-1" : "bg-gray-100 p-1"}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === true &&
                showRowSelection === true &&
                showFilters === true &&
                showSorting === false
              ? page.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={`${
                        row.isSelected
                          ? "bg-orange-200"
                          : "bg-white-100, cursor-pointer"
                      }`}
                      onClick={() => row.toggleRowSelected()}
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === false &&
                showRowSelection === true &&
                showFilters === true &&
                showSorting === false
              ? rows.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={`${
                        row.isSelected
                          ? "bg-orange-200"
                          : "bg-white-100, cursor-pointer"
                      }`}
                      onClick={() => row.toggleRowSelected()}
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === true &&
                showRowSelection === true &&
                showFilters === false &&
                showSorting === true
              ? page.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={`${
                        row.isSelected
                          ? "bg-orange-200"
                          : "bg-white-100, cursor-pointer"
                      }`}
                      onClick={() => row.toggleRowSelected()}
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === true &&
                showRowSelection === true &&
                showFilters === false &&
                showSorting === false
              ? page.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={`${
                        row.isSelected
                          ? "bg-orange-200"
                          : "bg-white-100, cursor-pointer"
                      }`}
                      onClick={() => row.toggleRowSelected()}
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === true &&
                showRowSelection === false &&
                showFilters === true &&
                showSorting === true
              ? page.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}
                    className={rowIndex % 2 === 0 ? "bg-gray-200 p-1" : "bg-gray-100 p-1"}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === false &&
                showRowSelection === true &&
                showFilters === true &&
                showSorting === true
              ? rows.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={`${
                        row.isSelected
                          ? "bg-orange-200"
                          : "bg-white-100, cursor-pointer"
                      }`}
                      onClick={() => row.toggleRowSelected()}
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === false &&
                showRowSelection === true &&
                showFilters === false &&
                showSorting === false
              ? rows.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={`${
                        row.isSelected
                          ? "bg-orange-200"
                          : "bg-white-100, cursor-pointer"
                      }`}
                      onClick={() => row.toggleRowSelected()}
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === false &&
                showRowSelection === false &&
                showFilters === true &&
                showSorting === true
              ? rows.map((row, rowIndex) => {
                  tableInstance.prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}
                    className={rowIndex % 2 === 0 ? "bg-gray-200 p-1" : "bg-gray-100 p-1"}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-nowrap border-2 border-purple-950"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : showPagination === false &&
                showRowSelection === false &&
                showFilters === false &&
                showSorting === true
              ? rows.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps}
                    className={rowIndex % 2 === 0 ? "bg-gray-200 p-1" : "bg-gray-100 p-1"}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps}
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              : rows.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps}
                    className={rowIndex % 2 === 0 ? "bg-gray-200 p-1" : "bg-gray-100 p-1"}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps}
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
      {showPagination && (
        <div className="flex items-center justify-center mt-3">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
          >
            ⏮️
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
          >
            ⏭️
          </button>
        </div>
      )}
      {showRowSelection && (
        <div>
          <button
            onClick={() => setShowSelectedData(!showSelectedData)}
            className="bg-green-500 hover:bg-green-700 py-3 px-4 rounded text-white text-lg"
          >
            {showSelectedData ? "Hide Selected Data" : "Show Selected Data"}
          </button>
          {showSelectedData && (
            <pre>
              {selectedFlatRows.length > 0 ? (
                JSON.stringify(
                  selectedFlatRows.map((row) => row.original),
                  null,
                  2
                )
              ) : (
                <span className="text-red-500 text-4xl flex justify-center font-bold">
                  No Selected Data Found
                </span>
              )}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
