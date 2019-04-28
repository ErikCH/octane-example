import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class AddGistComponent extends Component {
  @action
  addFile(body, description, fileName) {
    this.args.addGistInfo(body, description, fileName);
  }
}
