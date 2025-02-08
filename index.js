// Check in which mode is being executed
let ARGS, IS_DEV, IS_PROD, IS_DEBUG, SAVE, MODE, DEV, PROD, DEBUG, MIGRATE;
export { IS_DEV, IS_PROD, IS_DEBUG, SAVE , MIGRATE, MODE, DEV, PROD, DEBUG };

// Check which mode is being executed
function checkMode() {
    if ([IS_DEV, IS_PROD, IS_DEBUG].filter(cond=>cond).length>1)
        throw new Error('Multiple modes set')
    if (IS_DEV)
        MODE=DEV
    else if (IS_PROD)
        MODE=PROD
    else if (IS_DEBUG)
        MODE=DEBUG
}

// Load the node environment
export function loadNode() {
    ARGS = process.argv.slice(2)
    IS_DEV = ARGS.includes('--dev')
    IS_PROD = ARGS.includes('--prod')
    IS_DEBUG = ARGS.includes('--debug')
    SAVE = ARGS.includes('--save')
    MIGRATE = ARGS.includes('--migrate')
}

// Load Vite environment.
export function loadVite() {
    IS_DEV = import.meta.env.MODE==='dev'
    IS_PROD = import.meta.env.MODE==='prod'
    IS_DEBUG = import.meta.env.MODE==='debug'
    SAVE = import.meta.env.SAVE==='true'
    MIGRATE = import.meta.env.MIGRATE==='true'
}