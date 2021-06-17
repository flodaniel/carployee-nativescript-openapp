import { OpenappCommon } from './common';

export declare class OpenApp extends OpenappCommon {
	public static open(appID: string, storeFallback?: boolean, appleStoreId?: string): boolean;
}
