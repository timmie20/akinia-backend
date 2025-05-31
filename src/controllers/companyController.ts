import { Request, Response } from "express";
import { CompanyService } from "../services/companyService";
import { CreateCompanyDTO, UpdateCompanyDTO } from "../types/company.types";

export class CompanyController {
  static async getAllCompanies(req: Request, res: Response) {
    try {
      const filters = {
        sector: Array.isArray(req.query.sector)
          ? req.query.sector.map((s) => String(s))
          : req.query.sector
          ? [String(req.query.sector)]
          : undefined,
        stage: Array.isArray(req.query.stage)
          ? req.query.stage.map((s) => String(s))
          : req.query.stage
          ? [String(req.query.stage)]
          : undefined,
        headquarters: Array.isArray(req.query.headquarters)
          ? req.query.headquarters.map((s) => String(s))
          : req.query.headquarters
          ? [String(req.query.headquarters)]
          : undefined,
      };

      const companies = await CompanyService.getAllCompanies(filters);
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch companies" });
    }
  }

  static async getCompanyById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const company = await CompanyService.getCompanyById(id);
      res.json(company);
    } catch (error) {
      res.status(404).json({ error: "Company not found" });
    }
  }

  static async getCompaniesFilterOptions(req: Request, res: Response) {
    try {
      const filters = await CompanyService.getCompaniesFilterOptions();
      res.json(filters);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch filter options" });
    }
  }

  static async updateCompany(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const companyData: UpdateCompanyDTO = req.body;
      const company = await CompanyService.updateCompany(id, companyData);
      res.json(company);
    } catch (error) {
      res.status(400).json({ error: "Failed to update company" });
    }
  }

  static async deleteCompany(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await CompanyService.deleteCompany(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: "Failed to delete company" });
    }
  }
}
