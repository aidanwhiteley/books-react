// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
// @ts-ignore 
import { server } from './mocks/node';
//import { HttpRequest } from 'msw';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

server.events.on('request:start', (request: any) => {
    console.log('MSW intercepted:', request.method, request.url)
})