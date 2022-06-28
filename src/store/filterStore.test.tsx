import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import FilterStore, { Filter } from './filterStore'

const filterStore = new FilterStore();
test('loads and displays greeting', async () => {
  filterStore.setFilter(Filter.Active);

  expect(filterStore.filter).toEqual(Filter.Active);
})
