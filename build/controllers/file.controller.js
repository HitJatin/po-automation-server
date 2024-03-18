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
exports.updateFile = exports.getFile = void 0;
const File_1 = __importDefault(require("../models/File"));
const getFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idType, id } = req.params;
        const condn = {};
        condn[idType] = id;
        const file = yield File_1.default.findOne({ where: condn });
        let newFile;
        if (file) {
            newFile = file.fileContent.toString('base64');
            return res.status(201).json({
                success: true,
                message: `File fetched successfully`,
                data: {
                    file: {
                        fileName: file === null || file === void 0 ? void 0 : file.fileName,
                        fileContent: newFile
                    }
                },
            });
        }
        else {
            return res.status(200).json({
                success: false,
                message: `File Not Found`
            });
        }
    }
    catch (error) {
        return res.status(504).json({
            success: false,
            message: error.message,
            data: {
                "source": "file.controller.js -> getFile"
            },
        });
    }
});
exports.getFile = getFile;
const updateFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { attachment, idName, idValue } = req.body;
        const { idType } = req.params;
        const decodedFile = Buffer.from(attachment.buffer, 'base64');
        let file = yield File_1.default.findOne({
            where: {
                fileContent: idType,
                [idName]: idValue
            }
        });
        if (file) {
            yield file.update({
                fileName: attachment.originalname,
                fileContent: decodedFile
            }, {
                where: {
                    fileContent: idType,
                    [idName]: idValue
                }
            });
        }
        else
            file = yield File_1.default.create({
                fileName: attachment.originalname,
                fileContent: decodedFile,
                fileType: idType,
                [idName]: idValue
            });
        if (file) {
            return res.status(201).json({
                success: true,
                message: 'File updated Successfully',
                data: {
                    fileId: file.id
                }
            });
        }
        else
            return res.status(400).json({
                success: false,
                message: 'Some error occured while adding new File'
            });
    }
    catch (error) {
        return res.status(504).json({
            success: false,
            message: error.message,
            data: {
                "source": "file.controller.js -> updateFile"
            },
        });
    }
});
exports.updateFile = updateFile;
