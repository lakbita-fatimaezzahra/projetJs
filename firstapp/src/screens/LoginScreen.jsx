import { Modal, Button } from 'react-bootstrap'; 


// Fonction pour vérifier si l'utilisateur est connecté
export const isUserLoggedIn = () => !!localStorage.getItem("userId");


// Fonction de déconnexion
export const logoutUser = () => {
    localStorage.removeItem("userId");
};

// Modal Login
export function LoginModal({ show, handleClose, handleLogin, errorMessage, handleSwitchToRegister, username, setUsername, password, setPassword }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Connexion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleLogin}>
  <div className="form-group">
    <label>Nom d'utilisateur</label>
    <input
      type="text"
      className="form-control"
      placeholder="Entrez votre nom d'utilisateur"
      value={username}
      onChange={(e) => setUsername(e.target.value)} 
      required
      name="username"
    />
  </div>
  <div className="form-group">
    <label>Mot de passe</label>
    <input
      type="password"
      className="form-control"
      placeholder="Entrez votre mot de passe"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      required
      name="password"
    />
  </div>
  <button type="submit" className="btn btn-primary mt-3 w-100">
    Se connecter
  </button>
  {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
</form>

                <div className="mt-3 text-center">
                    <span>Pas encore de compte ?</span>
                    <a className="btn-link" onClick={handleSwitchToRegister}>
                        Inscrivez-vous ici
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}

// Modal Register
export function RegisterModal({ show, handleClose, handleRegister, registerMessage, handleSwitchToLogin, name, setName, username, setUsername, password, setPassword }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Inscription</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Nom</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Entrez votre nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}  // Mise à jour de l'état
                            required
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Entrez votre nom d'utilisateur"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}  // Mise à jour de l'état
                            required
                            name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}  // Mise à jour de l'état
                            required
                            name="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 w-100">
                        S'inscrire
                    </button>
                    {registerMessage && <div className="text-success mt-3">{registerMessage}</div>}
                </form>
                <div className="mt-3 text-center">
                    <span>Vous avez déjà un compte ?</span>
                    <a className="btn-link" onClick={handleSwitchToLogin}>
                        Connectez-vous ici
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}
