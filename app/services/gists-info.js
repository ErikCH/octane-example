import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class GistsInfoService extends Service {
  @tracked gists = [
    {
      fileName: "example.hbs",
      description: "just an example",
      body: "<p>An <strong>example</strong> for {{username}}</p>"
    }, {
      fileName: "another-example.js",
      description: "some js",
      body: `
        import Component from '@glimmer/component';

        export default class MyComponent extends Component {
          variable = "value"
        }
      `
    }, {
      fileName: "third-example.js",
      description: "more",
      body: `
        import Component from '@glimmer/component';

        export default class MyComponent extends Component {
          variable = "newValue"
        }
      `
    }, {
      fileName: "fourth-example.hbs",
      description: "some hbs",
      body: `
        Good day for some {{variable}}
      `
    }
  ]

  addGist(gist) {
    this.gists.addObject(gist);
  }
}
