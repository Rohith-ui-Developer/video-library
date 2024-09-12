import { Login } from "./login";
import { render, screen } from "@testing-library/react";

//Case-1

test('Title Test', ()=>{

     render(<Login />);

     let title = screen.getByTestId("title");
     expect(title).toBeInTheDocument();
     expect(title).toHaveTextContent("Customer Login");
});

//Case-2

test('Recover Password Link Test', ()=>{
     render(<Login />);

     let link = screen.getByText(/Recover Password/i);
     expect(link).toBeInTheDocument();
     expect(link).toHaveAttribute("href", "/recover");
});