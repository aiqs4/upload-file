// -*- mode: javascript; js-indent-level: 2 -*-

import * as fs from 'fs'

import * as core from '@actions/core'

jest.disableAutomock()

import * as main from '../src/main'


afterEach(() => {
    jest.restoreAllMocks()
})


test('test main function', async () => {

    // expect(fs.mock).toBeTruthy()
    // expect(fs.createReadStream.mock).toBeTruthy()


})

