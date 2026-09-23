import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']

})
export class DriversComponent {

   sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
  downloadPermit(requestNo: string): void {

  const permit = {
    requestNo: requestNo,

    vehicle: 'STK 4492',
    vehicleModel: 'Toyota Land Cruiser Prado',
    year: '2021',
    station: 'TARI Makutupora',

    chassisNumber: 'TR-KD-99238472',
    currentMileage: '142,850 KM',

    driver: 'Check No: CHK-88421',

    serviceType: 'Routine Service (Kilometer Based)',

    requestDate: '15 Septemba 2026',

    cost: '480,000',

    description:
      'Kubadilisha Engine Oil, Oil Filter na Fuel Filter kulingana na ratiba ya huduma ya kawaida.',

    approvals: [
      {
        level: 'Center Supervisor',
        status: 'Imeidhinishwa',
        date: '15 Septemba 2026'
      },
      {
        level: 'Center Director',
        status: 'Imeidhinishwa',
        date: '16 Septemba 2026'
      },
      {
        level: 'TO / AM (Makao Makuu)',
        status: 'Imeidhinishwa',
        date: '17 Septemba 2026'
      }
    ]
  };

  const printWindow = window.open(
    '',
    '_blank',
    'width=900,height=1100'
  );

  if (!printWindow) {
    return;
  }

  printWindow.document.write(
    this.buildPermitHtml(permit)
  );

  printWindow.document.close();

  printWindow.onload = () => {
    printWindow.focus();
    printWindow.print();
  };
}
private buildPermitHtml(permit: any): string {

  const approvals = permit.approvals
    .map(
      (approval: any) => `
        <tr>
          <td class="approval-name">
            ${approval.level}
          </td>

          <td>
            <span class="approved-badge">
              ✓ ${approval.status}
            </span>
          </td>

          <td>
            ${approval.date}
          </td>
        </tr>
      `
    )
    .join('');

  return `
<!DOCTYPE html>

<html lang="sw">

<head>

<meta charset="UTF-8">

<title>
  Kibali cha Matengenezo - ${permit.requestNo}
</title>

<style>

  @page {
    size: A4;
    margin: 12mm;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;

    font-family:
      Arial,
      Helvetica,
      sans-serif;

    color: #172033;

    background: white;

    font-size: 12px;
  }

  .permit {
    width: 100%;
    max-width: 794px;

    margin: auto;

    background: white;
  }


  /* ===============================
     HEADER
  =============================== */

  .header {
    display: flex;
    align-items: center;

    gap: 16px;

    padding-bottom: 12px;

    border-bottom: 2px solid #d9d9d9;
  }

  .logo {
    width: 105px;
    height: auto;
  }

  .organization {
    flex: 1;
  }

  .organization h1 {
    margin: 0 0 5px;

    color: #006b36;

    font-size: 18px;
    font-weight: 800;
  }

  .organization p {
    margin: 0;

    color: #657083;

    font-size: 11px;
  }


  /* ===============================
     PERMIT TITLE
  =============================== */

  .permit-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 20px;

    padding: 18px 0 20px;
  }

  .permit-title h2 {
    margin: 0 0 5px;

    font-size: 22px;
    font-weight: 800;

    color: #101827;
  }

  .permit-title p {
    margin: 0;

    color: #718096;

    font-size: 12px;
  }

  .permit-ref {
    text-align: right;

    font-weight: 700;
  }

  .permit-ref strong {
    display: block;

    margin-bottom: 8px;
  }

  .main-approved {
    display: inline-block;

    padding: 6px 12px;

    background: #087a48;

    color: white;

    border-radius: 20px;

    font-size: 11px;
    font-weight: 700;
  }


  /* ===============================
     VEHICLE BOX
  =============================== */

  .vehicle-box {
    display: grid;

    grid-template-columns:
      1fr
      1fr
      1fr;

    gap: 20px;

    padding: 20px;

    border: 1px solid #dfe4e8;
    border-radius: 10px;

    background: #ffffff;
  }

  .vehicle-item {
    margin-bottom: 15px;
  }

  .vehicle-item:last-child {
    margin-bottom: 0;
  }

  .label {
    display: block;

    margin-bottom: 4px;

    color: #687385;

    font-size: 10px;
    font-weight: 700;

    text-transform: uppercase;
  }

  .value {
    color: #172033;

    font-size: 13px;
    font-weight: 700;
  }


  /* ===============================
     SECTIONS
  =============================== */

  .section {
    margin-top: 25px;
  }

  .section-title {
    margin-bottom: 15px;

    color: #006b36;

    font-size: 14px;
    font-weight: 800;

    text-transform: uppercase;
  }

  .section-title::after {
    content: '';

    display: block;

    width: 65px;
    height: 3px;

    margin-top: 6px;

    background: #15945b;
  }


  /* ===============================
     SERVICE
  =============================== */

  .service-grid {
    display: grid;

    grid-template-columns:
      1fr
      1fr
      1fr;

    gap: 20px;

    margin-bottom: 15px;
  }

  .description {
    margin-top: 12px;
  }


  /* ===============================
     APPROVAL TABLE
  =============================== */

  .approval-table {
    width: 100%;

    border-collapse: separate;
    border-spacing: 0 8px;
  }

  .approval-table th {
    padding: 0 12px 5px;

    text-align: left;

    color: #697386;

    font-size: 10px;
    text-transform: uppercase;
  }

  .approval-table td {
    padding: 13px 12px;

    border-top: 1px solid #dfe4e8;
    border-bottom: 1px solid #dfe4e8;

    background: #ffffff;
  }

  .approval-table td:first-child {
    border-left: 1px solid #dfe4e8;

    border-radius:
      7px 0 0 7px;
  }

  .approval-table td:last-child {
    border-right: 1px solid #dfe4e8;

    border-radius:
      0 7px 7px 0;
  }

  .approval-name {
    font-weight: 700;
  }

  .approved-badge {
    display: inline-block;

    padding: 5px 10px;

    background: #e5f7ed;

    color: #078449;

    border-radius: 15px;

    font-size: 10px;
    font-weight: 700;
  }


  /* ===============================
     SIGNATURES
  =============================== */

  .signature-grid {
    display: grid;

    grid-template-columns:
      1fr
      1fr;

    gap: 35px;

    margin-top: 25px;
  }

  .signature-box {
    min-height: 120px;

    padding: 16px;

    border: 1px solid #dfe4e8;
    border-radius: 9px;
  }

  .signature-box h4 {
    margin: 0 0 18px;

    color: #536174;

    font-size: 11px;
  }

  .signature-line {
    margin: 14px 0;

    color: #687385;

    font-size: 10px;
  }


  /* ===============================
     FOOTER
  =============================== */

  .footer {
    margin-top: 90px;

    padding-top: 10px;

    border-top: 1px solid #d6dce1;

    text-align: center;

    color: #697386;

    font-size: 9px;
  }

  .footer strong {
    display: block;

    margin-top: 6px;

    color: #536174;
  }


  @media print {

    body {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }

  }

</style>

</head>


<body>

<div class="permit">


  <!-- HEADER -->

  <div class="header">

    <img
      src="${window.location.origin}/assets/images/logo.png"
      class="logo"
      alt="TARI">

    <div class="organization">

      <h1>
        TANZANIA AGRICULTURAL RESEARCH INSTITUTE (TARI)
      </h1>

      <p>
        Mfumo wa Usimamizi wa Magari
        &nbsp;•&nbsp;
        Vehicle Management System (TARI-VMS)
      </p>

    </div>

  </div>


  <!-- TITLE -->

  <div class="permit-heading">

    <div class="permit-title">

      <h2>
        KIBALI CHA MATENGENEZO YA GARI
      </h2>

      <p>
        Vehicle Maintenance Approval Permit
      </p>

    </div>


    <div class="permit-ref">

      <strong>
        REF: ${permit.requestNo}
      </strong>

      <span class="main-approved">
        ✓ IMEIDHINISHWA
      </span>

    </div>

  </div>


  <!-- VEHICLE -->

  <div class="vehicle-box">

    <div>

      <div class="vehicle-item">

        <span class="label">
          Gari
        </span>

        <span class="value">
          ${permit.vehicle}
        </span>

      </div>


      <div class="vehicle-item">

        <span class="label">
          Namba ya Chassis
        </span>

        <span class="value">
          ${permit.chassisNumber}
        </span>

      </div>

    </div>


    <div>

      <div class="vehicle-item">

        <span class="label">
          Aina / Mwaka
        </span>

        <span class="value">
          ${permit.vehicleModel},
          ${permit.year}
        </span>

      </div>


      <div class="vehicle-item">

        <span class="label">
          Maili ya Sasa
        </span>

        <span class="value">
          ${permit.currentMileage}
        </span>

      </div>

    </div>


    <div>

      <div class="vehicle-item">

        <span class="label">
          Kituo
        </span>

        <span class="value">
          ${permit.station}
        </span>

      </div>


      <div class="vehicle-item">

        <span class="label">
          Dereva Aliyekabidhiwa
        </span>

        <span class="value">
          ${permit.driver}
        </span>

      </div>

    </div>

  </div>


  <!-- SERVICE -->

  <div class="section">

    <div class="section-title">
      TAARIFA ZA HUDUMA
    </div>


    <div class="service-grid">

      <div>

        <span class="label">
          Aina ya Huduma
        </span>

        <span class="value">
          ${permit.serviceType}
        </span>

      </div>


      <div>

        <span class="label">
          Tarehe ya Ombi
        </span>

        <span class="value">
          ${permit.requestDate}
        </span>

      </div>


      <div>

        <span class="label">
          Gharama (TSh)
        </span>

        <span class="value">
          ${permit.cost}
        </span>

      </div>

    </div>


    <div class="description">

      <span class="label">
        Sababu / Maelezo
      </span>

      <span class="value">
        ${permit.description}
      </span>

    </div>

  </div>


  <!-- APPROVALS -->

  <div class="section">

    <div class="section-title">
      MNYORORO WA IDHINI (APPROVAL CHAIN)
    </div>


    <table class="approval-table">

      <thead>

        <tr>

          <th>
            Ngazi ya Idhini
          </th>

          <th>
            Hali
          </th>

          <th>
            Tarehe
          </th>

        </tr>

      </thead>


      <tbody>
        ${approvals}
      </tbody>

    </table>

  </div>


  <!-- SIGNATURE -->

  <div class="signature-grid">

    <div class="signature-box">

      <h4>
        TAARIFA ZA AFISA MATENGENEZO
      </h4>

      <div class="signature-line">
        Jina la Afisa Matengenezo:
        ____________________
      </div>

      <div class="signature-line">
        Sahihi:
        ____________________
      </div>

      <div class="signature-line">
        Namba ya Simu:
        ____________________
      </div>

    </div>


    <div class="signature-box">

      <h4>
        MUHURI WA KITUO
      </h4>

      <div class="signature-line">
        Tarehe:
        ____________________
      </div>

    </div>

  </div>


  <!-- FOOTER -->

  <div class="footer">

    Hati hii imetolewa kielektroniki kupitia
    TARI-VMS na ni halali bila saini ya mkono
    ikiwa na muhuri wa mfumo.

    <strong>
      TARI Makao Makuu • S.L.P 5088, Dodoma
    </strong>

  </div>


</div>

</body>

</html>
  `;
}
}
