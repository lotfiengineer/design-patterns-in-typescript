import AuditTrail from "./AuditTrail";

export default abstract class Task {
  private auditTrail: AuditTrail;

  constructor(auditTrail: AuditTrail) {
    this.auditTrail = auditTrail;
  }

  execute(): void {
    this.auditTrail.record();

    this.doExecute();
  }

  //* With protected access modifier, we hide doExecute within the Task class
  //* so it doesn't get called accidently from outside
  //* and skip this.auditTrail.record()
  protected abstract doExecute(): void;
}
