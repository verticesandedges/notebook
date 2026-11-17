import { CellTypeSelector } from "./notebook/cell-type-selector/cell-type-selector";
import { MarkdownCellElement } from "./notebook/markdown-cell/markdown-cell";
import { NotebookElement } from "./notebook/notebook/notebook";
import { CellActionsElement } from "./notebook/cell-actions/cell-actions";
import { JavascriptCellElement } from "./notebook/javascript-cell/javascript-cell";
import { TypescriptCellElement } from "./notebook/typescript-cell/typescript-cell";
import { NotebookActionsElement } from "./notebook/notebook-actions/notebook-actions";
import { NotebookAppElement } from "./notebook/notebook-app/notebook-app";

window.customElements.define("markdown-cell", MarkdownCellElement);
window.customElements.define("notebook-el", NotebookElement);
window.customElements.define("cell-type", CellTypeSelector)
window.customElements.define("cell-actions", CellActionsElement);
window.customElements.define("javascript-cell", JavascriptCellElement);
window.customElements.define('typescript-cell', TypescriptCellElement);
window.customElements.define('notebook-actions', NotebookActionsElement);
window.customElements.define('notebook-app', NotebookAppElement);

if('serviceWorker' in navigator){
  navigator.serviceWorker
  .register(new URL('./sw.ts', import.meta.url), {type: "module", scope: "/notebook/"})
  .then(reg => console.log("Service worker registered", reg.scope))
  .catch(err => console.error("Service worker registration failed", err));
}