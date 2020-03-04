// -*- mode: javascript; js-indent-level: 2 -*-

import { promises as fs } from 'fs';

import * as core from '@actions/core'
import { Toolkit } from 'actions-toolkit'


async function main(tools: Toolkit): Promise<void> {
    const path = core.getInput('path')
    core.info(`Uploading ${path}"...`)

    const buff = new Buffer(await fs.readFile(path, 'binary'))
    const base64data = buff.toString('base64')

    // TODO: fixme
    const link = await tools.github.repos.createOrUpdateFile(tools.context(path))

    core.setOutput('link', link)
}

