import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ListGistComponent extends Component {
  @service gistsInfo;
  @tracked snapped = false;

  get shownGists(){
    let gists = this.gistsInfo.gists;
    if(this.snapped) {
      return gists.filter((gist, index) => index % 2 == 0);
    } else {
      return gists;
    }
  }

  @action snap(){
    this.snapped = !this.snapped;
  }
}
