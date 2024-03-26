
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';

import moment from "moment";

const InventoryDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.itemId}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.itemName}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.category}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.unitOfMeasure}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.quantityOnHand}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.minimumStockLevel}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.maximumStockLevel}</p>
    const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.reorderPoint}</p>
    const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.supplierVendor}</p>
    const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.Empty}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.createdAt).fromNow()}</p>);
      const pUpdatedAt = (rowData, { rowIndex }) => (<p>{moment(rowData.updatedAt).fromNow()}</p>);

    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="itemId" header="Item Id" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="itemName" header="Item Name" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="category" header="Category" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="unitOfMeasure" header="Unit Of Measure" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="quantityOnHand" header="Quantity On Hand" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="minimumStockLevel" header="Minimum Stock Level" body={pTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="maximumStockLevel" header="Maximum Stock Level" body={pTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="reorderPoint" header="Reorder Point" body={pTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="supplierVendor" header="Supplier Vendor" body={pTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="Empty" header="  Empty" body={pTemplate9} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            <Column field="createdAt" header="created" body={pCreatedAt} style={{ minWidth: "8rem" }} />
            <Column field="updatedAt" header="updated" body={pUpdatedAt} style={{ minWidth: "8rem" }} />
        </DataTable>
    );
};

export default InventoryDataTable;