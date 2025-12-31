import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>
          Log In
        </button>
      ) : (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
