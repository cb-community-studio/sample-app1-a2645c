import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';

const SingleEmployeePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("employee")
            .get(urlParams.singleEmployeeId, { query: { $populate: [] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Employee", type: "error", message: error.message || "Failed get employee" });
            });
    }, [props,urlParams.singleEmployeeId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Employee</h3>
                </div>
                <p>employee/{urlParams.singleEmployeeId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Name </label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.name}</p></div>
                    <label className="text-sm text-primary">Employee Id</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employeeId}</p></div>
                    <label className="text-sm text-primary">Dob</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.dob}</p></div>
                    <label className="text-sm text-primary">Gender</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.gender}</p></div>
                    <label className="text-sm text-primary">Phone</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.phone}</p></div>
                    <label className="text-sm text-primary">Email</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.email}</p></div>
                    <label className="text-sm text-primary">Address</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.address}</p></div>
                    <label className="text-sm text-primary">Employment</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.employment}</p></div>
                    <label className="text-sm text-primary">Status</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.status}</p></div>
                    <label className="text-sm text-primary">Hire</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.hire}</p></div>
                    <label className="text-sm text-primary">Date</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.date}</p></div>
                    <label className="text-sm text-primary">Termination Date</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.terminationDate}</p></div>
                    <label className="text-sm text-primary">Job</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.job}</p></div>
                    <label className="text-sm text-primary">Title</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.title}</p></div>
                    <label className="text-sm text-primary">Department</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.department}</p></div>
            
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

export default connect(mapState, mapDispatch)(SingleEmployeePage);
