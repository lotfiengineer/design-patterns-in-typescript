import DocumentState from "./DocumentState";

export default class History {
  private states: DocumentState[] = [];

  public push = (state: DocumentState): void => {
    this.states.push(state);
  };

  public pop = (): DocumentState => {
    const lastIndex = this.states.length - 1;
    const lastState = this.states[lastIndex];
    this.states.pop();

    return lastState;
  };
}
