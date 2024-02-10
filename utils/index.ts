import * as ui from '~/ui.config'

export function getUi(key: string) {
    if (key && Object.keys((ui as any)[key].length > 0)) {
        return (ui as any)[key]
    }
    return {}
}
