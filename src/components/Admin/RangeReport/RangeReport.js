import React, { useState } from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const RangeReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [brReport, setBrReport] = useState([]);
  const [territoryReport, setTerritoryReport] = useState([]);
  const [areaReport, setAreaReport] = useState([]);
  const [regionReport, setRegionReport] = useState([]);
  const BrStartDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth() + 1;
    let yy = d.getFullYear();
    setStartDate(
      yy + "-" + (mn <= 9 ? "0" + mn : mn) + "-" + (dt <= 9 ? "0" + dt : dt)
    );
  };
  const BrEndDate = (e) => {
    const d = new Date(e.target.value);
    let dt = d.getDate();
    let mn = d.getMonth() + 1;
    let yy = d.getFullYear();
    setEndDate(
      yy + "-" + (mn <= 9 ? "0" + mn : mn) + "-" + (dt <= 9 ? "0" + dt : dt)
    );
  };
  const handleBrRangeReport = () => {
    fetch(
      "http://192.168.10.12:5010/brRanges?" +
        new URLSearchParams({ sDate: startDate, eDate: endDate })
    )
      .then((res) => res.json())
      .then((data) => setBrReport(data))
      .catch((err) => console.error(err));
    fetch(
      "http://192.168.10.12:5010/territoryRanges?" +
        new URLSearchParams({ sDate: startDate, eDate: endDate })
    )
      .then((res) => res.json())
      .then((data) => setTerritoryReport(data))
      .catch((err) => console.error(err));
    fetch(
      "http://192.168.10.12:5010/areaRanges?" +
        new URLSearchParams({ sDate: startDate, eDate: endDate })
    )
      .then((res) => res.json())
      .then((data) => setAreaReport(data))
      .catch((err) => console.error(err));
    fetch(
      "http://192.168.10.12:5010/regionRanges?" +
        new URLSearchParams({ sDate: startDate, eDate: endDate })
    )
      .then((res) => res.json())
      .then((data) => setRegionReport(data))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h5 className="mt-3">Generate BR Report(Range Wise)</h5>
      <div className="d-flex">
        <input
          onChange={BrStartDate}
          className="form-control w-25"
          placeholder="yyyy/mm/dd"
          name="date"
          type="date"
          required
        />
        <span>To</span>
        <input
          onChange={BrEndDate}
          className="form-control w-25"
          placeholder="yyyy/mm/dd"
          name="date"
          type="date"
          required
        />
      </div>

      <button onClick={handleBrRangeReport} className="btn btn-danger">
        Generate Report
      </button>
      <div
        className="mt-3"
        style={{ display: brReport.length > 0 ? "block" : "none" }}
      >
        {/* BR Start */}
        <ExcelFile
          element={<button className="btn btn-info">Download BR Report</button>}
        >
          <ExcelSheet data={brReport} name="BRReports">
            <ExcelColumn
              label="Date"
              value={(col) => new Date(col.date).toLocaleDateString()}
            />
            <ExcelColumn label="Micro site LOG IN ID" value="userId" />
            <ExcelColumn label="region" value="region" />
            <ExcelColumn label="area" value="area" />
            <ExcelColumn label="territory" value="territory" />
            <ExcelColumn label="agencyName" value="agencyName" />
            <ExcelColumn label="Total Allacation" value="allocated_target" />
            <ExcelColumn label="Total Data Achieved" value="total_data_count" />
            <ExcelColumn
              label="Total Data Achieved %"
              value={(col) =>
                (col.total_data_count / col.total_data_count) * 100 + "%"
              }
            />
            <ExcelColumn label="Valid Data" value="valid_Data_count" />
            <ExcelColumn
              label="Valid Data %"
              value={(col) =>
                parseFloat(col.valid_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Duplicate Data" value="dublicate_Data_count" />
            <ExcelColumn
              label="Duplicate Data %"
              value={(col) =>
                parseFloat(col.dublicate_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Error Data" value="error_Data_count" />
            <ExcelColumn
              label="Error Data %"
              value={(col) =>
                parseFloat(col.error_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Total Dial Call" value="total_dial_call" />
            <ExcelColumn
              label="Total Connected Call"
              value="total_connected_call"
            />
            <ExcelColumn
              label="Total Connected Call %"
              value={(col) =>
                parseFloat(col.total_connected_call_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn
              label="EAS Did not Gave permission to continue call"
              value="not_permitted_to_call"
            />
            <ExcelColumn
              label="EAS Gave permission to continue call"
              value="permitted_to_call"
            />
            <ExcelColumn
              label="Call Continue permission (%)"
              value={(col) =>
                parseFloat(col.call_permission_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Below 18" value="bellow_18" />
            <ExcelColumn label="EAS is a Non-Smoker" value="non_smoker" />
            <ExcelColumn
              label="BA Did not pay Visit"
              value="ba_did_not_pay_visit"
            />
            <ExcelColumn label="Total Fake Call" value="total_fake_call" />
            <ExcelColumn
              label="Fake Call %"
              value={(col) =>
                parseFloat(col.fake_call_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="BA Did Visit" value="ba_did_visit" />
            <ExcelColumn
              label="Right Franchise/SOB (Current brand: Real,Hollywood & Derby, Royals)"
              value="right_franchise"
            />
            <ExcelColumn
              label="Minimum 1stick purchase"
              value="stick_purchase"
            />
          </ExcelSheet>
        </ExcelFile>
        {/* BR END */}
      </div>
      <div
        className="mt-3"
        style={{ display: territoryReport.length > 0 ? "block" : "none" }}
      >
        {/* Territory Start */}
        <ExcelFile
          element={
            <button className="btn btn-info">Download Territory Report</button>
          }
        >
          <ExcelSheet data={territoryReport} name="TerritoryReports">
            <ExcelColumn
              label="Date"
              value={(col) => new Date(col.date).toLocaleDateString()}
            />
            <ExcelColumn label="Micro site LOG IN ID" value="userId" />
            <ExcelColumn label="region" value="region" />
            <ExcelColumn label="area" value="area" />
            <ExcelColumn label="territory" value="territory" />
            <ExcelColumn label="agencyName" value="agencyName" />
            <ExcelColumn label="Total Allacation" value="allocated_target" />
            <ExcelColumn label="Total Data Achieved" value="total_data_count" />
            <ExcelColumn
              label="Total Data Achieved %"
              value={(col) =>
                parseFloat(col.total_data_achived_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Valid Data" value="total_valid_data" />
            <ExcelColumn
              label="Valid Data %"
              value={(col) =>
                parseFloat(col.total_valid_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Duplicate Data" value="total_dublicate_data" />
            <ExcelColumn
              label="Duplicate Data %"
              value={(col) =>
                parseFloat(col.total_dublicate_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Error Data" value="total_error_data" />
            <ExcelColumn
              label="Error Data %"
              value={(col) =>
                parseFloat(col.total_error_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Total Dial Call" value="total_dial_call" />
            <ExcelColumn
              label="Total Connected Call"
              value="total_connected_call"
            />
            <ExcelColumn
              label="Total Connected Call %"
              value={(col) =>
                parseFloat(col.total_connected_call_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn
              label="EAS Did not Gave permission to continue call"
              value="not_permitted_to_call"
            />
            <ExcelColumn
              label="EAS Gave permission to continue call"
              value="permitted_to_call"
            />
            <ExcelColumn
              label="Call Continue permission (%)"
              value={(col) =>
                parseFloat(col.call_permission_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Below 18" value="bellow_18" />
            <ExcelColumn label="EAS is a Non-Smoker" value="non_smoker" />
            <ExcelColumn
              label="BA Did not pay Visit"
              value="ba_did_not_pay_visit"
            />
            <ExcelColumn label="Total Fake Call" value="total_fake_call" />
            <ExcelColumn
              label="Fake Call %"
              value={(col) =>
                parseFloat(col.fake_call_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="BA Did Visit" value="ba_did_visit" />
            <ExcelColumn
              label="Right Franchise/SOB (Current brand: Real,Hollywood & Derby, Royals)"
              value="right_franchise"
            />
            <ExcelColumn
              label="Minimum 1stick purchase"
              value="stick_purchase"
            />
            <ExcelColumn
              label="Actual Achievement"
              value={(col) =>
                parseFloat(
                  (col.total_valid_data * (100 - col.fake_call_percentage)) /
                    100
                ).toFixed(2)
              }
            />
            <ExcelColumn
              label="Actual Achievement(%)"
              value={(col) =>
                parseFloat(
                  ((col.total_valid_data * (100 - col.fake_call_percentage)) /
                    100 /
                    col.allocated_target) *
                    100
                ).toFixed(2)
              }
            />
          </ExcelSheet>
        </ExcelFile>
        {/* Territory Start */}
      </div>
      <div
        className="mt-3"
        style={{ display: areaReport.length > 0 ? "block" : "none" }}
      >
        {/* Area Start */}
        <ExcelFile
          element={
            <button className="btn btn-info">Download Area Report</button>
          }
        >
          <ExcelSheet data={areaReport} name="AreaReports">
            <ExcelColumn
              label="Date"
              value={(col) => new Date(col.date).toLocaleDateString()}
            />
            <ExcelColumn label="Micro site LOG IN ID" value="userId" />
            <ExcelColumn label="region" value="region" />
            <ExcelColumn label="area" value="area" />
            <ExcelColumn label="territory" value="territory" />
            <ExcelColumn label="agencyName" value="agencyName" />
            <ExcelColumn label="Total Allacation" value="allocated_target" />
            <ExcelColumn label="Total Data Achieved" value="total_data_count" />
            <ExcelColumn
              label="Total Data Achieved %"
              value={(col) =>
                parseFloat(col.total_data_achived_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Valid Data" value="total_valid_data" />
            <ExcelColumn
              label="Valid Data %"
              value={(col) =>
                parseFloat(col.total_valid_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Duplicate Data" value="total_dublicate_data" />
            <ExcelColumn
              label="Duplicate Data %"
              value={(col) =>
                parseFloat(col.total_dublicate_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Error Data" value="total_error_data" />
            <ExcelColumn
              label="Error Data %"
              value={(col) =>
                parseFloat(col.total_error_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Total Dial Call" value="total_dial_call" />
            <ExcelColumn
              label="Total Connected Call"
              value="total_connected_call"
            />
            <ExcelColumn
              label="Total Connected Call %"
              value={(col) =>
                parseFloat(col.total_connected_call_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn
              label="EAS Did not Gave permission to continue call"
              value="not_permitted_to_call"
            />
            <ExcelColumn
              label="EAS Gave permission to continue call"
              value="permitted_to_call"
            />
            <ExcelColumn
              label="Call Continue permission (%)"
              value={(col) =>
                parseFloat(col.call_permission_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Below 18" value="bellow_18" />
            <ExcelColumn label="EAS is a Non-Smoker" value="non_smoker" />
            <ExcelColumn
              label="BA Did not pay Visit"
              value="ba_did_not_pay_visit"
            />
            <ExcelColumn label="Total Fake Call" value="total_fake_call" />
            <ExcelColumn
              label="Fake Call %"
              value={(col) =>
                parseFloat(col.fake_call_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="BA Did Visit" value="ba_did_visit" />
            <ExcelColumn
              label="Right Franchise/SOB (Current brand: Real,Hollywood & Derby, Royals)"
              value="right_franchise"
            />
            <ExcelColumn
              label="Minimum 1stick purchase"
              value="stick_purchase"
            />
            <ExcelColumn
              label="Actual Achievement"
              value={(col) =>
                parseFloat(
                  (col.total_valid_data * (100 - col.fake_call_percentage)) /
                    100
                ).toFixed(2)
              }
            />
            <ExcelColumn
              label="Actual Achievement(%)"
              value={(col) =>
                parseFloat(
                  ((col.total_valid_data * (100 - col.fake_call_percentage)) /
                    100 /
                    col.allocated_target) *
                    100
                ).toFixed(2)
              }
            />
          </ExcelSheet>
        </ExcelFile>
        {/* Area End */}
      </div>
      <div
        className="mt-3"
        style={{ display: regionReport.length > 0 ? "block" : "none" }}
      >
        {/* Region Start */}
        <ExcelFile
          element={
            <button className="btn btn-info">Download Region Report</button>
          }
        >
          <ExcelSheet data={regionReport} name="RegonReports">
            <ExcelColumn
              label="Date"
              value={(col) => new Date(col.date).toLocaleDateString()}
            />
            <ExcelColumn label="Micro site LOG IN ID" value="userId" />
            <ExcelColumn label="region" value="region" />
            <ExcelColumn label="area" value="area" />
            <ExcelColumn label="territory" value="territory" />
            <ExcelColumn label="agencyName" value="agencyName" />
            <ExcelColumn label="Total Allacation" value="allocated_target" />
            <ExcelColumn label="Total Data Achieved" value="total_data_count" />
            <ExcelColumn
              label="Total Data Achieved %"
              value={(col) =>
                parseFloat(col.total_data_achived_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Valid Data" value="total_valid_data" />
            <ExcelColumn
              label="Valid Data %"
              value={(col) =>
                parseFloat(col.total_valid_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Duplicate Data" value="total_dublicate_data" />
            <ExcelColumn
              label="Duplicate Data %"
              value={(col) =>
                parseFloat(col.total_dublicate_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Error Data" value="total_error_data" />
            <ExcelColumn
              label="Error Data %"
              value={(col) =>
                parseFloat(col.total_error_data_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Total Dial Call" value="total_dial_call" />
            <ExcelColumn
              label="Total Connected Call"
              value="total_connected_call"
            />
            <ExcelColumn
              label="Total Connected Call %"
              value={(col) =>
                parseFloat(col.total_connected_call_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn
              label="EAS Did not Gave permission to continue call"
              value="not_permitted_to_call"
            />
            <ExcelColumn
              label="EAS Gave permission to continue call"
              value="permitted_to_call"
            />
            <ExcelColumn
              label="Call Continue permission (%)"
              value={(col) =>
                parseFloat(col.call_permission_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="Below 18" value="bellow_18" />
            <ExcelColumn label="EAS is a Non-Smoker" value="non_smoker" />
            <ExcelColumn
              label="BA Did not pay Visit"
              value="ba_did_not_pay_visit"
            />
            <ExcelColumn label="Total Fake Call" value="total_fake_call" />
            <ExcelColumn
              label="Fake Call %"
              value={(col) =>
                parseFloat(col.fake_call_percentage).toFixed(2) + "%"
              }
            />
            <ExcelColumn label="BA Did Visit" value="ba_did_visit" />
            <ExcelColumn
              label="Right Franchise/SOB (Current brand: Real,Hollywood & Derby, Royals)"
              value="right_franchise"
            />
            <ExcelColumn
              label="Minimum 1stick purchase"
              value="stick_purchase"
            />
          </ExcelSheet>
        </ExcelFile>
        {/* Region End */}
      </div>
    </div>
  );
};

export default RangeReport;
