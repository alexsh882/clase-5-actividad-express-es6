
export default class AuthController {

    #authService;

    constructor(authService) {
        this.#authService = authService;
    }

    async register(req, res) {
        const { name, username, password } = req.body;

        try {
            const { user, token } = await this.#authService.signUp({ name, username, password });

            res.json({ user, token, message: 'Usuario creado correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    async login(req, res) {

        const { username, password } = req.body;

        try {
            const { user, token } = await this.#authService.signIn({ username, password });

            res.json({ user, token, message: 'Iniciaste sesión correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    async logout(req, res) {
        const { id } = req.user;

        try {
            await this.#authService.logout({ id });

            res.json({ message: 'Cerraste sesión correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }
}