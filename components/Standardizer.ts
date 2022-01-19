type Class<T> = { new(...params: any[]): T }

const RETURN_NULL = () => null;
const RETURN_UNDEFINED = () => undefined;


export default class Standardizer<T> {
    public static readonly Array: Standardizer<any[]> = Standardizer.asCollection(Array, (item) => [item]);
    public static readonly ArrayNullContainable: Standardizer<any[]> = Standardizer.asCollection(Array, (item) => [item], true);
    public static readonly ArrayAnyContainable: Standardizer<any[]> = Standardizer.asCollection(Array, (item) => [item], true, true);

    /**
     * 
     * @param type 
     * @param conversion 
     * @param nullValue 
     * @param undefinedValue
     */
    constructor(
        private readonly type: Class<T>,
        private readonly conversion: (item: any) => T,
        private readonly nullValue: () => T = RETURN_NULL,
        private readonly undefinedValue: () => T = RETURN_UNDEFINED,
    ) {
    }

    public static asCollection<T>(
        type: Class<T>,
        conversion: (item: any) => T,
        nullItem: boolean = false,
        undefinedItem: boolean = false,
    ): Standardizer<T> {
        return new Standardizer(
            type,
            conversion,
            nullItem ? (() => new type(null)) : (() => new type()),
            undefinedItem ? (() => new type(undefined)) : (() => new type()),
        )
    }

    public apply(item: any | T | null | undefined): T {
        if (item === undefined) {
            return this.undefinedValue();
        }
        if (item === null) {
            return this.nullValue();
        }
        if (item instanceof this.type) {
            return item;
        }

        return this.conversion(item);
    }
}
