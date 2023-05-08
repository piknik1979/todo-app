import { render } from '@testing-library/react'
import ToDoList from './components/ToDoList';

test("Example 1 renders successfully", () => {
  render(<ToDoList/>);

  const element = screen.getByText(/task    /i);

  expect(element).toBeInTheDocument();
})