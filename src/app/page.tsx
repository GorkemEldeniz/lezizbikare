'use client'

import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";

function App() {
  return (
    <main>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <Content />
				<SignOutButton />
      </Authenticated>
    </main>
  );
}

function Content() {
  return <div>Protected content</div>;
}

export default App;