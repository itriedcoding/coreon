// TypeScript type definitions for Coreon.js framework

declare module 'coreon' {
    export interface CoreonOptions {
        debug?: boolean;
        plugins?: Array<Plugin>;
    }

    export interface Plugin {
        install: (app: CoreonApp) => void;
    }

    export interface CoreonApp {
        use(plugin: Plugin): void;
        mount(selector: string): void;
        unmount(): void;
        state: Record<string, any>;
        setState(newState: Record<string, any>): void;
        getState(): Record<string, any>;
    }

    export function createApp(options?: CoreonOptions): CoreonApp;

    export function useState<T>(initialState: T): [T, (newState: T) => void];
    export function useEffect(effect: () => void | (() => void), deps?: Array<any>): void;
    export function useMemo<T>(factory: () => T, deps: Array<any>): T;
    export function useRef<T>(initialValue: T): { current: T };
    export function useReducer<T>(reducer: (state: T, action: any) => T, initialState: T): [T, (action: any) => void];
    export function useContext<T>(context: React.Context<T>): T;

    export function vIf(condition: boolean, template: () => void): void;
    export function vFor<T>(items: Array<T>, template: (item: T) => void): void;
    export function vShow(condition: boolean): void;
    export function vModel(value: any, callback: (newValue: any) => void): void;

    export function draggable(element: HTMLElement): void;
    export function resizable(element: HTMLElement): void;
    export function observable<T>(obj: T): T;

    export function apiService(url: string, options?: RequestInit): Promise<Response>;
    export function authService(): void;
    export function cacheService(): void;
    export function notificationService(message: string): void;

    export function httpAdapter(url: string, options?: RequestInit): Promise<Response>;
    export function wsAdapter(url: string): WebSocket;

    export const themes: {
        default: Record<string, any>;
        dark: Record<string, any>;
    };

    export const locales: {
        en: Record<string, string>;
        es: Record<string, string>;
        fr: Record<string, string>;
    };
}