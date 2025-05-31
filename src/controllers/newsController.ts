import { Request, Response } from "express";
import { NewsService } from "../services/newsService";

export class NewsController {
  static async getAllNews(req: Request, res: Response) {
    try {
      const news = await NewsService.getAllNews();
      res.json(news);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ error: "Failed to fetch news" });
    }
  }
}
