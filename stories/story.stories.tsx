import React from 'react';
import { DropdownRoute, DropdownRouter, useToggleDropdown } from '../src';

export default { title: 'Main' };

export const Main = () => {

  function InnerComponent() {
    const toggleFoo = useToggleDropdown('foo');
    const toggleBar = useToggleDropdown('bar');

    return (
      <div>
        <p>{'I am page content'}</p>
        <button
          type="button"
          onClick={toggleFoo}
        >
          {'Open foo dropdown'}
        </button>
        <DropdownRoute path="foo">
          <ul>
            <li>{'Foo Item 1'}</li>
            <li>{'Foo Item 2'}</li>
          </ul>
        </DropdownRoute>
        <button
          type="button"
          onClick={toggleBar}
        >
          {'Open bar modal'}
        </button>
        <DropdownRoute path="bar">
          <ul>
            <li>{'Bah Item 1'}</li>
          </ul>
        </DropdownRoute>
      </div>
    );
  }

  return (
    <div>
      <DropdownRouter>
        <div>
          <InnerComponent/>
        </div>
      </DropdownRouter>
    </div>
  );
};
