import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { Dialog } from 'primereact/dialog';
import './styles.css';

function StaffActionByEmployee({ employee }) {
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [visible, setVisible] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  useEffect(() => {
    if (employee && employee.idPersonal) {
      fetch(`http://localhost:8081/Api/personnelAction?idPersonal=${employee.idPersonal}`)
        .then(response => response.json())
        .then(json => setData(json));
    }
  }, [employee]);

  const dateTemplate = (rowData) => {
    return moment(rowData.Fecha_Emision_AP).format('DD/MM/YYYY');
  };

  const onGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value);
  };

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleViewButtonClick = (rowData) => {
    setSelectedAction(rowData);
    setVisible(true);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <Button label="Ver" icon="pi pi-user" onClick={() => handleViewButtonClick(rowData)}/>
    );
  };

  return (
    <div className="wrapper__staffAction">
      <Fieldset legend={`${employee ? `${employee.Nombre} ${employee.Apellido1} ${employee.Apellido2}` : 'Seleccione un Empleado'}`}>
        <div className="wrapper__staffAction-search">
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
            tableStyle={{ minWidth: '650px' }}
          >
            <Column field="ID_Accion_Pers" header="ID" sortable style={{ width: '20%' }}></Column>
            <Column field="Accion" header="Tipo Accion Personal" sortable style={{ width: '40%' }}></Column>
            <Column field="Fecha_Emision_AP" header="Fecha Emision" body={dateTemplate} style={{ width: '20%' }} sortable></Column>
            <Column header="Accion" body={actionBodyTemplate} style={{ width: '20%' }}></Column>
          </DataTable>
        </div>
      </Fieldset>
      <Dialog header="Acción Personal" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <div className="dialog-content">
          {selectedAction ? (
            <>
              <div className="dialog-row">
                <span className="label">ID:</span>
                <span className="value">{selectedAction.ID_Accion_Pers}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Nombre:</span>
                <span className="value">{employee.Nombre} {employee.Apellido1} {employee.Apellido2}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Cédula:</span>
                <span className="value">{employee.Cedula}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Área de Trabajo:</span>
                <span className="value">{employee.Departamento}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Fecha Emisión:</span>
                <span className="value">{moment(selectedAction.Fecha_Emision_AP).format('DD/MM/YYYY')}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Puesto:</span>
                <span className="value">{employee.Puesto}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Salario Planilla:</span>
                <span className="value">${employee.SalarioMensualDol}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Fecha Ingreso:</span>
                <span className="value">{moment(employee.Fecha_Ingreso).format('DD/MM/YYYY')}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Acción:</span>
                <span className="value">{selectedAction.Accion}</span>
              </div>
              <div className="dialog-row">
                <span className="label">Vacaciones a la Fecha:</span>
                <span className="value">{selectedAction.VacationsToDate}</span>
              </div>

              {selectedAction.Accion === "Vacaciones" && (
                <>
                  <div className="dialog-row">
                    <span className="label">Inicio Vacaciones:</span>
                    <span className="value">{moment(selectedAction.Fecha_Ini_Vacaciones).format('DD/MM/YYYY')}</span>
                  </div>
                  <div className="dialog-row">
                    <span className="label">Fin Vacaciones:</span>
                    <span className="value">{moment(selectedAction.Fecha_Fin_Vacaciones).format('DD/MM/YYYY')}</span>
                  </div>
                  <div className="dialog-row">
                    <span className="label">Dias de Vacaciones:</span>
                    <span className="value">{selectedAction.DaysOfVacation}</span>
                  </div>
                  <div className="dialog-row">
                    <span className="label">Dias Disponibles:</span>
                    <span className="value">{selectedAction.AvailableDays}</span>
                  </div>
                  <div className="dialog-row">
                    <span className="label">Regresa a sus Labores:</span>
                    <span className="value">{moment(selectedAction.Fecha_Fin_Vacaciones).add(1, 'days').format('DD/MM/YYYY')}</span>
                  </div>
                </>
              )}

              <div className="dialog-row">
                <span className="label">Observaciones:</span>
                <span className="value">{selectedAction.Observacion_AP}</span>
              </div>
            </>
          ) : (
            <p>No se ha seleccionado ninguna acción.</p>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default StaffActionByEmployee;
