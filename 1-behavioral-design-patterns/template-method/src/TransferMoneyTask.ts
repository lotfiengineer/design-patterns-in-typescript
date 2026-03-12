import AuditTrail from "./AuditTrail";
import Task from "./Task";

export default class TransferMoneyTask extends Task {
  //* Note: There is no need to implement the constructor and call super.
  //* Typescript compiler does it automatically.
  // constructor(auditTrail: AuditTrail) {
  //   super(auditTrail);
  // }

  protected doExecute(): void {
    console.log("Transfer Money");
  }
}
