/* eslint-disable */
import * as Yup from 'yup';
import Instituicao from './models/Instituicao.js';

class InstituicaoController{
  async store(req,res){

    const instituicaoExists = await Instituicao.findOne({
      where: {nome: req.body.nome }
    });

    if(instituicaoExists){
      return res.status(400).json({ error: 'Essa instituição já existe'})
    }

    const {id , nome } = await Instituicao.create(req.body);

    return res.json({
      id,
      nome,
    });
  }
}

export default new InstituicaoController();
