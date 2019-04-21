import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default class ListGistComponent extends Component {
  @service gistsInfo;

  @computed("gistsInfo")
  get isEmpty() {
    return this.gistsInfo.gists.length > 0;
  }
}
