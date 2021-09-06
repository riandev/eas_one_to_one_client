import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Alert, Col } from "react-bootstrap";

const Reports = () => {
  const [report, setReport] = useState([]);
  const [dates, setDates] = useState([]);
  const [downloaded, setDownloaded] = useState([]);
  useEffect(() => {
    fetch("http://192.168.10.11:5010/reports")
      .then((res) => res.json())
      .then((data) => {
        setReport(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://192.168.10.11:5010/reportDates")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);

  function handlePrepare(pdate) {
    console.log(pdate);
    fetch("http://192.168.10.11:5010/prepareByDate?date=" + pdate)
      .then((res) => res.json())
      .then((data) => setDownloaded(data));
  }

  function setShow() {
    setDownloaded([]);
  }

  let headers = [
    { label: "ID", key: "ID" },
    { label: "DIID", key: "DIID" },
    { label: "Data_Status", key: "Data_Status" },
    { label: "data_date", key: "data_date" },
    { label: "ACTIVITY_ID", key: "ACTIVITY_ID" },
    { label: "TERITORY_NAME", key: "TERITORY_NAME" },
    { label: "ZONE_NAME", key: "ZONE_NAME" },
    { label: "ROUTE_NAME", key: "ROUTE_NAME" },
    { label: "TEAM_ID", key: "TEAM_ID" },
    { label: "TEAM_NAME", key: "TEAM_NAME" },
    { label: "TM_USER_NAME", key: "TM_USER_NAME" },
    { label: "TM_NAME", key: "TM_NAME" },
    { label: "TM_CONTACT_NO", key: "TM_CONTACT_NO" },
    { label: "OUTLET_NAME", key: "OUTLET_NAME" },
    { label: "r_name", key: "r_name" },
    { label: "Consumer_No", key: "Consumer_No" },
    { label: "USING_BRAND", key: "USING_BRAND" },
    { label: "OFFERED_BRAND", key: "OFFERED_BRAND" },
    { label: "SAMPLING_NO", key: "SAMPLING_NO" },
    { label: "SWAPPING_NO", key: "SWAPPING_NO" },
    { label: "SALES_PACK", key: "SALES_PACK" },
    { label: "SALES_PACK_QTY", key: "SALES_PACK_QTY" },
    { label: "ADD_DATE_TIME", key: "ADD_DATE_TIME" },
    { label: "for_d", key: "for_d" },
    { label: "agentID", key: "agentID" },
    { label: "qcBy", key: "qcChecked" },
    { label: "qcDate", key: "qcDate" },
    { label: "qcTime", key: "qcTime" },
    { label: "rating", key: "rating" },
    { label: "callDate", key: "callDate" },
    { label: "callTime", key: "callTime" },
    { label: "q1", key: "answer1" },
    { label: "q2", key: "answer2" },
    { label: "q3", key: "answer3" },
    { label: "q4", key: "answer4" },
    { label: "q5", key: "answer5" },
    { label: "q6", key: "answer6" },
    { label: "q7", key: "answer7" },
    { label: "q8", key: "answer8" },
    { label: "q9", key: "answer9" },
    { label: "q10", key: "answer10" },
    { label: "q11", key: "answer11" },
  ];
  return (
    <div className="mt-5">
      {downloaded.length > 0 && (
        <Alert onClose={() => setShow()} dismissible variant="success">
          Leads Prepared for Download
        </Alert>
      )}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Prepare</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((date, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{date?.date}</td>
                <td>
                  <button
                    onClick={() => handlePrepare(date?.date)}
                    className="btn btn-danger"
                  >
                    Prepare
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    // style={{
                    //   display: downloaded.length > 0 ? "block" : "none",
                    // }}
                  >
                    <CSVLink
                      headers={headers}
                      title="Export data to CSV"
                      filename={`AKTCL_CEP_${date?.date}.csv`}
                      data={downloaded}
                    >
                      `Download_${date?.date}`
                    </CSVLink>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <h4 className="text-secondary">Download Full Report Report</h4>
      </div>
      <div style={{ display: report.length > 0 ? "block" : "none" }}>
        <button className="btn btn-danger mt-3">
          <CSVLink
            headers={headers}
            title="Export data to CSV"
            filename={"AKTCL_CEP.csv"}
            data={report}
          >
            Download
          </CSVLink>
        </button>
      </div>
    </div>
  );
};

export default Reports;
