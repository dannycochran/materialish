## Usage

```jsx
import { Chip } from 'materialish';
import 'materialish/chip.css';
```

## Props

| Prop Name    | Default Value | Required | Description                                                                                     |
| ------------ | ------------- | -------- | ----------------------------------------------------------------------------------------------- |
| children     |               | No       | The contents that are rendered                                                                  |
| className    |               | No       | Additional class name(s) to add to the Chip                                                     |
| active       |               | No       | Pass `true` to render as an active chip                                                         |
| outlined     |               | No       | Pass `true` to render as an outline chip                                                        |
| onCloseClick |               | No       | Pass a function for when the close button is pressed, this turns the chip into a closeable chip |
| ...rest      |               | No       | Other props are placed on the root element of the chip                                          |

## CSS Variables

| Variable                        | Default Value | Description                                     |
| ------------------------------- | ------------- | ----------------------------------------------- |
| --mt-baseFontSize               | 1rem          | The size of the chip is based off of this value |
| --mt-chip-backgroundColor       | #c7c6c6       | The background color of the chip                |
| --mt-chip-textColor             | #7e7d7d       | The text color of the chip                      |
| --mt-chip-activeBackgroundColor | #eaf6ff       | The background color of the chip when is active |
| --mt-chip-activeTextColor       | #2196f3       | The text color of the chip when is active       |
