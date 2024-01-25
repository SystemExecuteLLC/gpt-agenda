// app/sign-in.tsx
'use client';

import { useRouter } from 'next/navigation';
import { signIn } from '../utils/logto';

const SignIn = () => {
  const router = useRouter();

  const handleClick = async () => {
    const redirectUrl = await signIn();

    router.push(redirectUrl);
  };

  return (
    <button
      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold py-1 px-3 rounded"
      onClick={handleClick}
    >
      Sign in
    </button>
  );
};

export default SignIn;
