import Member from "./Member";

export default class Team {
  private resources = new Array<Member>();

  add(member: Member) {
    this.resources.push(member);
  }

  deploy() {
    for (const member of this.resources) member.deploy();
  }
}
