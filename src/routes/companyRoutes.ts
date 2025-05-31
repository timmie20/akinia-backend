import { Router } from "express";
import { CompanyController } from "../controllers/companyController";

const router = Router();

// Get all companies
router.get("/", CompanyController.getAllCompanies);

//get companies filter options
router.get("/filter-options", CompanyController.getCompaniesFilterOptions);

// Get company by ID
router.get("/:id", CompanyController.getCompanyById);

// Update company
router.put("/:id", CompanyController.updateCompany);

// Delete company
router.delete("/:id", CompanyController.deleteCompany);

export default router;
