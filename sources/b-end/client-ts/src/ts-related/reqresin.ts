export interface Color {
  id: number;
  name: number;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ReqResInResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Color[];
}
