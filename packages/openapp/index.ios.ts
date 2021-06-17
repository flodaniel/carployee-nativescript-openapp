import { OpenappCommon } from './common';

export class OpenApp extends OpenappCommon {
	public static open(appID, storeFallback, appleStoreId) {
		if (storeFallback === void 0) {
			storeFallback = true;
		}
		var sharedApplication = UIApplication.sharedApplication;
		var url = NSURL.URLWithString(appID.trim());
		if (sharedApplication.canOpenURL(url)) {
			// open app
			sharedApplication.openURL(url);
			return true;
		} else if (storeFallback && appleStoreId) {
			// can't open app - open store
			url = NSURL.URLWithString('itms-apps://itunes.apple.com/app/id' + appleStoreId);
			if (sharedApplication.canOpenURL(url)) {
				sharedApplication.openURL(url);
			} else {
				// can't open store - open the website
				url = NSURL.URLWithString('https://itunes.apple.com/app/id' + appleStoreId);
				sharedApplication.openURL(url);
			}
		}
		return false;
	}
}
