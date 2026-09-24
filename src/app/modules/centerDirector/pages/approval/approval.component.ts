
import { Component } from '@angular/core';

type ApprovalStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED';

type StepStatus =
  | ApprovalStatus
  | 'WAITING';

interface Approval {
  id: number;
  reference: string;
  serviceKey: string;
  vehicle: string;
  center: string;
  date: string;
  checkNumber: string;
  descriptionKey: string;
  status: ApprovalStatus;
  supervisorStatus: ApprovalStatus;
  directorStatus: StepStatus;
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
      id: 1,
      reference: 'REQ-1001',
      serviceKey: 'APPROVAL.ROUTINE_SERVICE',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      date: 'Leo, 08:42',
      checkNumber: 'DR/MKT/014',
      descriptionKey: 'APPROVAL.DESC_1001',
      status: 'PENDING',
      supervisorStatus: 'APPROVED',
      directorStatus: 'PENDING'
    },
    {
      id: 2,
      reference: 'REQ-1002',
      serviceKey: 'APPROVAL.BREAKDOWN_REPAIR',
      vehicle: 'T 211 XUJ',
      center: 'TARI Makutupora',
      date: 'Jana, 14:10',
      checkNumber: 'DR/MKT/014',
      descriptionKey: 'APPROVAL.DESC_1002',
      status: 'APPROVED',
      supervisorStatus: 'APPROVED',
      directorStatus: 'APPROVED'
    }
  ];

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  getStatusTranslation(
    status: ApprovalStatus
  ): string {
    switch (status) {
      case 'APPROVED':
        return 'APPROVAL.APPROVED';
      case 'REJECTED':
        return 'APPROVAL.REJECTED';
      default:
        return 'APPROVAL.PENDING';
    }
  }

  getProgress(approval: Approval): number {
    if (
      approval.supervisorStatus === 'APPROVED' &&
      approval.directorStatus === 'APPROVED'
    ) {
      return 100;
    }

    if (approval.supervisorStatus === 'APPROVED') {
      return 50;
    }

    return 0;
  }

  approveRequest(approval: Approval): void {
    if (
      approval.supervisorStatus !== 'APPROVED' ||
      approval.directorStatus !== 'PENDING'
    ) {
      return;
    }

    approval.directorStatus = 'APPROVED';
    approval.status = 'APPROVED';

    console.log(
      'Director approved request:',
      approval.reference
    );
  }

  rejectRequest(approval: Approval): void {
    if (
      approval.supervisorStatus !== 'APPROVED' ||
      approval.directorStatus !== 'PENDING'
    ) {
      return;
    }

    approval.directorStatus = 'REJECTED';
    approval.status = 'REJECTED';

    console.log(
      'Director rejected request:',
      approval.reference
    );
  }
}