import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './selection-items.js';

class ListPackages extends PolymerElement {
    static get template() {
        return html `
        <style include="shared-styles">
          :host {
            display: block;

            padding: 10px;
          }
        </style>

        <div class="card">
          <div class="circle">4</div>
          <h1>View Four</h1>
          <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
          <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
        </div>
        <selection-items></selection-items>
      `;
    }
}

window.customElements.define('list-packages', ListPackages);
