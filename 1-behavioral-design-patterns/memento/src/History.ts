import EditorState from "./EditorState";

export default class History {
  private states: Array<EditorState> = [];

  public push = (state: EditorState): void => {
    this.states.push(state);
  };

  public pop = (): EditorState => {
    let lastIndex = this.states.length - 1;
    let lastState = this.states[lastIndex];
    this.states.pop();

    return lastState;
  };
}
