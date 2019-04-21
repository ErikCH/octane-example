import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class AddGistController extends Controller {
  @service gistsInfo;

  @action
  addGistInfoRoute(body, description, fileName) {
    this.gistsInfo.gists.push({ body, description, fileName });
    this.transitionToRoute("/");
  }
}
