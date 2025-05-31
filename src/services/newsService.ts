import { NewsWithCompanyDTO } from "../types/news.types";
import { supabase } from "../config/supabase";

export class NewsService {
  static async getAllNews(): Promise<NewsWithCompanyDTO[]> {
    const { data, error } = await supabase.from("news").select(`
        id,
        title,
        sector,
        source,
        related_company_id,
        company:companies (
          name
        )
      `);

    if (error) {
      throw new Error(error.message);
    }

    return data as unknown as NewsWithCompanyDTO[];
  }
}
