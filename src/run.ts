import * as tool from 'actions-toolkit'

import main from './main'

async function run(): Promise<void> {
    try {
        const tools = new tool.Toolkit()
        await main(tools)
    } catch (error) {
        core.setFailed(error.message)
    }
}
