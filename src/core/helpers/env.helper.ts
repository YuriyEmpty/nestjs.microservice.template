/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 13.01.2022
 */

/**
 * This class is intended for simplification working with env variables
 */
class Helper {

    /**
     * Return ENV variable
     */
    public get(name: string): string | undefined {
        return process.env[name];
    }

    /**
     * Compare if env variable == value
     */
    public equals(name: string, value: any): boolean {
        return process.env[name] == value;
    }

    /**
     * Compare if env variable != value
     */
    public notEquals(name: string, value: any): boolean {
        return process.env[name] !== value;
    }

}

export const EnvHelper = new Helper();