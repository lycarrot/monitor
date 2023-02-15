export declare enum ErrorType {
    JS = "js_error",
    RESOURCE = "resource_error",
    VUE = "vue_error",
    PROMISE = "promise_error",
    AJAX = "ajax_error"
}
export interface JsEventTarget {
    src?: string;
    href?: string;
    tagName?: string;
}
export interface AjaxEventTarget {
    status?: number;
    response?: string;
    statusText?: string;
    responseURL?: string;
}
