import { screen, render, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import EmailValidator from "../EmailValidator";

test('should render Email Component', () => {
    render(<EmailValidator/>);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type","text");
});

test('pass valid email to test email input field', () => {
    render(<EmailValidator />);
    const inputEl = screen.getByTestId("email-input");
    act(()=>{userEvent.type(inputEl, "test@mail.com")});
    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg").innerHTML).toEqual("Valid email id");
});

test('pass in-valid email to test email input field', async () => {
    render(<EmailValidator />);
    const inputEl = await screen.getByTestId("email-input");
    act(()=>{userEvent.type(inputEl, "testmail.com")});
    expect(screen.getByTestId("email-input")).toHaveValue("testmail.com");
    expect(screen.queryByTestId("error-msg").innerHTML).toEqual("Please enter a valid email id");
});

test('passing an special character after the @ symbol', async () => {
    render(<EmailValidator />);
    const inputEl = await screen.getByTestId("email-input");
    act(()=>{userEvent.type(inputEl, "testmail@_gmail.com")});
    expect(screen.getByTestId("email-input")).toHaveValue("testmail@_gmail.com");
    expect(screen.queryByTestId("error-msg").innerHTML).toEqual("Please enter a valid email id");
});


test('passing an number in the domain name', async () => {
    render(<EmailValidator />);
    const inputEl = await screen.getByTestId("email-input");
    act(()=>{userEvent.type(inputEl, "testmail@gmail22.com")});
    expect(screen.getByTestId("email-input")).toHaveValue("testmail@gmail22.com");
    expect(screen.queryByTestId("error-msg").innerHTML).toEqual("Valid email id");
});

test('passing an blank space in email address', async () => {
    render(<EmailValidator />);
    const inputEl = await screen.getByTestId("email-input");
    act(()=>{userEvent.type(inputEl, "testmail @gmail22.com")});
    expect(screen.getByTestId("email-input")).toHaveValue("testmail @gmail22.com");
    expect(screen.queryByTestId("error-msg").innerHTML).toEqual("Please enter a valid email id");
});

test('passing a comma in email address', async () => {
    render(<EmailValidator />);
    const inputEl = await screen.getByTestId("email-input");
    act(()=>{userEvent.type(inputEl, "test,mail@gmail22.com")});
    expect(screen.getByTestId("email-input")).toHaveValue("test,mail@gmail22.com");
    expect(screen.queryByTestId("error-msg").innerHTML).toEqual("Please enter a valid email id");
});