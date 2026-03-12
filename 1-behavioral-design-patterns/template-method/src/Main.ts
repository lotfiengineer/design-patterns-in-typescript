// Write code here

import AuditTrail from "./AuditTrail";
import GenerateReportTask from "./GenerateReportTask";
import TransferMoneyTask from "./TransferMoneyTask";

let task = new TransferMoneyTask(new AuditTrail());
task.execute()

new GenerateReportTask(new AuditTrail()).execute();