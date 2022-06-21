"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class CharacterDatabase {
    constructor() {
        // agora o knex fica aqui dentro
        // juntando todas as infos referentes a Character em um só lugar
        this.connection = (0, knex_1.default)({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_SCHEMA,
                port: 3306,
                multipleStatements: true
            }
        });
    }
    //  método responsável por recuperar todos os dados
    getAllCharacters() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const characters = yield this.connection('character').select("*");
                return characters;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    //  método responsável por criar um novo Character. Repare que recebe o character do "type"
    // Character. Aqui a class Character é usada tal qual um type. 
    createCharacter(character) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection("character").insert(character);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.default = CharacterDatabase;
