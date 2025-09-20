import { SignedIn, SignedOut, SignIn, SignInButton, SignUpButton, UserButton, useAuth} from '@clerk/clerk-react';


export default function ClerkHeader() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#3B5435] text-white shadow-md opacity-90">
      <div className="flex justify-between items-center p-4">
        
        <div>
          <h1 className="text-lg font-bold">Athena++</h1>
        </div>
        
        <nav>
          <SignedOut>
            <SignInButton /> <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
