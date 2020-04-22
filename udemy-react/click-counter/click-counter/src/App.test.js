import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

const findByTestAttribute = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);

    state && wrapper.setState(state);

    return wrapper;

}

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttribute(wrapper, 'component-app')

    expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, 'increment-button')

    expect(button.length).toBe(1);
});

test('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttribute(wrapper, 'counter-display')

    expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');

    expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    const button = findByTestAttribute(wrapper, 'increment-button');
    button.simulate('click');

    const counterDisplay = findByTestAttribute(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter + 1)
});