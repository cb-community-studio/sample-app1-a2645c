import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleMaintenanceRequestsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("maintenanceRequests")
            .get(urlParams.singleMaintenanceRequestsId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "MaintenanceRequests", type: "error", message: error.message || "Failed get maintenanceRequests" });
            });
    }, [props,urlParams.singleMaintenanceRequestsId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">MaintenanceRequests</h3>
                </div>
                <p>maintenanceRequests/{urlParams.singleMaintenanceRequestsId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Buildingid</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.buildingid}</p></div>
                    <label className="text-sm text-primary">Userid</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.userid}</p></div>
                    <label className="text-sm text-primary">Description</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.description}</p></div>
                    <label className="text-sm text-primary">Category</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.category}</p></div>
                    <label className="text-sm text-primary">Priority</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.priority}</p></div>
                    <label className="text-sm text-primary">Status</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.status}</p></div>
                    <label className="text-sm text-primary">Reporteddate</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.reporteddate}</p></div>
                    <label className="text-sm text-primary">Completeddate</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.completeddate}</p></div>
            
                    <label className="text-sm text-primary">created</label>
                    <div className="ml-3">
                        <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
                    </div>
                    <label className="text-sm text-primary">updated</label>
                    <div className="ml-3">
                        <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleMaintenanceRequestsPage);
