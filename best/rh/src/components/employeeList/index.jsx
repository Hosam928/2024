import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import './styles.css';

function EmployeeList({ onRowClick }) {
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:8081/Api/employee')
     .then(response => response.json())
     .then(json => setData(json));
  }, []);

  const dateTemplate = (rowData) => {
    return moment(rowData.Fecha_Ingreso).format('DD/MM/YYYY');
  };

  const fullName = (rowData) => {
    return `${rowData.Nombre} ${rowData.Apellido1} ${rowData.Apellido2}`;
  };

  const onGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value);
  };

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleRowClick = (event) => {
    const rowData = event.data;
    setSelectedEmployee(rowData); // Set the selected employee
    onRowClick(rowData); // Notify the parent component
  };

  return (
    <div className="wrapper__employee">
      <Fieldset legend="Lista de Empleados">
        <div className="wrapper__employee-search">
          <InputText
            type="search"
            onInput={onGlobalFilterChange}
            placeholder="Buscar..."
          />
        </div>
        <div>
          <DataTable
            value={data}
            paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} entradas"
            rows={rows}
            first={first}
            onPage={onPageChange}
            globalFilter={globalFilter}
            emptyMessage="No hay Resultados Encotrados"
            tableStyle={{ minWidth: '600px' }}
            selectionMode="single"
            selection={selectedEmployee}
            onRowSelect={handleRowClick}
          >
            <Column field="Nombre" header="Nombre" sortable body={fullName} style={{ width: '30%' }}></Column>
            <Column field="Puesto" header="Puesto" sortable style={{ width: '50%' }}></Column>
            <Column field="Fecha_Ingreso" header="Fecha Ingreso" body={dateTemplate} style={{ width: '20%' }} sortable></Column>
          </DataTable>
        </div>
      </Fieldset>
    </div>
  );
}

export default EmployeeList;
