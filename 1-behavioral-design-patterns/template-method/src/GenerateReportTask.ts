import AuditTrail from "./AuditTrail";
import Task from "./Task";

export default class GenerateReportTask extends Task {
  protected doExecute(): void {
    console.log("Generate Report");
  }
}
