import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/clerk-react';

function header() {
    const { isSignedIn } = useAuth();
    <header>
        <div>Athena++</div>
        <div>
            {isSignedIn? (
                <UserButton signOutForceRedirectUrl="/"
            )
        </div>
    </header>
}

export default header()