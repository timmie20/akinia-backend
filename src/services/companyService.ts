import { supabase } from "../config/supabase";
import {
  Company,
  CompanyFilterOptions,
  UpdateCompanyDTO,
} from "../types/company.types";

export class CompanyService {
  // static async getAllCompanies(): Promise<Company[]> {
  //   const { data, error } = await supabase.rpc("get_companies_with_investors");
  //   if (error) throw error;
  //   return data;
  // }

  static async getAllCompanies(filters?: {
    sector?: string[];
    stage?: string[];
    headquarters?: string[];
  }): Promise<Company[]> {
    const { data, error } = await supabase.rpc("get_companies_with_investors", {
      sector_filters: filters?.sector ?? null,
      stage_filters: filters?.stage ?? null,
      headquarters_filters: filters?.headquarters ?? null,
    });

    if (error) throw error;
    return data;
  }

  static async getCompanyById(id: string): Promise<Company> {
    const { data, error } = await supabase
      .from("companies")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  }

  static async getCompaniesFilterOptions(): Promise<CompanyFilterOptions[]> {
    const { data, error } = await supabase.rpc("get_companies_filter_options");
    if (error) throw error;
    return data;
  }

  static async updateCompany(
    id: string,
    company: UpdateCompanyDTO
  ): Promise<Company> {
    const { data, error } = await supabase
      .from("companies")
      .update(company)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  static async deleteCompany(id: string): Promise<void> {
    const { error } = await supabase.from("companies").delete().eq("id", id);

    if (error) throw error;
  }
}
