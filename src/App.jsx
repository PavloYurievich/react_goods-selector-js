import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];
function selectTitte({ selected, onClear }) {
  if (selected) {
    return (
      <h1 className="title is-flex is-align-items-center">
        {selected} is selected
        {selected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => onClear('')}
          />
        )}
      </h1>
    );
  }

  return (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );
}

export const App = () => {
  const [SelectGood, setSelectGood] = useState('Jam');

  return (
    <main className="section container">
      {selectTitte({ selected: SelectGood, onClear: setSelectGood })}
      <table className="table">
        <tbody>
          {goods.map(n => (
            <tr
              data-cy="Good"
              key={n}
              className={n === SelectGood ? 'has-background-success-light' : ''}
            >
              <td>
                {n !== SelectGood && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectGood(n)}
                  >
                    +
                  </button>
                )}
                {SelectGood === n && (
                  <button
                    data-cy="RemoveButton"
                    className="button is-info"
                    type="button"
                    onClick={() => setSelectGood('')}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {n}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
