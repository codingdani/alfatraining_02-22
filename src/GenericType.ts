export function identity<T>(arg: T): T {
    return arg;
}

identity<boolean>(false);
identity<number>(5);
identity<string>("hello world");
