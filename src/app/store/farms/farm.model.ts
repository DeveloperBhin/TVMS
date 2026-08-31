export interface Farm {
  id: number;
  uid: string;
  name: string;
  farmerId: number;
  region: string;
  district: string;
  ward: string;
  village: string;
  acreage: number;
  latitude?: number;
  longitude?: number;
  status: 'ACTIVE' | 'INACTIVE';
}
