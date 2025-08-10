import { NextFunction, Request, Response } from "express";
import { ICreateFormSubmission } from "../../application/interfaces/ICreateFormSubmission";
import { formSubmissionSchema } from "../../validation/formSubmissionSchema";
import { HttpStatusCode } from "../../constants/statusCode";
import { IFormSubmission } from "../../domain/entities/formSubmission";

export class FormController {
    constructor(
        private createFormUsecase: ICreateFormSubmission,
        private getAllUsecase: { execute: () => Promise<IFormSubmission[]> }
    ) { }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = formSubmissionSchema.parse(req.body);
      const domainPayload = {
        ...parsed,
        date: new Date(parsed.date),
      };
      const result = await this.createFormUsecase.execute(domainPayload);
      res.status(HttpStatusCode.CREATED).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
  public list = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.getAllUsecase.execute();
      return res.status(HttpStatusCode.OK).json({ success: true, data });
    } catch (error) {
      next(error);
    } 
  };
}
