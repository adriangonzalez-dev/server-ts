export const logger = (message: string, className?: string, methodName?: string) => {
    const timestamp = new Date().toLocaleDateString();
    let log = `[${timestamp}] - ${message}`;

    if (className) {
        log += ` - Class: ${className}`;
    }

    if (methodName) {
        log += ` - Method: ${methodName}`;
    }

    console.log(log);
}