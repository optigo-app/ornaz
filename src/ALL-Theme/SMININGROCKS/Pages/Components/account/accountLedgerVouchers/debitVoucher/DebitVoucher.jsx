import React from "react";
import "./debitvoucher.css";
const DebitVoucher = () => {
  return (
    <div>
      <div className="containerDV">
        <div className="d-flex justify-content-end">
          <button className="btn_white my-5 p_btn_al_Dv" onClick={() => window.print()}>Print</button>
        </div>
        <div>
          <div className="dv_headline">head line</div>
          <div className="d-flex justify-content-between align-items-center p-1 border-bottom">
            <div className="fs_dv">
              <div className="fs_dv_spes">gstore</div>
              <div>G-19,20</div>
              <div>surat-395006, Gujarat(India)</div>
              <div>T 02614890777</div>
              <div>support@orail.in | www.optigoapps,com</div>
            </div>
            <div>
              <img src="" alt="#companylogo" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-start p-1 ">
          <div className="fs_dv w-75">
            <div className="fw-bold">To,</div>
            <div className="fs_dv_spes_2">boni pvt ltd</div>
            <div>varachha</div>
            <div>varachha</div>
            <div>Surat - 395002</div>
            <div>nimesh@ymail.in</div>
          </div>
          <div className="fs_dv w-25">
            <div className="d-flex w-100"><div className="w-50 end_dv fw-bold">OUTWARD</div><div className="w-50 end_dv">CRO158</div></div>
            <div className="d-flex w-100"><div className="w-50 end_dv fw-bold">DATE</div><div className="w-50 end_dv">04 Mar 2024</div></div>
          </div>
        </div>
        <div className="border mt-3">
          <div className="py-2 border-bottom p-1 fs-5">METAL</div>
          <table>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>TYPE</th>
                <th>COLOR</th>
                <th>SIZE</th>
                <th>DESCRIPTION</th>
                <th>GM.</th>
                <th>RATE</th>
                <th>AMT.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>gold</td>
                <td>18k</td>
                <td>yellow gold/76.000</td>
                <td>1mm</td>
                <td>yellow gold</td>
                <td>0.710</td>
                <td>0.00</td>
                <td>0.00</td>
              </tr>
              <tr>
                <th colSpan={2}>Total Amount</th>
                <th></th>
                <th></th>
                <th></th>
                <th>0.710</th>
                <th></th>
                <th>0.00</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 border ">
          <div className="h_dv border-end w-50 end_bottom_dv">RECEIVER's NAME & SIGNATURE</div>
          <div className="w-50 h_dv end_bottom_dv">For, gstore</div>
        </div>
      </div>
    </div>
  );
};

export default DebitVoucher;
