export interface NewsDTO {
  id: string;
  title: string;
  sector: string;
  source: string;
  company_id: string;
}

export interface NewsWithCompanyDTO {
  id: string;
  title: string;
  sector: string;
  source: string;
  company_id: string;
  company: {
    name: string;
  };
}
