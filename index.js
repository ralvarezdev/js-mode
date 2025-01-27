// Check in which mode is being executed
export const ARGS =process.argv.slice(2)
export const IS_DEV = ARGS.includes('--dev')
export const IS_PROD = ARGS.includes('--prod')
export const IS_DEBUG = ARGS.includes('--debug')
export const SAVE = ARGS.includes('--save')

// Mode keys
export const DEV= "dev"
export const PROD ="prod"
export const DEBUG ="debug"
export let mode

// Check if there are multiple modes set
if ([IS_DEV, IS_PROD, IS_DEBUG].filter(cond=>cond).length>1)
    throw new Error('Multiple modes set')

// Set the mode according to the running environment
if (IS_DEV)
    mode=DEV
else if (IS_PROD)
    mode=PROD
else if (IS_DEBUG)
    mode=DEBUG