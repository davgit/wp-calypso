/**
 * Internal dependencies
 */
import config from 'config';
import { login, magicLogin } from './controller';
import { makeLayout, redirectLoggedIn, setUpLocale } from 'controller';

export default router => {
	if ( config.isEnabled( 'login/magic-login' ) ) {
		router( '/log-in/link/:lang?', setUpLocale, redirectLoggedIn, magicLogin, makeLayout );
	}

	if ( config.isEnabled( 'login/wp-login' ) ) {
		router(
			'/log-in/:twoFactorAuthType(authenticator|backup|sms|push)?/:lang?',
			setUpLocale,
			login,
			makeLayout,
		);
	}
};
