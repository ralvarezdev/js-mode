// Check in which mode is being executed
let ARGS, IS_DEV, IS_PROD, IS_DEBUG, SAVE, MODE, MIGRATE;
let DEV = 'dev', PROD = 'prod', DEBUG = 'debug';
export { IS_DEV, IS_PROD, IS_DEBUG, SAVE , MIGRATE, MODE, DEV, PROD, DEBUG };

// Check which mode is being executed
function checkMode() {
    const activeModes = [IS_DEV, IS_PROD, IS_DEBUG].filter(mode=>mode)
    if (activeModes.length>1)
        throw new Error('Multiple modes set')
    if (activeModes.length===0)
        throw new Error('No mode set')

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
    checkMode()
}

// Load Vite environment
export function loadVite() {
    ARGS = process.argv.slice(2)
    const modeIndex = ARGS.indexOf('--mode')
    if (modeIndex>=0&& ARGS.length>modeIndex+1){
        IS_DEV = ARGS[modeIndex+1]===DEV
        IS_PROD = ARGS[modeIndex+1]===PROD
        IS_DEBUG = ARGS[modeIndex+1]===DEBUG
    }else{
        IS_DEV = false
        IS_PROD = false
        IS_DEBUG = false
    }
    SAVE = ARGS.includes('--save')
    MIGRATE = ARGS.includes('--migrate')
    checkMode()
}