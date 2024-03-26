import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleWorkOrdersPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("workOrders")
            .get(urlParams.singleWorkOrdersId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "WorkOrders", type: "error", message: error.message || "Failed get workOrders" });
            });
    }, [props,urlParams.singleWorkOrdersId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">WorkOrders</h3>
                </div>
                <p>workOrders/{urlParams.singleWorkOrdersId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Requestid</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.requestid}</p></div>
                    <label className="text-sm text-primary">Assignedtouserid</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.assignedtouserid}</p></div>
                    <label className="text-sm text-primary">Startdate</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.startdate}</p></div>
                    <label className="text-sm text-primary">Enddate</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.enddate}</p></div>
                    <label className="text-sm text-primary">Status</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.status}</p></div>
                    <label className="text-sm text-primary">Notes</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.notes}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleWorkOrdersPage);
