// Check in which mode is being executed
export const args =process.argv.slice(2)
export const isDev = args.includes('--dev')
export const isProd = args.includes('--prod')
export const isDebug = args.includes('--debug')
export const save = args.includes('--save')

// Mode keys
export const dev= "dev"
export const prod ="prod"
export const debug ="debug"
export let mode

// Check if there are multiple modes set
if ([isDev, isProd, isDebug].filter(cond=>cond).length>1)
    throw new Error('Multiple modes set')

// Set the mode according to the running environment
if (isDev)
    mode=dev
else if (isProd)
    mode=prod
else if (isDebug)
    mode=debug