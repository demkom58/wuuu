import type {VueMessageType} from "vue-i18n";
import type {LocaleMessage} from "@intlify/core-base";

interface Locale {
    [index: string]: LocaleMessage<VueMessageType>;
}

const loadLocaleMessages = () => {
    // @ts-ignore
    const context = import.meta.glob('./src/**/*.locale.ts', { eager: true })
    const messages: Locale = {}
    for (const path in context) {
        const matched = path.match(/([A-Za-z0-9-_]+)\.locale\.ts$/i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = context[path].default
        }
    }
    return messages
}

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: loadLocaleMessages()
}))