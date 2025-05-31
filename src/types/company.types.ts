export interface Company {
  id: string;
  name: string;
  sector: string;
  headquarters: string;
  stage: string;
  founded: string;
  employees: number;
  primary_investor_id: string;
  investor_name: string;
  investor_type: string;
}

export interface CompanyFilterOptions {
  key: string;
  label: string;
  options: string[];
}

export interface CreateCompanyDTO {
  name: string;
  description?: string;
  website?: string;
  founded_date?: Date;
}

export interface UpdateCompanyDTO {
  name?: string;
  description?: string;
  website?: string;
  founded_date?: Date;
}
