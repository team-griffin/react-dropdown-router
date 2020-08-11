# react-dropdown-router

## usage
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownRouter, DropdownRoute, useToggleDropdown } from 'react-dropdown-router';
import Modal from 'react-modal';

function Page(props) {
  const toggleFoo = useToggleDropdown('/foo');

  return (
    <div>
      <p>I am page content</p>
      <button type="button" onClick={toggleFoo}>
        Open dropdown
      </button>
      <DropdownRoute>
        <MyDropdownMenu/>
      </DropdownRoute>
    </div>
  );
}

function App() {
  return (
    <div>
      <DropdownRouter>
        <div>
          <Page/>
        </div>
      </DropdownRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## API
### DropdownRouter
```tsx
<ModalRouter>
  {children}
</ModalRouter>
```

### DropdownRoute
```tsx
<ModalRoute path={pathString}>
  {children}
</ModalRoute>
```

### useIsOpen
```ts
(path: string) => boolean
```

### useOpenDropdown
```ts
(path: string) => () => void
```

### useCloseDropdown
```ts
(path: string) => () => void
```

### useToggleDropdown
```ts
(path: string) => () => void
```

### useDropdownRouter
```ts
() => Router
```
