import { BadRequestError } from "../services/auth.service.js";

export default class AuthController {

    #authService;

    constructor(authService) {
        this.#authService = authService;
    }

    async register(req, res) {
        const { names, username, password } = req.body;

        try {
            const { user, token } = await this.#authService.signUp({ names, username, password });

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
            if (error instanceof BadRequestError) {
                return res.status(400).json({ message: error.message });
                
            }
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