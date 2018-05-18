import ComponentDoc from './component-doc';
import buttonCodeUrl from './examples/button.txt';
import buttonReadmeUrl from './readmes/button-readme.md';
import checkboxCodeUrl from './examples/checkbox.txt';
import checkboxReadmeUrl from './readmes/checkbox-readme.md';
import chipCodeUrl from './examples/chip.txt';
import chipReadmeUrl from './readmes/chip-readme.md';

export default [
  {
    name: 'Button',
    url: '/button',
    componentKey: 'button',
    description:
      'A button represents that an action will occur when the user clicks or touches it.',
    component: ComponentDoc,
    exampleUrl: buttonCodeUrl,
    readmeUrl: buttonReadmeUrl,
    materialDocsLink: 'https://material.io/guidelines/components/buttons.html',
  },
  {
    name: 'Checkbox',
    url: '/checkbox',
    componentKey: 'checkbox',
    description:
      'A Checkbox represents a boolean value that can be in two states, true or false.',
    component: ComponentDoc,
    exampleUrl: checkboxCodeUrl,
    readmeUrl: checkboxReadmeUrl,
    materialDocsLink:
      'https://material.io/develop/web/components/input-controls/checkboxes/',
  },
  {
    name: 'Chip',
    url: '/chip',
    componentKey: 'chip',
    description:
      'Chips are compact elements that represent an input, attribute, or action.',
    component: ComponentDoc,
    exampleUrl: chipCodeUrl,
    readmeUrl: chipReadmeUrl,
    materialDocsLink: 'https://material.io/design/components/chips.html',
  },
];
