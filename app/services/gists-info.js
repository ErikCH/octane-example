import Service from "@ember/service";

export default class GistsInfoService extends Service {
  _gists;

  constructor() {
    super(...arguments);
    this._gists = [];
  }
  get gists() {
    return this._gists;
  }

  set gists(g) {
    this._gists = g;
  }
}
