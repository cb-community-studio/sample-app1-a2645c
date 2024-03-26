
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';

import moment from "moment";

const EmployeeDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.employeeId}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.dob}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.gender}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.phone}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.email}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.address}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.employment}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.status}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.hire}</p>
    const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.date}</p>
    const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.terminationDate}</p>
    const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.job}</p>
    const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.title}</p>
    const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.department}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="name" header="Name " body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="employeeId" header="Employee Id" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="dob" header="Dob" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="gender" header="Gender" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="phone" header="Phone" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="email" header="Email" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="address" header="Address" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="employment" header="Employment" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="status" header="Status" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="hire" header="Hire" body={pTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="date" header="Date" body={pTemplate10} style={{ minWidth: "8rem" }} />
            <Column field="terminationDate" header="Termination Date" body={pTemplate11} style={{ minWidth: "8rem" }} />
            <Column field="job" header="Job" body={pTemplate12} style={{ minWidth: "8rem" }} />
            <Column field="title" header="Title" body={pTemplate13} style={{ minWidth: "8rem" }} />
            <Column field="department" header="Department" body={pTemplate14} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default EmployeeDataTable;