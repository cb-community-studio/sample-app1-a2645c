import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';



const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const WorkOrdersCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        // replace this when there is a date field
        // const init  = { todate : new Date(), from : new Date()};
        // set_entity({...init});
        set_entity({});
    }, [props.show]);

    const onSave = async () => {
        let _data = {
            requestid: _entity.requestid,
            assignedtouserid: _entity.assignedtouserid,
            startdate: _entity.startdate,
            enddate: _entity.enddate,
            status: _entity.status,
            notes: _entity.notes,
        };

        setLoading(true);

        try {
            
        const result = await client.service("workOrders").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info workOrders created successfully" });
        props.onCreateResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="workOrders-create-dialog-component">
            <div>
                <p className="m-0">Requestid:</p>
                <InputText className="w-full mb-3" value={_entity?.requestid} onChange={(e) => setValByKey("requestid", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Assignedtouserid:</p>
                <InputText className="w-full mb-3" value={_entity?.assignedtouserid} onChange={(e) => setValByKey("assignedtouserid", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Startdate:</p>
                <InputText className="w-full mb-3" value={_entity?.startdate} onChange={(e) => setValByKey("startdate", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Enddate:</p>
                <InputText className="w-full mb-3" value={_entity?.enddate} onChange={(e) => setValByKey("enddate", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Status:</p>
                <InputText className="w-full mb-3" value={_entity?.status} onChange={(e) => setValByKey("status", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Notes:</p>
                <InputText className="w-full mb-3" value={_entity?.notes} onChange={(e) => setValByKey("notes", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(WorkOrdersCreateDialogComponent);
