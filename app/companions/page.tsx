import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import CompanionForm from "@/components/CompanionForm";

const CompanionsLibrary = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Companions Library</h1>
      
      <SignedIn>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Create New Companion</h2>
          <CompanionForm />
        </div>
      </SignedIn>
      
      <SignedOut>
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">Sign in to access Companions Library</h2>
          <p className="text-gray-600 mb-6">Create and manage your AI teaching companions</p>
          <SignInButton mode="modal">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
    </div>
  );
};

export default CompanionsLibrary;