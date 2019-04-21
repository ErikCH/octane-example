import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class AddGistComponent extends Component {
  @action
  addFile(body, description, fileName) {
    const blah = 5;
    this.args.addGistInfo(body, description, fileName);
  }
}
