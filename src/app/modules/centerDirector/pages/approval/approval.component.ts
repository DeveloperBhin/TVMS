import { Component } from '@angular/core';

interface Approval {
  reference: string;
  serviceKey: string;
  vehicle: string;
  center: string;
  date: string;
  checkNumber: string;
  descriptionKey: string;

  status:
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED';

  supervisorStatus:
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED';

  directorStatus:
    | 'WAITING'
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED';
}

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent {

  sidebarOpen = false;

  centerName = 'TARI Makutupora';

  approvals: Approval[] = [

    {
      reference: 'REQ-1001',

      serviceKey:
        'APPROVAL.SERVICE_ROUTINE',

      vehicle:
        'T 211 XUJ',

      center:
        'TARI Makutupora',

      date:
        'APPROVAL.DATE_TODAY_0842',

      checkNumber:
        'DR/MKT/014',

      descriptionKey:
        'APPROVAL.DESCRIPTION_ROUTINE',

      status:
        'PENDING',

      supervisorStatus:
        'APPROVED',

      directorStatus:
        'PENDING'
    },

    {
      reference:
        'REQ-1002',

      serviceKey:
        'APPROVAL.SERVICE_REPAIR',

      vehicle:
        'T 211 XUJ',

      center:
        'TARI Makutupora',

      date:
        'APPROVAL.DATE_YESTERDAY_1410',

      checkNumber:
        'DR/MKT/014',

      descriptionKey:
        'APPROVAL.DESCRIPTION_REPAIR',

      status:
        'APPROVED',

      supervisorStatus:
        'APPROVED',

      directorStatus:
        'APPROVED'
    },

    {
      reference:
        'REQ-1003',

      serviceKey:
        'APPROVAL.SERVICE_EMERGENCY',

      vehicle:
        'T 174 QFR',

      center:
        'TARI Makutupora',

      date:
        'APPROVAL.DATE_TODAY_0715',

      checkNumber:
        'DR/HQ/102',

      descriptionKey:
        'APPROVAL.DESCRIPTION_EMERGENCY',

      status:
        'PENDING',

      supervisorStatus:
        'PENDING',

      directorStatus:
        'WAITING'
    }

  ];

  // =========================================
  // SIDEBAR
  // =========================================

  toggleSidebar(): void {
    this.sidebarOpen =
      !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  // =========================================
  // RECOMMEND APPROVAL
  // =========================================

  recommendApproval(
    approval: Approval
  ): void {

    approval.supervisorStatus =
      'APPROVED';

    approval.directorStatus =
      'PENDING';

    approval.status =
      'PENDING';

    console.log(
      'Approval recommended:',
      approval
    );

    // API call will go here later.
  }

  // =========================================
  // REJECT APPROVAL
  // =========================================

  rejectApproval(
    approval: Approval
  ): void {

    approval.supervisorStatus =
      'REJECTED';

    approval.directorStatus =
      'WAITING';

    approval.status =
      'REJECTED';

    console.log(
      'Approval rejected:',
      approval
    );

    // API call will go here later.
  }

  // =========================================
  // APPROVAL PROGRESS
  // =========================================

  getProgress(
    approval: Approval
  ): number {

    if (
      approval.directorStatus ===
      'APPROVED'
    ) {
      return 100;
    }

    if (
      approval.directorStatus ===
      'PENDING'
    ) {
      return 50;
    }

    if (
      approval.supervisorStatus ===
      'APPROVED'
    ) {
      return 50;
    }

    return 0;
  }

  // =========================================
  // STATUS TRANSLATION
  // =========================================

  getStatusTranslation(
    status: string
  ): string {

    switch (status) {

      case 'APPROVED':
        return 'APPROVAL.STATUS_APPROVED';

      case 'REJECTED':
        return 'APPROVAL.STATUS_REJECTED';

      case 'PENDING':
      default:
        return 'APPROVAL.STATUS_PENDING';
    }
  }
}