# ra-compact-ui

Enhanced styling components for [`react-admin`](https://github.com/marmelab/react-admin), written in TypeScript.

No extra dependencies are required except the ones react-admin is already using.

Why use?
 - reduces styling boilerplate code
 - eases layout customizations
 - maintains native usage of built-in `react-admin` components
 - full TypeScript support with exported interfaces

[![npm version](https://img.shields.io/npm/v/ra-compact-ui.svg)](https://www.npmjs.com/package/ra-compact-ui)
[![npm downloads](https://img.shields.io/npm/dm/ra-compact-ui.svg)](https://www.npmjs.com/package/ra-compact-ui)
[![GitHub license](https://img.shields.io/github/license/ValentinnDimitroff/ra-compact-ui.svg)](https://github.com/ValentinnDimitroff/ra-compact-ui/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/ValentinnDimitroff/ra-compact-ui/)
[![minzipped size](https://badgen.net/bundlephobia/minzip/ra-compact-ui)](https://bundlephobia.com/result?p=ra-compact-ui)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Compatibility

| ra-compact-ui | react-admin | React   |
|---------------|-------------|---------|
| 3.x           | ^5.0.0      | ^18.0.0 |
| 1.x           | ^4.2.7      | ^17 / ^18 |

## Installation

```sh
npm install ra-compact-ui
# or
yarn add ra-compact-ui
```

### Peer Dependencies

- `react` ^18.0.0
- `react-dom` ^18.0.0
- `react-admin` ^5.0.0
- `@mui/material` ^5.x
- `@mui/icons-material` ^5.x
- `@mui/system` ^5.x

## Components

### ShowSplitter

A two-column split layout for Show views. Pass different layouts to `leftSide` and `rightSide`.

```tsx
import { ShowSplitter } from 'ra-compact-ui'

const StaffShow = () => (
    <Show component="div">
        <ShowSplitter
            leftSideProps={{ md: 4 }}
            rightSideProps={{ md: 8 }}
            leftSide={
                <SimpleShowLayout>
                    <TextField source="full_name" />
                    <TextField source="email" />
                </SimpleShowLayout>
            }
            rightSide={
                <TabbedShowLayout>
                    <Tab label="Overview">
                        <TextField source="description" />
                    </Tab>
                </TabbedShowLayout>
            }
        />
    </Show>
)
```

Override the default grid proportions and container components using `leftSideProps` and `rightSideProps`. These are passed directly to MUI's `Grid` component.

```tsx
<ShowSplitter
    leftSideProps={{
        md: 4,
        component: 'div',
    }}
    rightSideProps={{
        md: 8,
    }}
    leftSide={...}
    rightSide={...}
/>
```

### CompactChipField

A wrapper around react-admin's `ChipField` that maps record values to per-value styling options (color and icon).

```tsx
import { CompactChipField } from 'ra-compact-ui'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import AutorenewIcon from '@mui/icons-material/Autorenew'

<CompactChipField
    source="status"
    options={{
        Pending: { color: 'warning', icon: <HourglassEmptyIcon /> },
        InProgress: { color: 'info', icon: <AutorenewIcon /> },
        Done: { color: 'success', icon: <CheckCircleIcon /> },
    }}
/>
```

**Props:**

| Prop      | Type                             | Default   | Description |
|-----------|----------------------------------|-----------|-------------|
| `source`  | `string`                         | required  | The record property to display |
| `options` | `Record<string, ChipOption>`     | required  | Map of values to `{ color, icon }` |
| `variant` | `'filled' \| 'outlined' \| 'light'` | `'light'` | Chip display variant |
| `size`    | `'small' \| 'medium'`            | `'small'` | Chip size |
| `empty`   | `ReactElement \| null`           | `null`    | Fallback when value is missing |
| `sx`      | `SxProps<Theme>`                 | -         | Additional MUI sx overrides |

**Variants:**

- `filled` - solid background with white text
- `outlined` - transparent background with colored border and text
- `light` - transparent background tinted with the color at 12% opacity, colored text (default)

**Colors:** Accepts MUI palette keys (`'primary'`, `'success'`, `'error'`, etc.) or any CSS color string (`'#ff5722'`, `'tomato'`, `'rgb(255, 0, 0)'`).

### AvatarField

Displays a record's image as a MUI Avatar with size optimization.

```tsx
import { AvatarField } from 'ra-compact-ui'

<AvatarField source="avatar_url" altSource="full_name" size="50" />
```

### ChipArrayField

Renders an array field as a list of MUI Chips.

```tsx
import { ChipArrayField } from 'ra-compact-ui'

<ChipArrayField source="tags" />
```

### FullNameField

Combines an `AvatarField` with a full name display (`firstName` + `lastName`).

```tsx
import { FullNameField } from 'ra-compact-ui'

<FullNameField size="25" />
```

## Running the Demo

The demo app uses Vite and points directly at the library source via a Vite alias, so changes are reflected instantly with HMR.

```sh
yarn start-demo
```

## Development

```sh
yarn install          # Install dependencies
yarn build            # Build the library (tsc)
yarn test             # Run tests (vitest)
yarn lint             # Lint with ESLint
yarn start-demo       # Start the demo app
```

## About Author

An enthusiast in love with building software who likes to call it "the grown up's LEGO".

If you enjoy the library and want to support me, you can always <a href="https://www.buymeacoffee.com/vdimitroff" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" /></a>
