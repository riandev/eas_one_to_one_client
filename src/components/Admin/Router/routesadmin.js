import React from "react";
import Qc from "../../Qc/Qc";
import Reports from "../../Reports/Reports";
import LeadGenerate from "../LeadGenerate/LeadGenerate";
import UploadLead from "../UploadLead/UploadLead";
import DeleteLeads from "./../DeleteLeads/DeleteLeads";
import BrReport from "./../BrReport/BrReport";

const routesadmin = [
  {
    path: "/admin/uploadLead",
    exact: true,
    name: "Upload Lead",
    toolbar: () => <p className="text-white">Upload Lead For Call</p>,
    main: () => <UploadLead />,
  },
  {
    path: "/admin/cep",
    exact: true,
    name: "Call QC",
    toolbar: () => <p className="text-white">Call QC</p>,
    main: () => <Qc />,
  },
  {
    path: "/admin/export",
    exact: true,
    name: "Export CRM",
    toolbar: () => <p className="text-white">Export Survey</p>,
    main: () => <Reports />,
  },
  {
    path: "/admin/delete",
    exact: true,
    name: "Delete Lead",
    toolbar: () => <p className="text-white">Delete All Lead</p>,
    main: () => <DeleteLeads />,
  },
  {
    path: "/admin/addLead",
    exact: true,
    name: "Generate Lead",
    toolbar: () => <p className="text-white">Delete All Lead</p>,
    main: () => <LeadGenerate />,
  },
  {
    path: "/admin/generateReport",
    exact: true,
    name: "Generate Reports",
    toolbar: () => <p className="text-white">Generate Reports</p>,
    main: () => <BrReport />,
  },
];

export default routesadmin;
