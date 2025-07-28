
import axios, { AxiosRequestConfig, Method } from "axios";
import { toast, ToastPosition } from "react-toastify";

// ----------- Generic API Request -----------
export const apiRequest = async <T = any>(
    url: string,
    method: Method = "GET",
    data?: Record<string, any>,
    params?: Record<string, any>,
    config?: AxiosRequestConfig
): Promise<T> => {
    try {
        const response = await axios({
            url,
            method,
            data,
            params,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            ...config,
        });

        return response.data;
    } catch (error: any) {
        // Optional: handle globally here
        throw error;
    }
};

interface StateWithLoadingAndError {
    loading: boolean;
    error: string | null;
}

export const setLoadingAndError = (state: StateWithLoadingAndError) => {
    state.loading = true;
    state.error = null;
};

export const setLoadingFalse = (state: StateWithLoadingAndError) => {
    state.loading = false;
};

export const setError = (state: StateWithLoadingAndError, errorMessage: string) => {
    state.loading = false;
    state.error = errorMessage || "An unknown error occurred.";
};

export const handleApiError = (error: unknown, message: string) => {
    console.error(message, error);
    throw new Error(message);
};

export function addAsyncCase<S>(
    builder: any,
    action: any,
    successReducer: (state: S, action: any) => void,
    errorMessage: string
) {
    builder
        .addCase(action.pending, (state: S) => setLoadingAndError(state as any))
        .addCase(action.fulfilled, (state: S, action: any) =>
            successReducer(state, action)
        )
        .addCase(action.rejected, (state: S) => setError(state as any, errorMessage));
}

export const notify = (
    message: string,
    type: "info" | "success" | "warning" | "error" | "default" = "info",
    position: ToastPosition = "top-right"
) => {
    (toast as any)[type]?.(message, { position }) ?? toast(message, { position });
};